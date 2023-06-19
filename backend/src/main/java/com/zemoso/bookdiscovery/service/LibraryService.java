package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.library.LibraryDto;
import com.zemoso.bookdiscovery.dto.library.LibraryPostDto;

import java.util.List;

public interface LibraryService {
    
    public List<LibraryDto> getLibraryList(int userId, String status);
    
    public void saveLibrary(LibraryPostDto libraryPostDto, int userId);
    
    public void updateLibraryUserBookStatus(LibraryPostDto libraryPostDto, int userId);
}
