import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://my-graphql-api.com/graphql',
  documents: './src/**/*.gql',
  generates: {
    './graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'graphql-codegen-svelte-apollo']
    }
  }
}
export default config