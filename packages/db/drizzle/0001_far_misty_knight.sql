CREATE TABLE `guild_settings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`discord_guild_id` text NOT NULL,
	`settings` text DEFAULT '{}' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `guild_settings_discord_guild_id_unique` ON `guild_settings` (`discord_guild_id`);--> statement-breakpoint
DROP TABLE `prefixes`;