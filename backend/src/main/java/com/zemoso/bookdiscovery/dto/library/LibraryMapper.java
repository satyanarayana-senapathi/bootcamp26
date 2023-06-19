package com.zemoso.bookdiscovery.dto.library;

import com.zemoso.bookdiscovery.entity.Library;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LibraryMapper {
    
    @Mapping(target = "id", source = "id")
    Library map(LibraryDto libraryDto);
    
    @Mapping(target = "id", source = "id")
    LibraryDto map(Library library);
    
    @Mapping(target = "id", source = "bookId")
    LibraryDto map(LibraryPostDto libraryPostDto);
    
    @Mapping(target = "id", source = "id")
    List<LibraryDto> map(List<Library> library);
}
