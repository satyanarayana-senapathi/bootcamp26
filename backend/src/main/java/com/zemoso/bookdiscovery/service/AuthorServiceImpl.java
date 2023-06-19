package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.author.AuthorDto;
import com.zemoso.bookdiscovery.dto.author.AuthorMapper;
import com.zemoso.bookdiscovery.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {
    
    @Autowired
    private AuthorRepository authorRepository;
    @Autowired
    private AuthorMapper authorMapper;
    
    @Override
    public List<AuthorDto> getAuthorList() {
        return authorMapper.map(authorRepository.findAll());
    }
    
    @Override
    public void saveAuthor(AuthorDto authorDto) {
        authorRepository.save(authorMapper.map(authorDto));
    }
}
