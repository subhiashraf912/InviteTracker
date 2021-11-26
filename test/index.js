const Discord = require("discord.js");
const InviteTracker = require("../dist").default;
const intents = [
  "GUILDS",
  "GUILD_INVITES",
  "GUILD_MEMBERS",
];
const partials = ["USER", "GUILD_MEMBER"];
const client = new Discord.Client({
  intents,
  partials,
});
new InviteTracker(client).init();
client.on("guildMemberAddWithInvite", (member, invite) => {
  console.log(member.user.tag);
  console.log(invite.code);
});

client.login("token");
