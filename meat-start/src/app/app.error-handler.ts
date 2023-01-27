import { LoginService } from './security/login/login.service';
import { NotificationService } from './shared/messages/notification.services';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
  constructor(private ns: NotificationService, private injector: Injector, private zone: NgZone) {
    super();
  }
  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      debugger
      const message = errorResponse.error.message
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            this.injector.get(LoginService).handleLogin()
            break;
          case 403:
            this.ns.notify(message || 'Não autorizado.')
            break;
          case 404:
            this.ns.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes')
            break;
        }
      })
    }
    super.handleError(errorResponse);
  }
}

// export class ErrorHandler {
//   static handleError(error: HttpErrorResponse | any) {
//     let errorMessage: string;
//     if (error.error instanceof ErrorEvent) {
//       errorMessage = error.error.message;
//     } else {
//       errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
//   }
// }
