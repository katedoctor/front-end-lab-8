import { Component, OnInit } from '@angular/core';
import {ServiceService, IClass} from '../../service.service'

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

  editClass(lesson) {
    lesson.edit = !lesson.edit;
    this.value = lesson;
   }

   saveClass(lesson) {
     let serLessons = JSON.stringify(this.lessons)
      localStorage.setItem('lessons', serLessons);
     lesson.edit = !lesson.edit;
   }

  removeClass(i) {
    this.lessons.splice(i, 1)
  }

  discardChanges(lesson, i) {
    lesson.edit = !lesson.edit;
    lesson = JSON.parse(localStorage.getItem('lessons'));
    return lesson;
  }

}

