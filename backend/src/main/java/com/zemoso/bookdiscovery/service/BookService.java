package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.book.BookDto;

import java.util.List;

public interface BookService {
    
    public List<BookDto> getBookList();
    
    public void saveBook(BookDto bookDto);

    public BookDto getBookById(int id);

    List<BookDto> getBookByTitleOrAuthor(String bookTitle,String authorName);
}
