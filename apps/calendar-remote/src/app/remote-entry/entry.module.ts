import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { CalendarComponent } from './calendar/calendar.component';
import { SearchModule } from '@webteam/search';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent, CalendarComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes),
    FullCalendarModule,
    SearchModule, MatIconModule],
  providers: []
})
export class RemoteEntryModule {
}
