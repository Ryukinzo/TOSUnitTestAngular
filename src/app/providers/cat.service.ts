import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../models/cat.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CatService {

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]>{
    return this.http.get<Cat[]>('https://637deb23cfdbfd9a63a0f41e.mockapi.io/P2G4/cat')
  }
}
