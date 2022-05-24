import { Client, Collection } from "discord.js";
import invite from "./invite";
declare module "discord.js" {
    interface ClientEvents {
        guildMemberAddWithInvite: [member: GuildMember, invite: invite];
    }
}
export default class InviteTracker {
    private client;
    guildInvites: Collection<string, Collection<string, number | null>>;
    constructor(client: Client);
}
