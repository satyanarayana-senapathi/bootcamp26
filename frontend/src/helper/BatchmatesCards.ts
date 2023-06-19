import Book1 from "../assets/batchmates-books/book-1.png";
import Book2 from "../assets/batchmates-books/book-2.png";
import Book3 from "../assets/batchmates-books/book-3.png";
import Book4 from "../assets/batchmates-books/book-4.png";
export interface BatchmatesData {
  title: string;
  author: string;
  src: string;
  category: string;
}
export const batchmateCards: BatchmatesData[] = [
  {
    title: "organic chemistry",
    author: "J D Lee",
    src: Book1,
    category: "Chemistry",
  },
  {
    title: "organic chemistry",
    author: "J D Lee",
    src: Book2,
    category: "Chemistry",
  },
  {
    title: "organic chemistry",
    author: "J D Lee",
    src: Book3,
    category: "Chemistry",
  },
  {
    title: "organic chemistry",
    author: "J D Lee",
    src: Book4,
    category: "Chemistry",
  },
];
