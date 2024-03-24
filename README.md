# Shadowverse tools

Web client with a few tools to assist playing the card game "Shadowverse Evolve".

This project relies on the [Backend API](https://github.com/hugoburguete/shadowverse-tools-api) to run so please check out that project before setting up the web client.

## Development

```bash
# Generate GraphQL resource types
$ pnpm run codegen:compile

# Start development environment
$ pnpm run start
```

## Deployment

- `docker build -t shadowverse-tools-client .`
