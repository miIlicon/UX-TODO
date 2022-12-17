package com.sy.MyTodo.controller;

import com.sy.MyTodo.dto.TodoContentDto;
import com.sy.MyTodo.entity.TodoContent;
import com.sy.MyTodo.service.TodoContentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class HelloController {
    @Autowired
    TodoContentService todoContentService;

    @GetMapping("hello")
    public List<String> getHello() {
        return Arrays.asList("서버 포트는 8080", "리액트 포트는 3000");
    }

    @PostMapping("hello")
    public String postHello(@RequestBody TodoContentDto todoContentDto)
    {
        ModelMapper modelMapper = new ModelMapper();
        TodoContent todoContent = modelMapper.map(todoContentDto, TodoContent.class);
        System.out.println(todoContent);
        todoContentService.createTodoContent(todoContent);
        todoContentService.updateTodoContent(todoContent.getId());
        return "ok";
    }
 /*   @PostMapping("hello")
    public String putHello(@RequestBody Integer id)
    {
        TodoContent todoContent = todoContentService.getTodoContent(id);

        todoContentService.updateTodoContent(id);
        System.out.println(todoContent);
        return "ok";
    }*/
}