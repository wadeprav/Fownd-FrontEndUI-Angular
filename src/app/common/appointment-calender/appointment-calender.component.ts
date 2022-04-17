import { Component, OnInit } from '@angular/core';
import { formatDate, CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-appointment-calender',
  templateUrl: './appointment-calender.component.html',
  styleUrls: ['./appointment-calender.component.scss']
})
export class AppointmentCalenderComponent implements OnInit {
  constructor () {}
  ngOnInit(): void {
    
  }
  Events = [];

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
    buttonIcons: false
  };

  str = formatDate(new Date(), {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  });

  handleDateClick() {
    console.log('date click! ');
    // this.Events.push(arg.dateStr);
    return 'arg';
  }
}
