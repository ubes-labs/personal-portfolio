import { Component, inject, OnInit } from '@angular/core';
import { AppDataService } from './core/services/app-data/app-data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CommonModule],
})
export class App implements OnInit {
  private readonly _appDataService = inject(AppDataService);
  data$ = new Observable<any>();

  ngOnInit(): void {
    this.data$ = this._appDataService.fetchData$();
  }
}
