import React from "react";
import BookDetailPage from "../pages/BookDetailPage";
import Home from "../pages/Home";
import MyLibrary from "../pages/MyLibraryPage";
import SearchResultPage from "../pages/SearchResultPage";
const routes = [
  {
    path: "/",
    key: "HOME",
    component: <Home />,
  },
  {
    path: "/myLibrary",
    key: "My Library",
    component: <MyLibrary />,
  },
  {
    path: "/result",
    key: "RESULT",
    component: <SearchResultPage />,
  },
  {
    path: "/bookDetailView/:bookId",
    key: "Book Detail View",
    component: <BookDetailPage />,
  },
];
export default routes;
