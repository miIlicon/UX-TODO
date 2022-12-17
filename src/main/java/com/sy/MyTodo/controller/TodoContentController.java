package com.sy.MyTodo.controller;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.sy.MyTodo.dto.TodoContentDto;
import com.sy.MyTodo.entity.TodoContent;
import com.sy.MyTodo.service.TodoContentService;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class TodoContentController {

    @Autowired
    TodoContentService todoContentService;

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
        System.out.println(todoContent);
        todoContentService.createTodoContent(todoContent);
        return "ok";
    }
    @PostMapping("update")
    public String update(String s) throws ParseException {
        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObj = (JSONObject) jsonParser.parse(s);

        JSONObject data = (JSONObject) jsonObj.get(s);
        String id_ = data.toString();
        Long id = Long.parseLong(id_);
        todoContentService.updateTodoContent(id);
        return "ok";

    }
    @PostMapping("delete")
    public String delete(String s) throws ParseException {
        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObj = (JSONObject) jsonParser.parse(s);

        JSONObject data = (JSONObject) jsonObj.get(s);
        String id_ = data.toString();
        Long id = Long.parseLong(id_);
        todoContentService.deleteTodoContent(id);
        return "ok";

    }
}
