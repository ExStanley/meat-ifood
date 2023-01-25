import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip: boolean = true
  input: any

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Este componente precisa ser utilizado com a diretiva ngModel ou formControlName')
    }
  }

  hasSuccess(){
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(){
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
