package fr.dahus.foodplanner.restapi.jpa;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "daylist")
@Data
public class DayListEntity {

	@Id
	private long id;

	@Column
	private String title;

	@OneToMany(mappedBy = "dayList", targetEntity = DayEntity.class)
	private Collection<DayEntity> days;

}
