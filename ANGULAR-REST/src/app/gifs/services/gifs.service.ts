import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private  apiKey:string = 'nR6VjRDJfWgvI2gwhnJknXlcW5BUnBiJ';
  private _historial: string[] = [];
  public resultados: any[] = []

  constructor(private http:HttpClient) { }


  get historial(){
    return [...this._historial]
  }

   buscarGifs(query:string = ''){
    query = query.trim().toLowerCase()
    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10)
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=nR6VjRDJfWgvI2gwhnJknXlcW5BUnBiJ&q=${query}&limit=5`)
        .subscribe((resp:any) => {
                    console.log(resp)
                    this.resultados = resp.data
                  })

    console.log(this.resultados)
  }

}

////////////////   metodo pare recibir por medio de fetch   /////////////////////
// fetch('https://api.giphy.com/v1/gifs/search?api_key=nR6VjRDJfWgvI2gwhnJknXlcW5BUnBiJ&q=dragon ball z&limit=5')
//       .then( resp => {
//         resp.json().then(data => {
//           console.log(data)
//         })
//       })







////////////////   metodo pare recibir por medio de fetch por async/await   /////////////////////
// async buscarGifs(){

//   const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=nR6VjRDJfWgvI2gwhnJknXlcW5BUnBiJ&q=dragon ball z&limit=5')
//   const data = await resp.json();
//   console.log(data)

// }





////////////////   metodo pare recibir por medio de fetch por httpClientModule de angular   /////////////////////
// 1.  import { HttpClientModule } from '@angular/common/http';
// 2.   imports: [

//   HttpClientModule,
// ],


// 3. inyectar en el constructor por inyeccion de dependencias

// const valor2 = this.http.get('https://api.giphy.com/v1/gifs/search?api_key=nR6VjRDJfWgvI2gwhnJknXlcW5BUnBiJ&q=dragon ball z&limit=5')
// valor2.subscribe((data:any) => {
//   console.log(data.data)
// })
