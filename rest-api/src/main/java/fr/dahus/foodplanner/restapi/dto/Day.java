package fr.dahus.foodplanner.restapi.dto;

import lombok.Data;

@Data
public class Day {

    private long id;
    private String name;

	public static Day fromEntity(fr.dahus.foodplanner.restapi.model.Day entity) {
		Day day = new Day();
		day.setId(entity.getId());
		day.setName(entity.getName());
		return day;
	}

	private Day() {
		super();
	}

}
