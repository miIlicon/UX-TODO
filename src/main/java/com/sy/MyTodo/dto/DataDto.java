package com.sy.MyTodo.dto;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class DataDto {
    private Integer id;
    private String content;
    private  Boolean state;

}
