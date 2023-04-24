package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Starting the server
@SpringBootApplication
public class FullStackProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullStackProjectApplication.class, args);
		System.out.println("server started..");
	}

}
