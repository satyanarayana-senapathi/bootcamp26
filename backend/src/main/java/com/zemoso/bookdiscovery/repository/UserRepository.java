package com.zemoso.bookdiscovery.repository;

import com.zemoso.bookdiscovery.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
