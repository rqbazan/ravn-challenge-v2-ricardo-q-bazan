# sw.rcrd.space 🛰

## Deploys

- **Web**: https://sw.rcrd.space
- **UI**: https://sw.rcrd.space/storybook

## Architecture

- **Framework**: [Next.js](https://nextjs.org)
- **Component Driven**: [Storybook](https://storybook.js.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Backend**: [Star Wars GraphQL](https://swapi-graphql.netlify.app)
- **Deployment**: [Vercel](https://vercel.com)

## Structure

```
├── 📁 public: Folder to serve static files
├── 📂 src: Contains all the code source
|  ├── 📄 env.ts: Single entry point for all env vars
|  ├── 📂 gql
|  |  ├── 📄 index.ts: Generated types by GraphQL Codegen
|  |  └── 📁 queries: GraphQL queries documents
|  ├── 📁 layouts: Layout components
|  ├── 📁 lib: Connectors to external services
|  ├── 📁 pages: Next.js pages
|  ├── 📂 styles: Raw *.css files
|  ├── 📂 ui
|  |  ├── 📁 components: Shared components
|  |  ├── 📁 core: Design System components
|  |  ├── 📁 icons: SVG Icons
|  |  └── 📄 theme.ts: Design tokens
|  └── 📁 views: Out of Next.js routing components
```

> Other folders and files are required for tools configuration

## Running

### Prepare

```bash
git clone https://github.com/rqbazan/ravn-challenge-v2-ricardo-q-bazan.git
cd ravn-challenge-v2-ricardo-q-bazan
cp .env.example .env
yarn
```

### Development

- To run the Next App

```bash
yarn dev

```

- To run the Storybook App

```bash
yarn storybook

```

### Production <sup>_similar_</sup>

1. Install `vercel` CLI globally

```bash
yarn global add vercel
```

2. Run `vercel` in dev mode

```bash
vercel dev
```

## Considerations

- The commit history follows [Semantic Versioning](https://semver.org/), enforced by [commitlint](https://github.com/conventional-changelog/commitlint)
- The [automatic releases](./.github/workflows/release.yml) are made by [Semantic Release](https://github.com/semantic-release/semantic-release)

## License

MIT © [Ricardo Q. Bazan](https://rcrd.space)
