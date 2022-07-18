import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _service: AppService, private toastr: ToastrService) { }

  canActivate(): Observable<boolean> {
    return this._service.currentUser$.pipe(
      map(user => {
        if (user) return true;
       this.toastr.error('You can not pass!');
      })
    )
    }
}
