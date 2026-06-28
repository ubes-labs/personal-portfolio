import { Component, inject, OnInit } from '@angular/core';
import { AppDataService } from './core/services/app-data/app-data.service';
import { Layout } from './features/layout/layout/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Layout],
})
export class App implements OnInit {
  private readonly _appDataService = inject(AppDataService);

  ngOnInit(): void {
    this._appDataService.fetchData$();
  }
}
