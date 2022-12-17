package com.sy.MyTodo.service;


import com.sy.MyTodo.entity.TodoContent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TodoContentService {
    TodoContent getTodoContent(long id);

    List<TodoContent> getTodoContents();

    void createTodoContent(TodoContent todoContent);

    void updateTodoContent(long id);
    void deleteTodoContent(long id);

}
