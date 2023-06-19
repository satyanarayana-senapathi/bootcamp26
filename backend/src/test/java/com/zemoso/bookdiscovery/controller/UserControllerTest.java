package com.zemoso.bookdiscovery.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.bookdiscovery.dto.user.UserDto;
import com.zemoso.bookdiscovery.dto.user.UserMapper;
import com.zemoso.bookdiscovery.entity.User;
import com.zemoso.bookdiscovery.service.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.ArrayList;
import java.util.List;

import static com.zemoso.bookdiscovery.helper.Constants.USER_POST_MESSAGE;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(MockitoJUnitRunner.class)
class UserControllerTest {
    
    @Autowired
    MockMvc mockMvc;
    
    @MockBean
    UserServiceImpl userService;
    
    @Autowired
    UserMapper userMapper;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Test
    void getUsers() throws Exception {
        List<User> userList = new ArrayList();
        User user = new User(1, "user", "student", "src/user/image");
        User user2 = new User(1, "user", "student", "src/user/image");
        userList.add(user);
        userList.add(user2);
        when(userService.getUserList()).thenReturn(userMapper.map(userList));
        this.mockMvc.perform(get("/users").header("Content-Type", "application/json")).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }
    
    @Test
    void postUsers() throws Exception {
        User user = new User(1, "user", "student", "src/user/image");
        UserDto userDto = userMapper.map(user);
        
        MvcResult result = mockMvc.perform(post("/users").content(objectMapper.writeValueAsString(userDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isCreated())
                .andReturn();
        
        assertEquals(USER_POST_MESSAGE, result.getResponse().getContentAsString());
    }
}