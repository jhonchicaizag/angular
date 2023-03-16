import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionhttpService {
  private apiUrl:string = 'https://api.giphy.com/v1/gifs/search?api_key=nR6VjRDJfWgvI2gwhnJknXlcW5BUnBiJ&q=goku&limit=5`'


  constructor(private http:HttpClient) { }


  getResultados(){

    this.http.get(this.apiUrl).subscribe((data)=>{console.log(data)})
  }
}
