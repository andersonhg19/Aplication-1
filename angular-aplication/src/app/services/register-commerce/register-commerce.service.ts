import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import "rxjs/add/operator/map";
import { constantes } from "../../utilitis/constantes";


@Injectable()
export class RegisterCommerceService {     
    private constantes;
    private url;
  
    constructor(private http: HttpClient) {
      this.constantes = new constantes();
    }
    

    getPosition(): Promise<any> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                    resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
                },
                err => {
                    reject(err);
              });
        });
    }

    create(params) {
        this.url = this.constantes.routeGlobal + "api1/register";
        return this.http.post(this.url, params).map(res => console.log(res));
      }

      send_imagere(params2) {
        this.url = this.constantes.routeGlobal + "api1/send_image";
        const formData = new FormData();
        formData.append("file", params2.img);
        formData.append("name", params2.name);
        formData.append("nit", params2.nit);
        console.log(params2);
        return this.http.post(this.url, formData).map(res => console.log(res));
      }
      classCommerce(params) {
        this.url = this.constantes.routeGlobal + "api1/classCommerce";
        return this.http.post(this.url, params).map(res => res);
      }
      stateCommerce(params) {
        this.url = this.constantes.routeGlobal + "api1/stateCommerce";
        return this.http.post(this.url, params).map(res => res);
      }
      typeCommunication(params) {
        this.url = this.constantes.routeGlobal + "api/type_communications";
        return this.http.get(this.url, params).map(res => res);
      }
}