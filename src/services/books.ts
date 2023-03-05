import { Book } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookId: number) => {
	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: Book) => {
	const findBook = await Book.findOne({
		where: {
			title: book.title,
			author: book.author,
			description: book.description
		},
	});

	if (!findBook){
		return Book.create<Book>(book);
	}
	return 'Sorry this book is already in the database';
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};

//User Story: As a user, I want to use the Book Manager API to delete a book using its ID
export const deleteBook = async (bookId: number) => {
	return Book.destroy({
		where: {
			bookId,
		}
	});
};
