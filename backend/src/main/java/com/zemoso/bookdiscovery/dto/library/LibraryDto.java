package com.zemoso.bookdiscovery.dto.library;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.zemoso.bookdiscovery.entity.Book;
import com.zemoso.bookdiscovery.entity.User;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class LibraryDto {
    
    @JsonProperty("id")
    private int id;
    
    @JsonProperty("user")
    private User user;
    
    @JsonProperty("book")
    private Book book;
    
    @JsonProperty("status")
    private String status;
    
    @JsonProperty("pageRead")
    private int pageRead;
    
    @JsonProperty("rating")
    private double rating;
    
}
