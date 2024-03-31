import { CodegenConfig } from '@graphql-codegen/cli';
import { config as loadEnv } from 'dotenv';

loadEnv();

const config: CodegenConfig = {
  schema: process.env.REACT_APP_API_ENDPOINT,
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/gql/generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        // Disabling fragment masking for now. When this was active, I was not
        // able to convert the type of the result of a card search to the
        // fragment it composes it. There's an open discussion on the matter
        // here:
        // https://github.com/dotansimha/graphql-code-generator/discussions/8859
        fragmentMasking: false,
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
