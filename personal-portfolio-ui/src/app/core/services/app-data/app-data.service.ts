import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppDataService {
  private readonly _httpClient = inject(HttpClient);

  private readonly _appUri = `${location.origin}${location.pathname}`;

  fetchData$ = () => this._httpClient.get(`${this._appUri}app.data.json`);
}
