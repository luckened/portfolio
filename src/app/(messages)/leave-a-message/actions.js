"use server";
import { revalidatePath } from "next/cache";
import { insertComment } from "../../../data/comments";

export const sendMessageAction = async (_, data) => {
  if (!data) return;

  const username = data.get("username");
  const message = data.get("message");

  if (!username)
    return {
      error: { message: "please insert your name" },
    };
  if (!message)
    return {
      error: { message: "please type a message" },
    };

  try {
    const { rowCount } = await insertComment(username, message);
    revalidatePath("/messages");
    return { username: "", message: "", errors: null };
  } catch (e) {
    return {
      error: { message: "server is down, try again later" },
    };
  }
};
