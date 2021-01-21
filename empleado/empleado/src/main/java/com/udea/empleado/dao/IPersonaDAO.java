
package com.udea.empleado.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.udea.empleado.model.Persona;

@Repository

public interface IPersonaDAO extends CrudRepository<Persona, Long> {
    
}
