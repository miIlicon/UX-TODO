package com.sy.MyTodo.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.JsonObject;
import com.sy.MyTodo.dto.DataDto;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class HelloController {
    @GetMapping("hello")
    public List<String> getHello() {
        return Arrays.asList("서버 포트는 8080", "리액트 포트는 3000");
    }

    @PostMapping("hello")
    public String postHello(@RequestBody DataDto dto)
    {

        System.out.println(dto);


        return "ok";
    }
}