import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanLoad {
    constructor(private readonly authService: AuthService, private readonly router: Router) {}

    canLoad(route: Route, segments: UrlSegment[]) {
        if (!this.authService.isAuthenticated) {
            this.router.navigate(['/auth/sign-in']);
        }

        return this.authService.isAuthenticated;
    }
}
