package com.sy.MyTodo.repository;


import com.sy.MyTodo.entity.TodoContent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoContentRepository extends JpaRepository<TodoContent, Long> {

}
