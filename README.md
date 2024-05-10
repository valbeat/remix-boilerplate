# Remix Boilerplate

[![🧪 Test](https://github.com/valbeat/remix-boilerplate/actions/workflows/test.yml/badge.svg)](https://github.com/valbeat/remix-boilerplate/actions/workflows/test.yml)

This is a template for Remix

```
npx create-remix@latest --template valbeat/remix-boilerplate
```

Learn more about [Remix Stacks](https://remix.run/stacks).

## What's in the stack

- Styling with [Tailwind](https://tailwindcss.com/)
- Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
- UI testing with [Storybook](https://storybook.js.org)
- Code formatting and Linting with [Biome](https://biomejs.dev/)
- Static Types with [TypeScript](https://typescriptlang.org)

Not a fan of bits of the stack? Fork it, change it, and use `npx create-remix --template your/repo`! Make it your own.

## Preview

Open this example on CodeSandbox:

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/valbeat/remix-boilerplate/)

## Development

- First run this stack's `remix.init` script.

  ```sh
  npx remix init
  ```

- Run the Vite dev server:

    ```sh
    pnpm run dev
    ```