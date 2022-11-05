import { timer, Observable } from 'rxjs';
import { NotificationService } from './../notification.services';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { tap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in' )),
      transition('visible => hidden', animate('500ms 0s ease-out' )),
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  message: string = "Olá estou realizando um teste"
  snackVisibility: string = 'hidden'

  ngOnInit(): void {
    this.notificationService.notifier.pipe(
      tap(message=> {
          this.message = message
          this.snackVisibility = 'visible'
        }
      ),
      switchMap(msg => timer(3000))
    ).subscribe(timer => this.snackVisibility = 'hidden')
  }

}
