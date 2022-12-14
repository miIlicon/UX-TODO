package com.sy.MyTodo.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class HelloController {
    @GetMapping("hello")
    public List<String> getHello(){
        return Arrays.asList("서버 포트는 8080", "리액트 포트는 3000");
    }

    @PostMapping("hello")
    public List<String> postHello(@RequestBody Map map)
    {
        System.out.println("map = " + map);
        return Arrays.asList("서버 포트는 8080", "리액트 포트는 3000");

    }
}