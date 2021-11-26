import { InviteTargetType } from "discord-api-types";
import { Client, Guild, GuildChannel, IntegrationApplication, InviteGuild, InviteStageInstance, PartialGroupDMChannel, User } from "discord.js";
export default class invite {
    channel: GuildChannel | PartialGroupDMChannel;
    client: Client<boolean>;
    code: string;
    createdAt: Date | null;
    createdTimestamp: number | null;
    deletable: boolean;
    expiresAt: Date | null;
    expiresTimestamp: number | null;
    guild: Guild | InviteGuild | null;
    inviter: User | null;
    maxAge: number | null;
    maxUses: number | null;
    memberCount: number;
    presenceCount: number;
    stageInstance: InviteStageInstance | null;
    targetApplication: IntegrationApplication | null;
    targetType: InviteTargetType | null;
    targetUser: User | null;
    temporary: boolean | null;
    constructor(options: inviteOptions);
}
interface inviteOptions {
    channel: GuildChannel | PartialGroupDMChannel;
    client: Client;
    code: string;
    createdAt: Date | null;
    createdTimestamp: number | null;
    deletable: boolean;
    expiresAt: Date | null;
    expiresTimestamp: number | null;
    guild: Guild | InviteGuild | null;
    inviter: User | null;
    maxAge: number | null;
    maxUses: number | null;
    memberCount: number;
    presenceCount: number;
    stageInstance: InviteStageInstance | null;
    targetApplication: IntegrationApplication | null;
    targetType: InviteTargetType | null;
    targetUser: User | null;
    temporary: boolean | null;
}
export {};
