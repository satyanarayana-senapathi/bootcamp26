package com.zemoso.bookdiscovery.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.bookdiscovery.dto.book.BookDto;
import com.zemoso.bookdiscovery.dto.book.BookMapper;
import com.zemoso.bookdiscovery.entity.Author;
import com.zemoso.bookdiscovery.entity.Book;
import com.zemoso.bookdiscovery.service.BookServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static com.zemoso.bookdiscovery.helper.Constants.BOOK_POST_MESSAGE;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(MockitoJUnitRunner.class)
class BooksControllerTest {
    @MockBean
    BookServiceImpl bookService;
    
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private BookMapper bookMapper;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Test
    void getBookByTitleOrAuthorName() throws Exception {
        Date date = new Date();
        Author author = new Author(1, "author", "author description", "src/author/image");
        Book book = new Book(1, "Inorganic chemistry", 500, "description", "/src/image1", "physics", date, author);
        List<Book> books = new ArrayList<>();
        books.add(book);
        when(bookService.getBookByTitleOrAuthor("Inorganic chemistry", "Inorganic chemistry")).thenReturn(bookMapper.map(books));
        this.mockMvc.perform(get("/books/search/{bookTitleOrAuthorName}", "Inorganic chemistry").header("Content-Type", "application/json")).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)));
    }
    
    @Test
    void getBooksTest() throws Exception {
        Date date = new Date();
        Author author = new Author(1, "author", "author description", "src/author/image");
        List<Book> books = new ArrayList<>();
        Book book1 = new Book(1, "Book 1", 500, "description", "/src/image1", "physics", date, author);
        Book book2 = new Book(2, "Book 2", 400, "description", "/src/image2", "physics", date, author);
        books.add(book1);
        books.add(book2);
        when(bookService.getBookList()).thenReturn(bookMapper.map(books));
        this.mockMvc.perform(get("/books").header("Content-Type", "application/json")).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }
    
    @Test
    void getBooksByIdTest() throws Exception {
        Date date = new Date();
        Author author = new Author(1, "author", "author description", "src/author/image");
        Book book = new Book(1, "Book 1", 500, "description", "/src/image1", "physics", date, author);
        when(bookService.getBookById(1)).thenReturn(bookMapper.map(book));
        this.mockMvc.perform(get("/books/{bookId}", 1).header("Content-Type", "application/json")).andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.title", is("Book 1")))
                .andExpect(jsonPath("$.totalPages", is(500)))
                .andExpect(jsonPath("$.description", is("description")))
                .andExpect(jsonPath("$.image", is("/src/image1")))
                .andExpect(jsonPath("$.category", is("physics")));
    }
    
    @Test
    void postBooks() throws Exception {
        Date date = new Date();
        Author author = new Author(1, "author", "author description", "src/author/image");
        Book book = new Book(1, "Book 1", 500, "description", "/src/image1", "physics", date, author);
        BookDto bookDto = bookMapper.map(book);
        
        MvcResult result = mockMvc.perform(post("/books").content(objectMapper.writeValueAsString(bookDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isCreated())
                .andReturn();
        
        assertEquals(BOOK_POST_MESSAGE, result.getResponse().getContentAsString());
    }
}