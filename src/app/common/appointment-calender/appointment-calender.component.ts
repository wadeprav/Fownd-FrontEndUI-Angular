import { Component, OnInit } from '@angular/core';
import { formatDate, FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-appointment-calender',
  templateUrl: './appointment-calender.component.html',
  styleUrls: ['./appointment-calender.component.scss']
})
export class AppointmentCalenderComponent implements OnInit {
  constructor () {}
  ngOnInit(): void {
    
  }
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };

  str = formatDate(new Date(), {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  });

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
}
