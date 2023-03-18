import { Route } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: CalendarComponent
  },
  {
    path: 'posts-remote',
    loadChildren: () =>
      import('posts-remote/Module').then((m) => m.RemoteEntryModule)
  },
  {
    path: 'calendar-remote',
    loadChildren: () =>
      import('calendar-remote/Module').then((m) => m.RemoteEntryModule)
  }
];
