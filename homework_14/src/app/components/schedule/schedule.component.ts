import { Component, OnInit, Input } from '@angular/core';
import { log } from 'util';
import {ServiceService, IClass} from 'src/app/service.service'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public lessons: Array<IClass>;


  constructor(service: ServiceService) {
    this.lessons = service.lessons;
   }

  addClass(i) {
    let obj = {
      topic: '',
      date: '',
      lecturer: '',
      edit: false
    }
    this.lessons.push(obj);
   }

  ngOnInit() {
  }

}
