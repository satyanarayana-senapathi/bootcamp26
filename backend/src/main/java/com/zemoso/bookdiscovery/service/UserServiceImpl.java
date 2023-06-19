package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.user.UserDto;
import com.zemoso.bookdiscovery.dto.user.UserMapper;
import com.zemoso.bookdiscovery.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserMapper userMapper;
    
    @Override
    public List<UserDto> getUserList() {
        return userMapper.map(userRepository.findAll());
    }
    
    @Override
    public void saveUser(UserDto userDto) {
        userRepository.save(userMapper.map(userDto));
    }
}
