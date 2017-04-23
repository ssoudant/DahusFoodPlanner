package fr.dahus.foodplanner.restapi.jpa;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "day")
@Data
public class DayEntity {

	@Id
	private long id;

	@Column
	private String name;

	@ManyToOne(optional = false)
	private DayListEntity dayList;

}
