package com.zemoso.bookdiscovery.repository;

import com.zemoso.bookdiscovery.entity.Library;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LibraryRepository extends JpaRepository<Library, Integer> {
    
    List<Library> findLibraryByUserId(int userId);
    Optional<Library> findLibraryByUserIdAndBookId(int userId, int bookId);
    List<Library> findLibraryByUserIdAndStatus(int userId, String status);
    
}
