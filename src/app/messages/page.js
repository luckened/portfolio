import { sql } from "@vercel/postgres";

export default async function Comments() {
  const { rows } = await sql`SELECT * from COMMENTS`;

  return (
    <section className="flex flex-col justify-center items-center h-screen w-screen">
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.name} - {row.comment}
        </div>
      ))}
    </section>
  );
}
