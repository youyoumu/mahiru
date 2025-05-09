CREATE TABLE `meme` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`discord_user_id` text NOT NULL,
	`discord_guild_id` text NOT NULL,
	`key` text NOT NULL,
	`value` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `prefixes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`discord_guild_id` text NOT NULL,
	`prefix` text NOT NULL
);
