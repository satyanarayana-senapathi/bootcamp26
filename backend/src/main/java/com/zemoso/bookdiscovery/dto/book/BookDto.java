package com.zemoso.bookdiscovery.dto.book;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.zemoso.bookdiscovery.entity.Author;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Data
public class BookDto {
    
    @JsonProperty("id")
    private int id;
    
    @JsonProperty("title")
    private String title;
    
    @JsonProperty("totalPages")
    private int totalPages;
    
    @JsonProperty("description")
    private String description;
    
    @JsonProperty("image")
    private String image;
    
    @JsonProperty("category")
    private String category;
    
    @JsonProperty("releaseDate")
    private Date releaseDate;
    
    @JsonProperty("author")
    private Author author;
    
}
