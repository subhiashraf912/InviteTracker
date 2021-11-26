import { Client } from "discord.js";
export default class InviteTracker {
    private client;
    private guildInvites;
    constructor(client: Client);
    init(): void;
}
