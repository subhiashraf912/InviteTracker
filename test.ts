import { Client, IntentsString } from "discord.js";
import InviteTracker from ".";
const intents: IntentsString[] = [
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
const client = new Client({
  intents,
});
new InviteTracker(client);
(async () => {
  await client.login(process.env.BOT_TOKEN!);
})();

client.on("guildMemberAddWithInvite", (member, invite) => {
  console.log(member, invite);
});

client.on("ready", () => {
  console.log(`${client.user?.tag} is ready`);
});
