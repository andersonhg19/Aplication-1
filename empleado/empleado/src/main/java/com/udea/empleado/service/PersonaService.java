
package com.udea.empleado.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.udea.empleado.dao.IPersonaDAO;
import java.util.Optional;
import com.udea.empleado.model.Persona;

@Service
public class PersonaService {
    
    @Autowired
    private IPersonaDAO dao;
    
    public Persona save(Persona t){    
        return dao.save(t);
    }
    
    public Persona update(Persona t){
        return dao.save(t);
    }
    
    public void delete(Persona t){
        dao.delete(t);
    }
    
    public Iterable<Persona> list(){
        return dao.findAll();
    }
    
    public Optional<Persona> listId(long id){
        return dao.findById(id);
    }
}
