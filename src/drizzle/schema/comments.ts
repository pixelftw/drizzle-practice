import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { posts } from './posts';
import { users } from './users';

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  comment: text('comment').notNull(),
  postId: integer('postId').references(() => posts.id),
  userId: integer('userId').references(() => users.id),
});
