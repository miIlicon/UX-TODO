package com.sy.MyTodo.controller;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.sy.MyTodo.dto.TodoContentDto;
import com.sy.MyTodo.entity.TodoContent;
import com.sy.MyTodo.repository.TodoContentRepository;
import com.sy.MyTodo.service.TodoContentService;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class TodoContentController {

    @Autowired
    TodoContentService todoContentService;
    @Autowired
    private TodoContentRepository todoContentRepository;

    @GetMapping("select")
    public String select(){
        List<TodoContent> todoContents = todoContentService.getTodoContents();


        JsonArray ja = new JsonArray();

        for(TodoContent content: todoContents){
            JsonObject obj = new JsonObject();
            obj.addProperty("id", content.getId());
            obj.addProperty("date", content.getDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd ")));
            obj.addProperty("content", content.getContent());
            obj.addProperty("state", content.getState());
            // 하나의 예약정보라도 널값이면 에러남

            ja.add(obj);
        }
        System.out.println(ja.toString());
        return ja.toString();
    }

    @PostMapping("create")
    public String create(@RequestBody TodoContentDto todoContentDto)
    {
        System.out.println(todoContentDto);
        ModelMapper modelMapper = new ModelMapper();
        TodoContent todoContent = modelMapper.map(todoContentDto, TodoContent.class);

        todoContentService.createTodoContent(todoContent);
        return "ok";
    }
    @PutMapping("update/{id}")
    public String update(@PathVariable("id") String id_, @RequestBody TodoContentDto todoContentDto) throws ParseException {
        Long id = Long.parseLong(id_);
        ModelMapper modelMapper = new ModelMapper();
        TodoContent todoContent = modelMapper.map(todoContentDto, TodoContent.class);
        System.out.println(todoContentDto);
        todoContent.setId(id);

        todoContentService.createTodoContent(todoContent);
        return "ok";

    }
    @DeleteMapping("delete/{id}")
    public String delete(@PathVariable("id") String id_) throws ParseException {
        System.out.println(id_);

        Long id = Long.parseLong(id_);
        todoContentService.deleteTodoContent(id);
        return "ok";

    }
}
