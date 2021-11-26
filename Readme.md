<p align="center">
  <a href="https://github.com/subhiashraf912/InviteTracker">
    <img src="https://cdn.discordapp.com/attachments/900321704289656872/913816621724876820/Comp_1_00000.png" height="128">
    <h1 align="center">Discord Invite Tracker</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Invite Tracker logo" href="https://github.com/subhiashraf912/InviteTracker">
    <img src="https://img.shields.io/badge/Made%20Tracker-Made%20By%20Aze-000?style=for-the-badge&logo=discord">
  </a>
  <a aria-label="ES Version" href="https://www.ecma-international.org/">
    <img alt="" src="https://img.shields.io/badge/ES%20Version-2015-000?style=for-the-badge&logo=javascript">
  </a>
  <a aria-label="License">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Join the community on Discord" href="https://discord.gg/nQ55ZUSavA">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=discord&labelColor=000000&logoWidth=20">
  </a>
</p>

## Getting Started

Use this command in your terminal to install the package.
```js
cd project-path
npm i --save djs-invite-tracker
```

## How to use

```js

const Discord = require("discord.js");
const InviteTracker = require("djs-invite-tracker").default;

const intents = ["GUILDS", "GUILD_INVITES", "GUILD_MEMBERS"];
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


```

## Why djs-invite-tracker?

You need to do a lot of things to make the invite tracker and get the invite that the user used to join the server. with this package you only need to import the package and call it and it does the job for you.

## Community

You can join our discord server to give us suggestions or reports [Discord Server](https://discord.gg/nQ55ZUSavA).


## Github

You can find the source code on [Github](https://github.com/subhiashraf912/InviteTracker).

