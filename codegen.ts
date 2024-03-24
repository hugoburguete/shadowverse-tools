import { CodegenConfig } from '@graphql-codegen/cli';
import { config as loadEnv } from 'dotenv';

loadEnv();

const config: CodegenConfig = {
  schema: process.env.REACT_APP_API_ENDPOINT,
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
