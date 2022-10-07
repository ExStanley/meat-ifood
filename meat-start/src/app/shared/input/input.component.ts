import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label: string
  @Input() errorMessage: string
  input: any

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Este componente precisa ser utilizado com a diretiva ngModel')
    }
  }

  hasSuccess(){
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(){
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
