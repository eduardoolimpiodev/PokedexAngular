import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/ability/?offset=0&limit=100';
  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      
    )
  }

}
