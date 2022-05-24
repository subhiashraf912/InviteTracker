"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const invite_1 = __importDefault(require("./invite"));
class InviteTracker {
    constructor(client) {
        this.guildInvites = new discord_js_1.Collection();
        if (!(client instanceof discord_js_1.Client)) {
            throw new Error("Client should be an instance of discord.js client");
        }
        this.client = client;
        this.client.on("inviteCreate", (invite) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const invites = yield ((_a = invite.guild) === null || _a === void 0 ? void 0 : _a.invites.fetch());
            const codeUses = new discord_js_1.Collection();
            invites.each((inv) => codeUses.set(inv.code, inv.uses));
            this.guildInvites.set((_b = invite.guild) === null || _b === void 0 ? void 0 : _b.id, codeUses);
        }));
        this.client.once("ready", () => {
            this.client.guilds.cache.forEach((guild) => {
                guild.invites
                    .fetch()
                    .then((invites) => {
                    const codeUses = new discord_js_1.Collection();
                    invites.each((inv) => codeUses.set(inv.code, inv.uses));
                    this.guildInvites.set(guild.id, codeUses);
                })
                    .catch((err) => { });
            });
        });
        this.client.on("guildMemberAdd", (member) => __awaiter(this, void 0, void 0, function* () {
            const cachedInvites = this.guildInvites.get(member.guild.id);
            const newInvites = yield member.guild.invites.fetch();
            try {
                const usedInvite = newInvites.find((inv) => ((cachedInvites === null || cachedInvites === void 0 ? void 0 : cachedInvites.get(inv.code)) || 0) < (inv.uses || 0));
                if (!usedInvite)
                    return;
                const inv = new invite_1.default({
                    channel: usedInvite.channel,
                    client: usedInvite.client,
                    code: usedInvite.code,
                    createdAt: usedInvite.createdAt,
                    createdTimestamp: usedInvite.createdTimestamp,
                    deletable: usedInvite.deletable,
                    expiresAt: usedInvite.expiresAt,
                    expiresTimestamp: usedInvite.expiresTimestamp,
                    guild: usedInvite.guild,
                    inviter: usedInvite.inviter,
                    maxAge: usedInvite.maxAge,
                    maxUses: usedInvite.maxUses,
                    memberCount: usedInvite.memberCount,
                    presenceCount: usedInvite.presenceCount,
                    stageInstance: usedInvite.stageInstance,
                    targetApplication: usedInvite.targetApplication,
                    //@ts-ignore
                    targetType: usedInvite.targetType,
                    targetUser: usedInvite.targetUser,
                    temporary: usedInvite.temporary,
                });
                this.client.emit("guildMemberAddWithInvite", member, inv);
            }
            catch (err) { }
            newInvites.each((inv) => cachedInvites === null || cachedInvites === void 0 ? void 0 : cachedInvites.set(inv.code, inv.uses));
            this.guildInvites.set(member.guild.id, cachedInvites);
        }));
        return this;
    }
}
exports.default = InviteTracker;
