package com.zemoso.bookdiscovery.controller;

import com.zemoso.bookdiscovery.dto.book.BookDto;
import com.zemoso.bookdiscovery.service.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static com.zemoso.bookdiscovery.helper.Constants.BOOK_POST_MESSAGE;
@RestController
@CrossOrigin
public class BookController {
    
    @Autowired
    private BookServiceImpl bookService;
    
    @GetMapping(value = "/books",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<BookDto>> getBooks() {
        return ResponseEntity.status(HttpStatus.OK).body(bookService.getBookList());
    }
    
    @PostMapping(value = "/books",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> postBooks(@RequestBody @Valid BookDto bookDto) {
        bookService.saveBook(bookDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(BOOK_POST_MESSAGE);
    }
    
    @GetMapping(value = "/books/{bookId}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BookDto> getBookById(@PathVariable("bookId") int bookId) {
        return ResponseEntity.status(HttpStatus.OK).body(bookService.getBookById(bookId));
    }
    
    @GetMapping(value = "/books/search/{bookTitleOrAuthorName}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<BookDto>> getBookByTitleOrAuthor(@PathVariable("bookTitleOrAuthorName") String bookTitleOrAuthorName) {
        return ResponseEntity.status(HttpStatus.OK).body(bookService.getBookByTitleOrAuthor(bookTitleOrAuthorName, bookTitleOrAuthorName));
    }
}
