package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.author.AuthorDto;
import com.zemoso.bookdiscovery.dto.author.AuthorMapper;
import com.zemoso.bookdiscovery.entity.Author;
import com.zemoso.bookdiscovery.repository.AuthorRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(MockitoJUnitRunner.class)
class AuthorServiceTest {
    
    @Autowired
    AuthorServiceImpl authorService;
    
    @MockBean
    AuthorRepository authorRepository;
    
    @Autowired
    AuthorMapper authorMapper;
    
    @Test
    void getAuthorListTest() {
        Author author = new Author(1, "author", "author description", "src/author/image");
        Author author2 = new Author(1, "author", "author description", "src/author/image");
        
        List<Author> authors = new ArrayList<>();
        authors.add(author);
        authors.add(author2);
        when(authorRepository.findAll()).thenReturn(authors);
        List<AuthorDto> authorDtoList = authorService.getAuthorList();
        assertEquals(2, authorDtoList.size());
        verify(authorRepository, times(1)).findAll();
    }
    
    @Test
    void postAuthors() {
        ArgumentCaptor<Author> argument = ArgumentCaptor.forClass(Author.class);
        Author author = new Author(1, "author", "author description", "src/author/image");
        
        authorService.saveAuthor(authorMapper.map(author));
        verify(authorRepository, times(1)).save(argument.capture());
        
    }
}
