
package com.udea.empleado.exception;

//HTTP 404 - NotFound

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ModelNotFoundException extends RuntimeException{
    
    public ModelNotFoundException(String mensaje){
        super(mensaje);
    }
}
