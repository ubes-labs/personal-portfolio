import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { AppDataService } from '../../../core/services/app-data/app-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [MatCardModule, MatChipsModule, MatDividerModule, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  private readonly _dataService = inject(AppDataService);

  readonly _data$ = this._dataService.data$;
}
