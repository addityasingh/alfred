import micro, { send } from 'micro';
import { microGraphql, microGraphiql } from 'apollo-server-micro';
import { get, post, router } from 'microrouter';
import schema from './schema';

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });

const server = micro(
  router(
    get('/graphql', graphqlHandler),
    post('/graphql', graphqlHandler),
    get('/graphiql', graphiqlHandler),
    (req, res) => send(res, 404, 'not found'),
  ),
);

server.listen(3000);