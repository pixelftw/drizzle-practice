import {
  integer,
  pgTable,
  serial,
  text,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { users } from './users';

export const groups = pgTable('groups', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});

export const userToGroup = pgTable(
  'userToGroup',
  {
    userId: integer('userId').references(() => users.id),
    groupId: integer('groupId').references(() => groups.id),
  },
  (table) => ({ userIdIndex: uniqueIndex('userIdIndex').on(table.userId) }),
);
