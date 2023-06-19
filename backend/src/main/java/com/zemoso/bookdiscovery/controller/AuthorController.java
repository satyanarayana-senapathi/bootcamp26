package com.zemoso.bookdiscovery.controller;

import com.zemoso.bookdiscovery.dto.author.AuthorDto;
import com.zemoso.bookdiscovery.helper.Constants;
import com.zemoso.bookdiscovery.service.AuthorServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class AuthorController {
    
    @Autowired
    private AuthorServiceImpl authorService;
    
    @GetMapping(value = "/authors",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AuthorDto>> getAuthor() {
        return ResponseEntity.status(HttpStatus.OK).body(authorService.getAuthorList());
    }
    
    @PostMapping(value = "/authors",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> postAuthor(@RequestBody @Valid AuthorDto authorDto) {
        authorService.saveAuthor(authorDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(Constants.AUTHOR_POST_MESSAGE);
    }
}
