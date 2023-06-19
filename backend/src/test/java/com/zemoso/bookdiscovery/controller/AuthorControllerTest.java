package com.zemoso.bookdiscovery.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.bookdiscovery.dto.author.AuthorDto;
import com.zemoso.bookdiscovery.dto.author.AuthorMapper;
import com.zemoso.bookdiscovery.entity.Author;
import com.zemoso.bookdiscovery.service.AuthorServiceImpl;
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

import static com.zemoso.bookdiscovery.helper.Constants.AUTHOR_POST_MESSAGE;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(MockitoJUnitRunner.class)
class AuthorControllerTest {
    
    @Autowired
    MockMvc mockMvc;
    
    @MockBean
    AuthorServiceImpl authorService;
    
    @Autowired
    AuthorMapper authorMapper;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Test
    void getAuthors() throws Exception {
        List<Author> authorList = new ArrayList();
        Author author = new Author(1, "author", "author description", "src/author/image");
        Author author2 = new Author(1, "author", "author description", "src/author/image");
        authorList.add(author);
        authorList.add(author2);
        when(authorService.getAuthorList()).thenReturn(authorMapper.map(authorList));
        this.mockMvc.perform(get("/authors").header("Content-Type", "application/json")).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }
    
    @Test
    void postAuthors() throws Exception {
        Date date = new Date();
        Author author = new Author(1, "author", "author description", "src/author/image");
        AuthorDto authorDto = authorMapper.map(author);
        
        MvcResult result = mockMvc.perform(post("/authors").content(objectMapper.writeValueAsString(authorDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isCreated())
                .andReturn();
        
        assertEquals(AUTHOR_POST_MESSAGE, result.getResponse().getContentAsString());
    }
}