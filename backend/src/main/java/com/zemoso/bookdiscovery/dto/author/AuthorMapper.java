package com.zemoso.bookdiscovery.dto.author;

import com.zemoso.bookdiscovery.entity.Author;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AuthorMapper {
    
    Author map(AuthorDto authorDto);
    
    AuthorDto map(Author author);
    
    @Mapping(target = "id", source = "id")
    List<AuthorDto> map(List<Author> author);
    
}
