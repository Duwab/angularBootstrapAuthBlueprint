import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

let hasBeenDone = false;

@Injectable({
  providedIn: 'root',
})
export class FakeDelayGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(resolve => {
      if (hasBeenDone) {
        resolve(true);
      } else {
        hasBeenDone = true;
        setTimeout(() => resolve(true), 1000);
      }
    });
  }
}
