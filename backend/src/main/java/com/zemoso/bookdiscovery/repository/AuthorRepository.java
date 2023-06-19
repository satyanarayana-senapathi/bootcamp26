package com.zemoso.bookdiscovery.repository;

import com.zemoso.bookdiscovery.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer> {
}
