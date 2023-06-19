package com.zemoso.bookdiscovery.dto.library;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class LibraryPostDto {
    
    @JsonProperty("bookId")
    private int bookId;
    
    @JsonProperty("status")
    private String status;
    
    @JsonProperty("pageRead")
    private int pageRead;
    
    @JsonProperty("rating")
    private double rating;
    
}
