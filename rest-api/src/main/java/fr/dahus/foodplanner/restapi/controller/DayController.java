package fr.dahus.foodplanner.restapi.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/day")
public class DayController {

	@RequestMapping
	public Map<String, String> getDays() {
		Map<String, String> message = new HashMap<>();
		message.put("data", "Hello from Spring Boot!");
		return message;
	}

}
