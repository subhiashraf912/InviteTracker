import { Client, Collection } from "discord.js";
export default class InviteTracker {
    private client;
    guildInvites: Collection<string, Collection<string, number | null>>;
    constructor(client: Client);
}
