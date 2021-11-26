import invite from "../invite";

declare module 'discord.js' {
    interface ClientEvents {
          guildMemberAddWithInvite: [member: GuildMember, invite: invite];
    }
}