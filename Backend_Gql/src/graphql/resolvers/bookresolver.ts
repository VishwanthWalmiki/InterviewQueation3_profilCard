import Book,{IBook} from "../../models/Book";



export const bookResolvers = {
  Query: {
    books: async () => await Book.find(),
  },
  Mutation: {
    addBook: async (parent: any, args: any) => await Book.create(args),
  },
}