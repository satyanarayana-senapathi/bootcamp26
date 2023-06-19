import Book1 from "../../public/assets/searchbooks/book-1.png";
import Book2 from "../../public/assets/searchbooks/book-2.png";
import Book3 from "../../public/assets/searchbooks/book-3.png";
import Book4 from "../../public/assets/searchbooks/book-4.png";
export interface SearchResultCardProps {
  title: string;
  author: string;
  src: string;
  category: string;
  id: number;
}
export const searchResultCardsData: SearchResultCardProps[] = [
  {
    author: "Yakuza",
    title: "Physics Life",
    src: Book1,
    category: "Physics",
    id: 0,
  },
  {
    author: "J D Lee",
    title: "Inorganic chemistry",
    src: Book2,
    category: "Chemistry",
    id: 0,
  },
  {
    author: "J D Lee",
    title: "Inorganic chemistry",
    src: Book3,
    category: "Chemistry",
    id: 0,
  },
  {
    author: "J D Lee",
    title: "Inorganic chemistry",
    src: Book4,
    category: "Chemistry",
    id: 0,
  },
  {
    author: "J D Lee",
    title: "Inorganic chemistry",
    src: Book4,
    category: "Chemistry",
    id: 0,
  },
  {
    author: "J D Lee",
    title: "Inorganic chemistry",
    src: Book4,
    category: "Chemistry",
    id: 0,
  },
  {
    author: "J D Lee",
    title: "Inorganic chemistry",
    src: Book4,
    category: "Chemistry",
    id: 0,
  },
];
