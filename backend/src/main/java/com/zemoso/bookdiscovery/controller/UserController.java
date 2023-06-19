package com.zemoso.bookdiscovery.controller;

import com.zemoso.bookdiscovery.dto.user.UserDto;
import com.zemoso.bookdiscovery.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

import static com.zemoso.bookdiscovery.helper.Constants.USER_POST_MESSAGE;

@RestController
public class UserController {
    
    @Autowired
    private UserServiceImpl userService;
    
    @GetMapping(value = "/users",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UserDto>> getUser() {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserList());
    }
    
    @PostMapping(value = "/users",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> postUser(@RequestBody @Valid UserDto userDto) {
        userService.saveUser(userDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(USER_POST_MESSAGE);
    }
    
}
