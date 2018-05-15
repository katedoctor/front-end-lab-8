import { Component, OnInit, Input } from '@angular/core';
import {ServiceService, IClass} from '../../service.service';


interface IObj {
  topic: string,
  date: string,
  lecturer: string,
  edit: boolean
}

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  public lessons: Array<IClass>;
  public value;



  constructor(service: ServiceService) {
    this.lessons = service.lessons;
   }

  ngOnInit() {

  }

  editClass(lesson):void {
    lesson.edit = !lesson.edit;
    this.value = JSON.parse(localStorage.getItem("lessons"));
   }

   saveClass(topic,date,lecturer, edit, i) {
     let obj = {
       topic: topic,
       date:date,
       lecturer: lecturer,
       edit: edit
     }
     this.lessons.splice(i, 1);
     this.lessons.push(obj);
     edit=!edit;

       let serLessons = JSON.stringify(this.lessons)
       localStorage.setItem('lessons', serLessons);

   }

  removeClass(i):void {
    this.lessons.splice(i, 1);
    let serLessons = JSON.stringify(this.lessons)
    localStorage.setItem('lessons', serLessons);
  }

  discardChanges(lesson, i){
    lesson.edit = !lesson.edit;
    this.lessons = this.value;

  }

}


