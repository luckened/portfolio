import { sql } from "@vercel/postgres";

export const getAllComments = async () => await sql`SELECT * from COMMENTS`;

export const insertComment = async (name, message) =>
  await sql`INSERT INTO comments (name, comment) VALUES
(${name}, ${message});`;
