export default `
    type Author {
        id: Int!,
        firstName: String,
        lastName: String,
        books: [Book]
    }

    type Book {
        id: Int!,
        author: Author,
        title: String,
        votes: Int
    }

    type Query {
        books: [Book],
        author(id: Int!): Author
    }
`;