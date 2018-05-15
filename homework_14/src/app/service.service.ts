import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {
    let obj:Array<IClass> = [{
      topic: 'CSS',
      date: '03/05/16',
      lecturer: 'Jane Doe',
      edit: true
    }]
    let serObj = JSON.stringify(obj);
    localStorage.setItem("lessons", serObj);
   }
  public lessons: Array<IClass> = JSON.parse(localStorage.getItem("lessons"));

}
export interface IClass {
  topic: string,
  date: string,
  lecturer: string,
  edit: boolean
}