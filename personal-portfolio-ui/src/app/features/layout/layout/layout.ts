import { Component, inject } from '@angular/core';
import { AppDataService } from '../../../core/services/app-data/app-data.service';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  private readonly _dataService = inject(AppDataService);

  readonly _data$ = this._dataService.data$;
}
