import { Component, OnInit } from '@angular/core';
import { formatDate, CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-appointment-calender',
  templateUrl: './appointment-calender.component.html',
  styleUrls: ['./appointment-calender.component.scss']
})
export class AppointmentCalenderComponent implements OnInit {
  Events:any = [];

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    buttonIcons: false,
    eventAdd: this.handleDateClick(this),
    events: this.Events
  };

  constructor () {}

  ngOnInit(): void {
    let data: any = sessionStorage.getItem('login_data')?.split('"');
    if (data[19] === 'user@example.com') {
      this.Events.push({ title: 'event 2', date: '2022-04-08' }, { title: 'event 3', date: '2022-04-12' });
    } else {
      this.Events.push({ title: 'event 1', date: '2022-04-01' });
    }
  }

  handleDateClick(cal: any) {
    console.log('date click! ', cal.options);
    return cal;
  }
}
