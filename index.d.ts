import invite from "./src/invite";
import InviteTracker from "./src/app";
export default InviteTracker;

declare module 'discord.js' {
    interface ClientEvents {
          guildMemberAddWithInvite: [member: GuildMember, invite: invite];
    }
}