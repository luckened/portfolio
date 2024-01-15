import { getAllComments } from "../../../data/comments";

export default async function Comments() {
  const { rows } = await getAllComments();

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
