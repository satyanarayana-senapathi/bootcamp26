package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.author.AuthorDto;

import java.util.List;

public interface AuthorService {
    
    public List<AuthorDto> getAuthorList();
    
    public void saveAuthor(AuthorDto authorDto);
}
