package fr.dahus.foodplanner.restapi.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dahus.foodplanner.restapi.jpa.DayEntity;
import fr.dahus.foodplanner.restapi.jpa.DayRepository;

@RestController
@RequestMapping("/day")
public class DayController {

	@Autowired
	DayRepository dayRepository;

	@RequestMapping
	public Iterable<DayEntity> getDays() {
		Iterable<DayEntity> dayEntities =  dayRepository.findAll();
		Map<String, String> message = new HashMap<>();
		message.put("data", "Hello from Spring Boot!");
		return dayEntities;
	}

}
