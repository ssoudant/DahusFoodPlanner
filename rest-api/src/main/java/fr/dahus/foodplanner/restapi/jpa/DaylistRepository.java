package fr.dahus.foodplanner.restapi.jpa;

import org.springframework.data.repository.CrudRepository;

import fr.dahus.foodplanner.restapi.model.Daylist;

public interface DaylistRepository extends CrudRepository<Daylist, Long> {

}
