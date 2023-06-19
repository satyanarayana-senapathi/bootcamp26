package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.library.LibraryDto;
import com.zemoso.bookdiscovery.dto.library.LibraryMapper;
import com.zemoso.bookdiscovery.dto.library.LibraryPostDto;
import com.zemoso.bookdiscovery.entity.Library;
import com.zemoso.bookdiscovery.exception.LibraryNotFoundException;
import com.zemoso.bookdiscovery.repository.BookRepository;
import com.zemoso.bookdiscovery.repository.LibraryRepository;
import com.zemoso.bookdiscovery.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibraryServiceImpl implements LibraryService {
    
    @Autowired
    private LibraryRepository libraryRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private LibraryMapper libraryMapper;
    
    @Override
    public List<LibraryDto> getLibraryList(int userId, String status) {
        return libraryMapper.map(status == null ?
                libraryRepository.findLibraryByUserId(userId) :
                libraryRepository.findLibraryByUserIdAndStatus(userId, status));
    }
    
    @Override
    public void saveLibrary(LibraryPostDto libraryPostDto, int userId) {
        LibraryDto libraryDto = libraryMapper.map(libraryPostDto);
        libraryDto.setUser(userRepository.getById(userId));
        libraryDto.setBook(bookRepository.getById(libraryPostDto.getBookId()));
        
        libraryRepository.save(libraryMapper.map(libraryDto));
    }
    
    @Override
    public void updateLibraryUserBookStatus(LibraryPostDto libraryPostDto, int userId) {
    
        Optional<Library> result = libraryRepository.findLibraryByUserIdAndBookId(userId, libraryPostDto.getBookId());
        if (result.isEmpty())
            throw new LibraryNotFoundException("Invalid user Id or book id");
        Library library = result.get();
        library.setStatus(libraryPostDto.getStatus());
        libraryRepository.save(library);
    }
}
