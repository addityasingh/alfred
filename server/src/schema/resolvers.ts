import authors from './authors'
import books from './books'
import { IResolvers } from 'graphql-tools';

const resolvers: IResolvers<any, any> = {
    Query: {
      books: () => books,
      author: (_, { id }) => authors.find(({ id: authorId}) => authorId === id),
    },
    Author: {
      books: (author) => books.filter(({ authorId }) => author.id === authorId),
    },
    Book: {
      author: (book) => authors.find(({ id }) => id === book.authorId),
    },
};

export default resolvers;