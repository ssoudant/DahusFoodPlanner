package fr.dahus.foodplanner.restapi.jpa;

import org.springframework.data.repository.CrudRepository;

import fr.dahus.foodplanner.restapi.model.Day;

public interface DayRepository extends CrudRepository<Day, Long> {

}
