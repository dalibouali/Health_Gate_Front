
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { async, Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,


  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { UserServiceService } from '../_services/user-service.service';
import { Doctor } from '../doctors/DoctorModel';
import { Appointment } from './ModelAppointment';
import { CalendarEventActionsComponent } from 'angular-calendar/modules/common/calendar-event-actions.component';



const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};


@Component({
  selector: 'app-myoffice',
  templateUrl: './myoffice.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
})
export class MyOfficeComponent implements OnInit {
  constructor(private userservice: UserServiceService, private modal: NgbModal) { }
  Appointment: Array<Appointment> = [];

  ngOnInit(): void {
    this.getAppointments(this.events, this.actions);



  }


  getAppointments(eve: CalendarEvent[], actions: CalendarEventAction[]) {
    this.userservice.getOppointmentsAsDoctors().subscribe(
      data => {
        this.Appointment = data;
        console.log("here ", this.Appointment)
        this.Appointment.forEach(function (a) {
          let ev: any;
          if (a.confirmed == false) {
            ev = {
              start: new Date(a.date),
              title: a.id + " " + a.patient.username + "   state    " + a.confirmed,
              color: colors.red,
              actions: actions,
              resizable: {
                beforeStart: true,
                afterEnd: true,
              },
              draggable: true,
            }

          } else {
            ev = {
              start: new Date(a.date),
              title: a.id + " " + a.patient.username + "   state    " + a.confirmed,
              color: colors.yellow,
              actions: actions,
              resizable: {
                beforeStart: true,
                afterEnd: true,
              },
              draggable: true,
            }


          }

          console.log(ev)
          eve.push(ev)
        })
        console.log("dali", eve)
      },
      err => {
        console.log(err)
      }
    )
  }

  @ViewChild('modalContent', { static: true })
  modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [


  ];



  activeDayIsOpen: boolean = true;





  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }



  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }


  showall(): void {
    this.events.forEach(e => this.userservice.setdateofappointment(Number(e.title.split(" ")[0]), e.start).subscribe(
      data => {
      },

      err => {
        console.log(err)

      }


    ))
  }



  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }


}
