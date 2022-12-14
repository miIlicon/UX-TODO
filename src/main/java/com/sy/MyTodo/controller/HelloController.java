package com.sy.MyTodo.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class HelloController {
    @GetMapping("hello")
    public List<String> getHello(){
        return Arrays.asList("서버 포트는 8080", "리액트 포트는 3000");
    }

    @PostMapping("hello")
    public List<String> postHello(@RequestParam("contents") String contents, @RequestParam("title") String title)
    {
        return Arrays.asList("서버 포트는 8080", "리액트 포트는 3000");

    }
}