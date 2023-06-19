import Book1 from "../assets/chem-1.png";
import Book2 from "../../public/assets/book.jpg";
import Book3 from "../assets/chem-3.png";
export interface AuthorData {
  title: string;
  src: string;
  category: string;
}
export const aboutAuthorBooks: AuthorData[] = [
  {
    title: "organic chemistry",
    src: Book1,
    category: "Chemistry",
  },
  {
    title: "organic chemistry",
    src: Book2,
    category: "Chemistry",
  },
  {
    title: "organic chemistry",
    src: Book3,
    category: "Chemistry",
  },
];
