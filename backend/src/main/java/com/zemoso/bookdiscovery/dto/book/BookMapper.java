package com.zemoso.bookdiscovery.dto.book;

import com.zemoso.bookdiscovery.entity.Book;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BookMapper {
    
    Book map(BookDto bookDto);
    
    BookDto map(Book book);
    
    @Mapping(target = "id", source = "id")
    List<BookDto> map(List<Book> book);
}
