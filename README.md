Considerations for picking package and language setup

- The server side code should be debuggable with `node inspect`
- Minimum size: Use `micro` server
- Type safe: Use `Typescript` for server and `flow` for client
- Declarative: Use `Relay` for GraphQL client and `Apollo` for GraphQL server
- Easy to deploy: Use `Kubernetes` with GCP
- Easy to test: 
    - Unit test using `Jest`
    - 
- Easy to make changes across codebase: `Lerna` for monorepo 
- Easy to work within a team: Use `CONTRIBUTING guidelines` and `prettier`