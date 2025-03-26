import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceFileService {
  constructor() {
    console.log('Service file');
  }

  getProductData(){
    return[
      {
        name:"asda",
        mobile:"adsfafd"
      },
      {
        name:"asda",
        mobile:"adsfafd"
      },
      {
        name:"asda",
        mobile:"adsfafd"
      }
    ]
  }
}
