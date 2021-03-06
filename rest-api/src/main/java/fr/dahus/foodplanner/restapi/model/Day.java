package fr.dahus.foodplanner.restapi.model;
// Generated 31 oct. 2017 23:03:17 by Hibernate Tools 5.2.6.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Day generated by hbm2java
 */
@Entity
@Table(name = "day", schema = "public")
public class Day implements java.io.Serializable {

	private static final long serialVersionUID = 2579948008357416015L;
	private long id;
	private Daylist daylist;
	private String name;

	public Day() {
	}

	public Day(long id, Daylist daylist) {
		this.id = id;
		this.daylist = daylist;
	}

	public Day(long id, Daylist daylist, String name) {
		this.id = id;
		this.daylist = daylist;
		this.name = name;
	}

	@Id
	@Column(name = "id", unique = true, nullable = false)
	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "day_list_id", nullable = false)
	public Daylist getDaylist() {
		return this.daylist;
	}

	public void setDaylist(Daylist daylist) {
		this.daylist = daylist;
	}

	@Column(name = "name", length = 16)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
