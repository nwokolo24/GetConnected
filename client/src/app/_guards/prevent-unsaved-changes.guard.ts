import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

// The is prevents users from losing their chnages when switching tabs in the same page/site
@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate( component: MemberEditComponent): boolean {
    if (component.editForm.dirty) {
      return confirm('Are you sure you want to continue? Any unsaved changes will be lost')
    }
    return true;
  }
}
