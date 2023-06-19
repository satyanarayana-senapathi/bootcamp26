import { useEffect, useState } from "react";
import { TaskCardProps } from ".";
import getList from "../../../services/getList";

const tasks: TaskCardProps[] = [
  {
    src: "/assets/icons/reading40.svg",
    alt: "zemoso",
    title: "Currently Reading",
    value: 6,
  },
  {
    src: "/assets/icons/bookmark40.svg",
    alt: "zemoso",
    title: "Books To Read",
    value: 74,
  },
  {
    src: "/assets/icons/complete40.svg",
    alt: "zemoso",
    title: "Books Read",
    value: 30,
  },
  {
    src: "/assets/icons/target40.svg",
    alt: "zemoso",
    title: "Target Per Year",
    value: 100,
  },
];

export const getTasks = () => {
  const [bookList, setBookList] = useState<TaskCardProps[]>([]);
  const list = [...tasks];
  useEffect(() => {
    getList("/library/1?status=current").then((res) => {
      list[0].value = res.length;
      getList("/library/1?status=finished").then((res) => {
        list[2].value = res.length;
        setBookList([...list]);
      });
    });
  }, []);
  return bookList;
};
