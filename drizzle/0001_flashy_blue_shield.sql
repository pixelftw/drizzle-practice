ALTER TABLE "usersToGroups" RENAME TO "userToGroup";--> statement-breakpoint
ALTER TABLE "userToGroup" DROP CONSTRAINT "usersToGroups_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "userToGroup" DROP CONSTRAINT "usersToGroups_groupId_groups_id_fk";
--> statement-breakpoint
ALTER TABLE "userToGroup" DROP CONSTRAINT "usersToGroups_groupId_userId_pk";--> statement-breakpoint
ALTER TABLE "userToGroup" ADD CONSTRAINT "userToGroup_groupId_userId_pk" PRIMARY KEY("groupId","userId");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userToGroup" ADD CONSTRAINT "userToGroup_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userToGroup" ADD CONSTRAINT "userToGroup_groupId_groups_id_fk" FOREIGN KEY ("groupId") REFERENCES "public"."groups"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
