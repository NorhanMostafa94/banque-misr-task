import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from 'src/app/core/interfaces';
import { HttpService } from 'src/app/core/services/http/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConverterService extends HttpService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getCurrencies(): Observable<ApiResponse> {
    return this.get<ApiResponse, any>(
      `latest?access_key=${environment.APIKEY}`
    ).pipe(map((res: ApiResponse) => res));
  }

  convert(payload: {
    amount: number;
    from: string;
    to: string;
  }): Observable<ApiResponse> {
    return this.get(
      `latest?access_key=${environment.APIKEY}&base=${payload.from}&symbols=${payload.to}`
    );
  }
}
