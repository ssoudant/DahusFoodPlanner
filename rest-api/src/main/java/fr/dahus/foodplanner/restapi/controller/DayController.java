package fr.dahus.foodplanner.restapi.controller;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dahus.foodplanner.restapi.dto.Daylist;
import fr.dahus.foodplanner.restapi.jpa.DaylistRepository;

@RestController
@RequestMapping("/day")
public class DayController {

	@Autowired
	DaylistRepository daylistRepository;

	@RequestMapping
	public List<Daylist> getDays() {
		return StreamSupport //
				.stream(daylistRepository.findAll().spliterator(), false) //
				.map(dl -> Daylist.fromEntity(dl)) //
				.collect(Collectors.toList());
	}

}
