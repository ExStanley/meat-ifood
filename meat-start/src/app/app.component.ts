import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  content = 'Welcome do Meat App!'
  title = 'meat-start';
  constructor(){}
  ngOnInit(){}
}
