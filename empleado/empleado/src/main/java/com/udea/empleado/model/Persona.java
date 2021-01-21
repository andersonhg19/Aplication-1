/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.udea.empleado.model;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ApiModel(description="Devuelve todos los detalles de la Persona")
@Setter
@ToString
@Entity

public class Persona implements Serializable {
    
    @ApiModelProperty(notes="La BD genera el Id de la persona")
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="idperson")
    private Long idPerson;
    
    @ApiModelProperty(notes="El nombre de la persona")
    @Column(name="firstname",nullable=false,length=80)
    private @NonNull String firstName;
    
    @ApiModelProperty(notes="El apellido de la persona")
    @Column(name="lastname",nullable=false,length=80)
    private @NonNull String lastName;
    
    @ApiModelProperty(notes="El email de la persona")
    @Column(name="email",nullable=false,length=80)
    private @NonNull String email;
    
    @ApiModelProperty(notes="El salario de la persona")
    @Column(name="payment",nullable=false,length=10)
    private @NonNull Long payment;
    
    @ApiModelProperty(notes="La ocupacion de la persona")
    @Column(name="ocupation",nullable=false,length=50)
    private @NonNull String ocupation;
    
    @ApiModelProperty(notes="La direccion de la persona")
    @Column(name="address",nullable=false,length=50)
    private @NonNull String address;
    
    @ApiModelProperty(notes="La oficina de la persona")
    @Column(name="office",nullable=false,length=40)
    private @NonNull String office;
    
    @ApiModelProperty(notes="La dependencia de la persona")
    @Column(name="dependence",nullable=false,length=80)
    private @NonNull String dependence;
    
    @ApiModelProperty(notes="Tiempo de trabajo de la persona")
    @Column(name="time",nullable=false,length=80)
    private @NonNull int time;
    
    
    
}
