package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.book.BookDto;
import com.zemoso.bookdiscovery.dto.book.BookMapper;
import com.zemoso.bookdiscovery.entity.Author;
import com.zemoso.bookdiscovery.entity.Book;
import com.zemoso.bookdiscovery.exception.BookNotFoundException;
import com.zemoso.bookdiscovery.repository.AuthorRepository;
import com.zemoso.bookdiscovery.repository.BookRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(MockitoJUnitRunner.class)
class BooksServiceTest {
    
    @Autowired
    BookServiceImpl bookService;
    
    @MockBean
    BookRepository bookRepository;
    
    @Autowired
    BookMapper bookMapper;
    
    @MockBean
    AuthorRepository authorRepository;
    
    @Test
    void retrievingBookByTitleOrAuthorName() {
        Date presentDate = new Date();
        Author authorAkhil = new Author(1, "Akhil", "best author at present", "src/author/image");
        List<Book> books = new ArrayList<>();
        Book inorganicChemistryV1 = new Book(1, "Inorganic chemistry", 500, "v1", "/src/image1", "chemistry", presentDate, authorAkhil);
        Book inorganicChemistryV2 = new Book(2, "Inorganic chemistry", 400, "v2", "/src/image2", "chemistry", presentDate, authorAkhil);
        books.add(inorganicChemistryV1);
        books.add(inorganicChemistryV2);
        String title = "Inorganic chemistry";
        when(bookRepository.findBookByTitleIgnoreCaseContainingOrAuthorNameIgnoreCaseContaining(title, title)).thenReturn(books);
        List<BookDto> bookDtoList = bookService.getBookByTitleOrAuthor(title, title);
        assertEquals(2, bookDtoList.size());
        verify(bookRepository, times(1)).findBookByTitleIgnoreCaseContainingOrAuthorNameIgnoreCaseContaining(title, title);
    }
    
    @Test
    void getBookListTest() {
        Date date = new Date();
        Author author = new Author(1, "author", "author description", "src/author/image");
        List<Book> books = new ArrayList<>();
        Book book1 = new Book(1, "Book 1", 500, "description", "/src/image1", "physics", date, author);
        Book book2 = new Book(2, "Book 2", 400, "description", "/src/image2", "physics", date, author);
        books.add(book1);
        books.add(book2);
        when(bookRepository.findAll()).thenReturn(books);
        List<BookDto> bookDtoList = bookService.getBookList();
        assertEquals(2, bookDtoList.size());
        verify(bookRepository, times(1)).findAll();
    }
    
    @Test
    void getBookByIdTest() throws BookNotFoundException {
        Date date = new Date();
        Author author = new Author(1, "author", "author description", "src/author/image");
        Optional<Book> result = Optional.of(new Book(1, "Book 1", 500, "description", "/src/image1", "physics", date, author));
        when(bookRepository.findById(1)).thenReturn(result);
        BookDto bookDto = bookService.getBookById(1);
        assertEquals(1, bookDto.getId());
        assertEquals("Book 1", bookDto.getTitle());
        assertEquals(500, bookDto.getTotalPages());
        assertEquals("description", bookDto.getDescription());
        assertEquals("/src/image1", bookDto.getImage());
        assertEquals("physics", bookDto.getCategory());
        assertEquals(author, bookDto.getAuthor());
        int id = -100000;
        Optional<Book> result1 = Optional.empty();
        when(bookRepository.findById(id)).thenReturn(result1);
        try {
            bookService.getBookById(id);
        } catch (BookNotFoundException exception) {
            assertEquals("Book Id is not found", exception.getMessage());
        }
    }
    
    @Test
    void postBooks() {
        ArgumentCaptor<Book> argument = ArgumentCaptor.forClass(Book.class);
        Book book = new Book(1, "title", 200, "description", "path", "physics", null, null);
        
        bookService.saveBook(bookMapper.map(book));
        verify(bookRepository, times(1)).save(argument.capture());
        
    }
}
