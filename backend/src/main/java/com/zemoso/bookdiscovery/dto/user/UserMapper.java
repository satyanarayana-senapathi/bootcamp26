package com.zemoso.bookdiscovery.dto.user;

import com.zemoso.bookdiscovery.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    
    User map(UserDto userDto);
    
    UserDto map(User user);
    
    @Mapping(target = "id", source = "id")
    List<UserDto> map(List<User> user);
    
}
