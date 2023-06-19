package com.zemoso.bookdiscovery.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "library")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Library {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "library_id")
    private int id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "book_id")
    private Book book;
    @Column(name = "status")
    private String status;
    @Column(name = "page_read", nullable = false)
    private int pageRead;
    @Column(name = "rating", nullable = false)
    private double rating;
}
