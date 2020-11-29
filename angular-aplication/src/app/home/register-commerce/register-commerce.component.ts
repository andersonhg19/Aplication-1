import { Component, OnInit } from '@angular/core';
import { commercemodel } from '../../models/commerce.model';
import { RegisterCommerceService } from '../../services/register-commerce/register-commerce.service';
import swal from'sweetalert2';
import { RegisterUserService } from '../../services/register-users/register-user.service';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-register-commerce',
  templateUrl: './register-commerce.component.html',
  styleUrls: ['./register-commerce.component.css']
})

export class  RegisterCommerceComponent implements OnInit {
  public titularAlerta:string=("");
  public commercemodel;
  public latitude;
  public longitude;
  public row;
  public image:any=[];
  public rows;
  public rowss;
  public rows2;
  public rowss2;
  public rows3;
  public rowss3;
  public rows4;
  public rowss4;


  constructor(
    private RegisterCommerceService:RegisterCommerceService,
    private RegisterUserService:RegisterUserService,

    ) { this.commercemodel=new commercemodel()
     }


      ngOnInit(): void {
      this.getLocation();
      this.classCommerce();
      this.services();
      this.stateCommerce();
      this.typeCommunication();
      }

      onFileChange(event){
        this.image = event.target.files[0];
       }

      submit(){
        let params = {commerce:this.commercemodel};
        console.log(params)
        let commerceName=this.commercemodel.name;
        let nitCommerce=this.commercemodel.nit;
        this.RegisterCommerceService.create(params).subscribe(result=>{
            console.log(result);
        
        let params2 = {img:this.image,name:commerceName,
        nit:nitCommerce};
        console.log(params2)
        this.RegisterCommerceService.send_imagere(params2).subscribe(result=>{
            console.log(result);
            swal.fire( 'Correcto','El usuario se ha creado exitosamente','success');
        },error=>{})   
        },error=>{ 
          swal.fire( 'Ha ocurrido un error','Los datos no son correctos','error');})  
        
      }

getLocation() {
  this.RegisterCommerceService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
      this.commercemodel.lat = this.latitude;
      this.commercemodel.long =this.longitude;
      console.log(this.commercemodel.lat);
      console.log(this.commercemodel.long);
  });
}


services(){
  let params;
   this.RegisterUserService.services(params).subscribe(result=>{
     this.rowss=result;
     this.rows=this.rowss.search;
     console.log(this.rows);
   },error=>{})
 }


classCommerce(){
  let params;
   this.RegisterCommerceService.classCommerce(params).subscribe(result=>{
     this.rowss2=result;
     this.rows2=this.rowss2.search;
     console.log(this.rows2);
   },error=>{})
 }
 stateCommerce(){
   let params;
    this.RegisterCommerceService.stateCommerce(params).subscribe(result=>{
      this.rowss3=result;
      this.rows3=this.rowss3.search;
      console.log(this.rows3);
    },error=>{})
  }
  typeCommunication(){
    let params;
     this.RegisterUserService.typeCommunication(params).subscribe(result=>{
       this.rowss4=result;
       this.rows4=this.rowss4.search;
       console.log(this.rows4);
     },error=>{})
   }
}
