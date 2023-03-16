import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PeticionhttpService } from '../peticionhttp.service';

@Component({
  selector: 'app-peticionhttp',
  templateUrl: './peticionhttp.component.html',
  styleUrls: ['./peticionhttp.component.css']
})
export class PeticionhttpComponent implements OnInit {
  @ViewChild('inputPruebas') pr!:ElementRef;
  private apiUrl:string = 'https://api.giphy.com/v1/gifs/search?api_key=nR6VjRDJfWgvI2gwhnJknXlcW5BUnBiJ&q=${query}&limit=5`'

  constructor(private pet:PeticionhttpService) { }

  ngOnInit(): void {
  }
    pruebas(){
      const valorInput = this.pr.nativeElement.value
      console.log('valorInput: ', valorInput.minLeng)
      if (valorInput.length !== 0) {
        this.pet.getResultados()
      }
    }
}
