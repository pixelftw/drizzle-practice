DROP INDEX IF EXISTS "userIdIndex";--> statement-breakpoint
ALTER TABLE "userToGroup" DROP CONSTRAINT "userToGroup_groupId_userId_pk";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "userIdIndex" ON "userToGroup" USING btree ("userId");