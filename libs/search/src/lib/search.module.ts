import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RitehSearchComponent } from './riteh-search/riteh-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule,  MatFormFieldModule,
    MatInputModule,  MatIconModule],
  declarations: [RitehSearchComponent],
  exports: [RitehSearchComponent],
})
export class SearchModule {}
