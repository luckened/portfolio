import { getAllComments } from "../../../data/comments";

export const revalidate = true;

export default async function Comments() {
  const { rows } = await getAllComments();

  return (
    <section className="flex flex-col justify-center items-center h-screen w-screen">
      {rows.length ? (
        rows.map((row) => (
          <div key={row.id}>
            {row.id} - {row.name} - {row.comment}
          </div>
        ))
      ) : (
        <p>no comments yet</p>
      )}
    </section>
  );
}
