import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public lessons: Array<IClass> = [
    {
      topic: 'CSS',
      date: '03/05/16',
      lecturer: 'Jane Doe',
      edit: true
    }
  ]


  constructor() { }
}
export interface IClass {
  topic: string,
  date: string,
  lecturer: string,
  edit: boolean
}