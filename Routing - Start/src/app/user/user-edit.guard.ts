import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

// This interface is like a contract a component has to sign if it implements it.
// Tells the component i must have a method (canactivate) that takes no arguments but returns a boolean or an // observbale
export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<ComponentCanDeactivate> {
    canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}