import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppDataService {
  private readonly _httpClient = inject(HttpClient);

  private readonly _appUri = `${location.origin}${location.pathname}`;
  private readonly _data$ = signal<Record<string, any>>({});
  readonly data$ = this._data$.asReadonly();

  fetchData$ = () =>
    this._httpClient
      .get<Record<string, any>>(`${this._appUri}app.data.json`)
      .pipe(tap((res) => this._data$.set(res)))
      .subscribe();
}
