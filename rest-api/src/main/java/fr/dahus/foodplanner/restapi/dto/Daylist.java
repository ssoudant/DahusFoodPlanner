package fr.dahus.foodplanner.restapi.dto;

import java.util.stream.Collectors;

import lombok.Data;

@Data
public class Daylist {

	private long id;
	private String title;
	private Iterable<Day> days;

	public static Daylist fromEntity(fr.dahus.foodplanner.restapi.model.Daylist entity) {
		Daylist daylist = new Daylist();
		daylist.setId(entity.getId());
		daylist.setTitle(entity.getTitle());
		daylist.setDays(entity.getDays().stream().map(d -> Day.fromEntity(d)).collect(Collectors.toList()));
		return daylist;
	}

	private Daylist() {
		super();
	}
}
