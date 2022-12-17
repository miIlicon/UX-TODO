package com.sy.MyTodo.service.impl;

import com.sy.MyTodo.entity.TodoContent;
import com.sy.MyTodo.repository.TodoContentRepository;
import com.sy.MyTodo.service.TodoContentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class TodoContentServiceImpl implements TodoContentService {

    @Autowired
    private TodoContentRepository todoContentRepository;

    @Override
    public TodoContent getTodoContent(long id) {
        return todoContentRepository.findById(id).orElse(new TodoContent());
    }

    @Override
    public List<TodoContent> getTodoContents() {
        return todoContentRepository.findAll(Sort.by(Sort.Order.asc("id")));
    }

    @Override
    public void createTodoContent(TodoContent todoContent) {
        todoContentRepository.save(todoContent);
    }

    @Override
    public void updateTodoContent(long id) {
        TodoContent todoContent = todoContentRepository.findById(id).orElse(new TodoContent());
        todoContent.setContent("update content");
        todoContentRepository.save(todoContent);
    }

    @Override
    public void deleteTodoContent(long id) {
        todoContentRepository.deleteById(id);
    }
}
