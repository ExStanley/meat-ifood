import { Product } from './card/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos: Product[] = [
    { name: 'JavaScript', isVisible: true, desc: 'Curso avançado de javascript' },
    { name: 'Angular', isVisible: true, desc: 'Curso avançado de angular' },
    { name: 'csharp', isVisible: false, desc: 'Curso avançado de csharp' }
  ]
}
