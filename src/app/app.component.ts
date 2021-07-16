import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    constructor(private readonly authService: AuthService, private readonly router: Router) {}

    onSignOutClick() {
        this.authService.signOut();
        this.router.navigateByUrl('/auth');
    }
}
