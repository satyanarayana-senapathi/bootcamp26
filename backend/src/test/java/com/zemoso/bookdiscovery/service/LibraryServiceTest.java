package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.library.LibraryDto;
import com.zemoso.bookdiscovery.dto.library.LibraryMapper;
import com.zemoso.bookdiscovery.dto.library.LibraryPostDto;
import com.zemoso.bookdiscovery.entity.Author;
import com.zemoso.bookdiscovery.entity.Book;
import com.zemoso.bookdiscovery.entity.Library;
import com.zemoso.bookdiscovery.entity.User;
import com.zemoso.bookdiscovery.exception.LibraryNotFoundException;
import com.zemoso.bookdiscovery.repository.BookRepository;
import com.zemoso.bookdiscovery.repository.LibraryRepository;
import com.zemoso.bookdiscovery.repository.UserRepository;
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
class LibraryServiceTest {
    
    @Autowired
    LibraryServiceImpl libraryService;
    
    @Autowired
    LibraryMapper libraryMapper;
    
    @MockBean
    LibraryRepository libraryRepository;
    
    @MockBean
    UserRepository userRepository;
    
    @MockBean
    BookRepository bookRepository;
    
    
    @Test
    void updateLibraryUserBookStatus() {
        Date date = new Date();
        Author author = new Author(1, "author", "author description", "src/author/image");
        Book book = new Book(1, "Book 1", 500, "description", "/src/image1", "physics", date, author);
        User user = new User(1, "user", "student", "src/user/image");
        Optional<Library> library = Optional.of(new Library(1, user, book, "currently reading", 300, 4.5));
        LibraryPostDto libraryPostDto = new LibraryPostDto();
        libraryPostDto.setBookId(1);
        libraryPostDto.setRating(4);
        libraryPostDto.setStatus("current");
        libraryPostDto.setPageRead(100);
        
        when(libraryRepository.findLibraryByUserIdAndBookId(1, 1)).thenReturn(library);
        libraryService.updateLibraryUserBookStatus(libraryPostDto, 1);
        verify(libraryRepository, times(1)).save(library.get());
    }
    
    @Test
    void updateLibraryUserBookStatusThrowsException() throws LibraryNotFoundException {
        LibraryPostDto libraryPostDto = new LibraryPostDto();
        libraryPostDto.setBookId(1);
        libraryPostDto.setRating(4);
        libraryPostDto.setStatus("current");
        libraryPostDto.setPageRead(100);
        when(libraryRepository.findLibraryByUserIdAndBookId(-1, -1)).thenReturn(Optional.empty());
        try {
            libraryService.updateLibraryUserBookStatus(libraryPostDto, -1);
        } catch (LibraryNotFoundException exception) {
            assertEquals("Invalid user Id or book id", exception.getMessage());
        }
    }
    
    @Test
    void getLibrary() {
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
        
        when(libraryRepository.findLibraryByUserId(1)).thenReturn(libraryList);
        when(libraryRepository.findLibraryByUserIdAndStatus(1, "current")).thenReturn(libraryList);
        
        assertEquals(libraryDtoList, libraryService.getLibraryList(1, null));
        assertEquals(libraryDtoList, libraryService.getLibraryList(1, "current"));
        
    }
    
    
    @Test
    void postLibrary() {
        ArgumentCaptor<Library> argument = ArgumentCaptor.forClass(Library.class);
        
        LibraryPostDto libraryPostDto = new LibraryPostDto();
        libraryPostDto.setBookId(1);
        libraryPostDto.setRating(4);
        libraryPostDto.setStatus("current");
        libraryPostDto.setPageRead(100);
        
        Date date = new Date();
        Author author = new Author(1, "author", "author description", "src/author/image");
        Book book = new Book(1, "Book 1", 500, "description", "/src/image1", "physics", date, author);
        User user = new User(1, "user", "student", "src/user/image");
        
        when(userRepository.getById(1)).thenReturn(user);
        when(bookRepository.getById(1)).thenReturn(book);
        
        libraryService.saveLibrary(libraryPostDto, 1);
        verify(libraryRepository, times(1)).save(argument.capture());
        
    }
}
