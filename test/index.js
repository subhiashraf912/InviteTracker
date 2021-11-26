const Discord = require("discord.js");
const InviteTracker = require("../dist/app").default;
const intents = [
  "DIRECT_MESSAGES",
  "DIRECT_MESSAGE_REACTIONS",
  "DIRECT_MESSAGE_TYPING",
  "GUILDS",
  "GUILD_BANS",
  "GUILD_EMOJIS_AND_STICKERS",
  "GUILD_INTEGRATIONS",
  "GUILD_INVITES",
  "GUILD_MEMBERS",
  "GUILD_MESSAGES",
  "GUILD_MESSAGE_REACTIONS",
  "GUILD_MESSAGE_TYPING",
  "GUILD_PRESENCES",
  "GUILD_VOICE_STATES",
  "GUILD_WEBHOOKS",
];
const par = ["USER", "REACTION", "MESSAGE", "GUILD_MEMBER", "CHANNEL"];
const client = new Discord.Client({
  intents,
  partials: par,
});

new InviteTracker(client).init();
client.on("guildMemberAddWithInvite", (member, invite) => {
  console.log(member.user.tag);
  console.log(invite.code);
});

client.login("token");
