import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export class HttpService {
  private _baseUrl: string;

  /**
   * Create http service instance
   * @param httpClientInst Angular HTTP client instance
   * @param baseUrl Backend APIs base url, @default set to the url in environment files.
   */
  constructor(public httpClientInst: HttpClient, baseUrl?: string) {
    this._baseUrl = baseUrl || environment.baseUrl;
  }

  protected get<T, U>(path: string, params?: U): Observable<T> {
    return this.httpClientInst
      .get<T>(`${this._baseUrl}/${path}`, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected post<T, U>(
    path: string,
    payload: unknown,
    params?: U
  ): Observable<T> {
    return this.httpClientInst
      .post<T>(`${this._baseUrl}/${path}`, payload, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected put<T, U>(
    path: string,
    payload?: unknown,
    params?: U
  ): Observable<T> {
    return this.httpClientInst
      .put<T>(`${this._baseUrl}/${path}`, payload, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected patch<T, U>(
    path: string,
    payload: unknown,
    params?: U
  ): Observable<T> {
    return this.httpClientInst
      .patch<T>(`${this._baseUrl}/${path}`, payload, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected update<T, U>(
    path: string,
    payload: unknown,
    params?: U
  ): Observable<T> {
    return this.httpClientInst
      .put<T>(`${this._baseUrl}/${path}`, payload, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected delete<T, U>(path: string, params?: U): Observable<T> {
    return this.httpClientInst
      .delete<T>(`${this._baseUrl}/${path}`, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(err: any): Observable<never> {
    return throwError(() => err.error);
  }
}
