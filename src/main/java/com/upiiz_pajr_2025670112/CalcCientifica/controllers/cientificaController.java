package com.upiiz_pajr_2025670112.CalcCientifica.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class cientificaController {

    @GetMapping()
    public String cientifica(){
        return "cientifica";
    }
}
