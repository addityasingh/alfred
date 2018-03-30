import micro, { send } from 'micro';
import { microGraphql, microGraphiql } from 'apollo-server-micro';
import { get, post, router } from 'microrouter';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';

const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });

const server = micro(
  router(
    get('/graphql', graphqlHandler),
    post('/graphql', graphqlHandler),
    get('/graphiql', graphiqlHandler),
    (_, res) => send(res, 404, 'not found'),
  ),
);

server.listen(3000, () => {
  console.log('Server started at port: 3000');
});