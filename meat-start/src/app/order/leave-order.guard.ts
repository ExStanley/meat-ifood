import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { OrderComponent } from "./order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
  canDeactivate(orderComponent: OrderComponent,
                activatedRoute: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    if(!orderComponent.isOrderCompleted()){
      return window.confirm('Deseja desistir da compra')
    } else {
      return true
    }

  }
}
