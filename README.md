# atlas

[![Build Status](https://travis-ci.org/connexta/atlas.svg?branch=master)](https://travis-ci.org/connexta/atlas)
[![npm package](https://img.shields.io/npm/v/@connexta/atlas/latest.svg)](https://www.npmjs.com/package/@connexta/atlas)
[![npm downloads](https://img.shields.io/npm/dm/@connexta/atlas.svg)](https://www.npmjs.com/package/@connexta/atlas)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

Atlas is available as an [npm package](https://www.npmjs.com/package/@connexta/atlas).

Check out the latest [Storybook](https://unpkg.com/@connexta/atlas@0.0.35/.storybook/index.html) to learn how to use the library.

![alt text](https://media3.giphy.com/media/5RORsXDYXUOelTmtsQ/giphy-downsized.gif?cid=6104955e5cca41e94766374877f8a195&rid=giphy-downsized.gif)

#### GraphQL Autocompletion

1. Run `logSchema()` from chrome dev tools and copy into a new file called `schema.graphql` that you save to the root project folder.
2. Download [GraphQL for VS Code](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)
3. Download Watchman
4. Add a `.graphqlconfig` file to the root of your project with the following contents:

```javascript
{
  schema: {
    files: 'schema.graphql',
  },
  query: {
    files: [
      {
        match: ['src/**/*.js', 'src/**/*.tsx'],
        parser: ['EmbeddedQueryParser', { startTag: 'gql`', endTag: '`' }],
      },
    ],
  },
}
```

#### Type Generation using Codegen for GraphQL

1. Visit https://graphql-code-generator.com/
2. Paste your schema.graphql file into the generator with the following options:

```yaml
generates:
  server-types.ts:
    config:
      avoidOptionals: true
      maybeValue: T
    plugins:
      - typescript
```

3. Add the output to a types file in your project.

4. Make queries

```tsx
const query = gql`
  query {
    metacardsByTag(tag: "query-template") {
      status {
        hits
      }
      attributes {
        title
        id
        created
        modified
        description
        metacard_owner
      }
    }
  }
`
```

```tsx
const { data, error, loading } = useQuery<InsertTypescriptTypeHere>(query)
if (loading) return <div>Loading</div>
if (error) return <div>Error</div>

if (!data) {
  return <div>Error</div>
}

const response = data.metacardsByTag
```
