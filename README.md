This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To run the backend locally `cp .env.example .env.development` and fill in the environment variables

## Project structure

This is using the Next's new app router under `src/app`

- `(messages)` route group for "messages-related" content

  - `/leave-a-message` -> form to send a message
  - `/messages` -> list all messages page

- `components/` -> general purpose react components
- `hooks/` -> general purpose react hooks
- `providers/` -> context providers (here we have only theme but could have other like state)
- `data/comments.js` -> basically the entire backend / api in two functions lol

## Timesheet

the durations are all an approximation, I've made several pauses during the development

30min - bootstrap project with create-next-app utility tool, project cleanup & deploy to vercel

1h30 - setup themes and main homepage

1h30m - setup lazy load in main homepage with suspense & react.lazy

1h30m - setup vercel postgres db, `/messages` (list all messages page)

1h - setup message form: state, db insertion and a minimal validation

30m - copy data from my linkedin to the homepage, fill readme

## Some thoughts

- All the content in homepage is copy-pasted from [my linkedin](https://www.linkedin.com/in/luckened/), I've spent no time writing new stuff nor redesigning anything;

- I have about 0 expertise with tailwind css and the first touch was very "wtf is this tool", but once I got the feeling it was lots of fun, knowing raw css also helped a lot;

- I've spent more than I should in `/leave-a-message` because I tried new fancy react stuff like `useFormState`, `useFormStatus` hooks, but it was lots of fun.

- No docker/k8s or anything was setup for the sake of simplicity, vercel's free tier postgres db works just fine for POC's like this

- I had a hard time invalidating vercel CDN cache. If you're not seeing your message upon form submit it is very likely that you're hitting cache, try sending another message so it will try to invalidate again and or refresh the page skipping browser/sw cache (cmd + shift + R). This cache is definitely not working as it should but I've got no time to figure it out yet;
