package com.ani.rest.controller;

import com.ani.rest.dto.AppResponse;
import com.ani.rest.dto.CredsDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping
    public String test() {
        return "working okay";
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<AppResponse> login(@RequestBody CredsDto creds) {
        var res = new AppResponse();
        res.setMsg("You Logged In Successfully");
        res.setSts("success");

        log.debug(creds.toString());

        return ResponseEntity.ok(res);
    }
}
