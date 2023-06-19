package com.zemoso.bookdiscovery.controller;

import com.zemoso.bookdiscovery.dto.library.LibraryDto;
import com.zemoso.bookdiscovery.dto.library.LibraryPostDto;
import com.zemoso.bookdiscovery.service.LibraryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static com.zemoso.bookdiscovery.helper.Constants.LIBRARY_POST_MESSAGE;
import static com.zemoso.bookdiscovery.helper.Constants.LIBRARY_PUT_MESSAGE;
@RestController
@CrossOrigin
public class LibraryController {
    
    @Autowired
    private LibraryServiceImpl libraryService;
    

    @GetMapping(value = "/library/{userId}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<LibraryDto>> getLibrary(@PathVariable("userId") int userId, @RequestParam(required = false) @Valid String status) {
        return ResponseEntity.status(HttpStatus.OK).body(libraryService.getLibraryList(userId, status));
    }
    
    @PostMapping(value = "/library/{userId}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> postLibrary(@PathVariable("userId") int userId, @RequestBody @Valid LibraryPostDto libraryDto) {
        libraryService.saveLibrary(libraryDto, userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(LIBRARY_POST_MESSAGE);
    }
    
    @PutMapping(value = "/library/{userId}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> updateLibraryUserBookStatus(@PathVariable("userId") int userId, @RequestBody @Valid LibraryPostDto libraryDto) {
        libraryService.updateLibraryUserBookStatus(libraryDto, userId);
        return ResponseEntity.status(HttpStatus.OK).body(LIBRARY_PUT_MESSAGE);
    }
}
