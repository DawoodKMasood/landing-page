Landing page for ExoBinary. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Scalable Project Structure

This structure is optimized for large-scale applications, ensuring easy maintainability, scalability, and separation of concerns.

### Directory Structure

- `/pages`
  - Contains page components.
  - Next.js uses the file system as the routing mechanism, so each file under `/pages` becomes a route.

- `/components`
  - Reusable components specific to this application.
  - Subdivide into UI and layout components.

- `/public`
  - Static files like images, fonts, etc.

- `/styles`
  - Global styles, variables, and common mixins.
  - Consider using a preprocessor like Sass for more control.

- `/lib`
  - Shared utility functions and helper code.

- `/services`
  - Code for external API calls and data fetching.
  - Consider abstracting API calls for cleanliness and to handle API changes gracefully.

- `/hooks`
  - Custom React hooks for shared logic across components.

- `/context`
  - Global state management using Context API.
  - Use Redux or MobX for more complex state management.

- `/models`
  - Type definitions (if using TypeScript) and data models.

- `/config`
  - Application configuration and environment variables.

- `/tests`
  - Unit and integration tests.
  - Organize tests to mirror the structure of the components and services they are testing.

### Additional Considerations

- **Code Splitting:** Utilize dynamic imports with `next/dynamic` for splitting code at component level.
- **SEO Optimization:** Use `next/head` to manage the head section of each page.
- **Internationalization:** Consider using `next-i18next` for easy localization.
- **Environment Variables:** Store sensitive data in `.env.local` and access them via `process.env`.
- **Static Generation vs Server-Side Rendering:** Decide on a per-page basis using `getStaticProps`/`getStaticPaths` and `getServerSideProps`.
- **Testing Strategy:** Implement a robust testing strategy with Jest and React Testing Library.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
