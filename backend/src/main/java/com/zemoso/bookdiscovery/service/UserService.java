package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.user.UserDto;

import java.util.List;

public interface UserService {
    
    public List<UserDto> getUserList();
    
    public void saveUser(UserDto userDto);
}
