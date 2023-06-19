package com.zemoso.bookdiscovery.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.bookdiscovery.dto.library.LibraryDto;
import com.zemoso.bookdiscovery.dto.library.LibraryMapper;
import com.zemoso.bookdiscovery.dto.library.LibraryPostDto;
import com.zemoso.bookdiscovery.entity.Author;
import com.zemoso.bookdiscovery.entity.Book;
import com.zemoso.bookdiscovery.entity.Library;
import com.zemoso.bookdiscovery.entity.User;
import com.zemoso.bookdiscovery.service.LibraryServiceImpl;
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

import static com.zemoso.bookdiscovery.helper.Constants.LIBRARY_POST_MESSAGE;
import static com.zemoso.bookdiscovery.helper.Constants.LIBRARY_PUT_MESSAGE;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(MockitoJUnitRunner.class)
class LibraryControllerTests {
    
    @MockBean
    LibraryServiceImpl libraryService;
    
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private LibraryMapper libraryMapper;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Test
    void getLibrary() throws Exception {
        Date date = new Date();
        Author author = new Author(1, "author", "author description", "src/author/image");
        Book book = new Book(1, "Book 1", 500, "description", "/src/image1", "physics", date, author);
        User user = new User(1, "user", "student", "src/user/image");
        List<Library> libraryList = new ArrayList<>();
        
        Library library1 = new Library(1, user, book, "current", 300, 4.5);
        Library library2 = new Library(2, user, book, "current", 300, 4.5);
        
        libraryList.add(library1);
        libraryList.add(library2);
        
        List<LibraryDto> libraryDtoList = libraryMapper.map(libraryList);
        
        when(libraryService.getLibraryList(1, "current")).thenReturn(libraryDtoList);
        
        mockMvc.perform(get("/library/{userId}", 1)
                        .param("status", "current")
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
        
    }
    
    @Test
    void updateLibraryUserBookStatusTest() throws Exception {
        LibraryPostDto libraryPostDto = new LibraryPostDto();
        libraryPostDto.setBookId(1);
        libraryPostDto.setPageRead(200);
        libraryPostDto.setStatus("current");
        libraryPostDto.setRating(4.5);
        
        MvcResult mvcResult = mockMvc.perform(put("/library/{userId}", 1)
                        .content(objectMapper.writeValueAsString(libraryPostDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(LIBRARY_PUT_MESSAGE, content);
    }
    
    @Test
    void postLibrary() throws Exception {
        
        LibraryPostDto libraryPostDto = new LibraryPostDto();
        libraryPostDto.setBookId(1);
        libraryPostDto.setPageRead(200);
        libraryPostDto.setStatus("current");
        libraryPostDto.setRating(4.5);
        
        MvcResult result = mockMvc.perform(post("/library/{userId}", 1).content(objectMapper.writeValueAsString(libraryPostDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isCreated())
                .andReturn();
        
        assertEquals(LIBRARY_POST_MESSAGE, result.getResponse().getContentAsString());
    }
}
