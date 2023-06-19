package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.book.BookDto;
import com.zemoso.bookdiscovery.dto.book.BookMapper;
import com.zemoso.bookdiscovery.entity.Book;
import com.zemoso.bookdiscovery.exception.BookNotFoundException;
import com.zemoso.bookdiscovery.repository.AuthorRepository;
import com.zemoso.bookdiscovery.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private AuthorRepository authorRepository;
    @Autowired
    private BookMapper bookMapper;
    
    @Override
    public List<BookDto> getBookList() {
        return bookMapper.map(bookRepository.findAll());
    }
    
    @Override
    public void saveBook(BookDto bookDto) {
        bookDto.setAuthor(authorRepository.getById(1));
        bookRepository.save(bookMapper.map(bookDto));
    }

    @Override
    public BookDto getBookById(int id) {
        Optional<Book> result = bookRepository.findById(id);
        if(result.isEmpty())
            throw new BookNotFoundException("Book Id is not found");
        return bookMapper.map(result.get());
    }

    @Override
    public List<BookDto> getBookByTitleOrAuthor(String bookTitle,String authorName) {
        return bookMapper.map(bookRepository.findBookByTitleIgnoreCaseContainingOrAuthorNameIgnoreCaseContaining(bookTitle,authorName));
    }
}
