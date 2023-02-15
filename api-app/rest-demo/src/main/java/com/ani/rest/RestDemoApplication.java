package com.ani.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class RestDemoApplication {
	public static void main(String[] args) {

		var ctx = SpringApplication.run(RestDemoApplication.class, args);
		Arrays.stream(ctx.getBeanDefinitionNames()).toList().forEach(System.out::println);
	}
}
