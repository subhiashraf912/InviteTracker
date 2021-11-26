"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class invite {
    constructor(options) {
        this.channel = options.channel;
        this.client = options.client;
        this.code = options.code;
        this.createdAt = options.createdAt;
        this.createdTimestamp = options.createdTimestamp;
        this.deletable = options.deletable;
        this.expiresAt = options.expiresAt;
        this.expiresTimestamp = options.expiresTimestamp;
        this.guild = options.guild;
        this.inviter = options.inviter;
        this.maxAge = options.maxAge;
        this.maxUses = options.maxUses;
        this.memberCount = options.memberCount;
        this.presenceCount = options.presenceCount;
        this.stageInstance = options.stageInstance;
        this.targetApplication = options.targetApplication;
        this.targetType = options.targetType;
        this.targetUser = options.targetUser;
        this.temporary = options.temporary;
    }
}
exports.default = invite;
