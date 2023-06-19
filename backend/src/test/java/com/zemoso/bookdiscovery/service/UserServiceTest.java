package com.zemoso.bookdiscovery.service;

import com.zemoso.bookdiscovery.dto.user.UserDto;
import com.zemoso.bookdiscovery.dto.user.UserMapper;
import com.zemoso.bookdiscovery.entity.User;
import com.zemoso.bookdiscovery.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(MockitoJUnitRunner.class)
class UserServiceTest {
    
    @Autowired
    UserServiceImpl userService;
    
    @MockBean
    UserRepository userRepository;
    
    @Autowired
    UserMapper userMapper;
    
    @Test
    void getUserListTest() {
        User user = new User(1, "user", "student", "src/user/image");
        User user2 = new User(1, "user", "student", "src/user/image");
        
        List<User> users = new ArrayList<>();
        users.add(user);
        users.add(user2);
        when(userRepository.findAll()).thenReturn(users);
        List<UserDto> userDtoList = userService.getUserList();
        assertEquals(2, userDtoList.size());
        verify(userRepository, times(1)).findAll();
    }
    
    @Test
    void postUsers() {
        ArgumentCaptor<User> argument = ArgumentCaptor.forClass(User.class);
        User user = new User(1, "user", "student", "src/user/image");
        
        userService.saveUser(userMapper.map(user));
        verify(userRepository, times(1)).save(argument.capture());
        
    }
}
