export interface UserProps {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface AuthorProps {
  id: number;
  name: string;
  description: string;
  image: string;
}
export interface BookProps {
  id: number;
  title: string;
  totalPages: number;
  description: string;
  image: string;
  category: string;
  releaseDate: string;
  author: AuthorProps;
}
export interface LibraryProps {
  id: number;
  user: UserProps;
  book: BookProps;
  status: string;
  pageRead: number;
  rating: number;
}

export interface PostLibrary {
  bookId: number;
  status: string;
}
