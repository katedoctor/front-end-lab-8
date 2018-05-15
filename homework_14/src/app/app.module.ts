import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassComponent } from './components/class/class.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import {ServiceService} from './service.service'


@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
