"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Loading } from "../../components/Loading";
import { sendMessageAction } from "./actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  {
    return pending ? (
      <Loading className="w-9/12" />
    ) : (
      <button
        type="submit"
        disabled={pending}
        className="mt-4 hover:bg-gray-300 dark:hover:bg-gray-500"
      >
        {pending ? <Loading className="w-9/12" /> : "send message"}
      </button>
    );
  }
};

export const Form = () => {
  const [formState, formAction] = useFormState(sendMessageAction, {
    username: "",
    message: "",
    error: null,
  });

  return (
    <form action={formAction}>
      <h1 className="text-xl mb-1">drop a message!</h1>
      <div className="flex flex-col justify-between items-center my-3">
        <label className="mb-2" htmlFor="username">
          Your name:
        </label>
        <input
          id="username"
          name="username"
          defaultValue={formState.username}
          className="rounded mb-5"
        />

        <label className="mb-2" htmlFor="message">
          Your message here:
        </label>
        <textarea
          id="message"
          name="message"
          defaultValue={formState.message}
          className="rounded"
        />

        {formState.error && (
          <p className="text-sm text-rose-400">{formState.error.message}</p>
        )}

        <SubmitButton />
      </div>
    </form>
  );
};
