import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Playa } from './playas.model';
import { tap, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeachesService {
  constructor(private httpClient: HttpClient) {}

  getBeachesFromJson(jsonUrl: string) {
    return this.httpClient.get<Playa[]>(jsonUrl).pipe(
      tap(beaches => console.log('fetches beaches')),
      catchError(error => {
        console.log(
          'Error fetching beaches, handling error locally and rethrowing it...'
        );
        return throwError(error);
      })
    );
  }
}
