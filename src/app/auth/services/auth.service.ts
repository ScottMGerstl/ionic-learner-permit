import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _isAuthenticated = true;
    private _userId = 'u1';

    get isAuthenticated() {
        return this._isAuthenticated;
    }

    get userId() {
        return this.isAuthenticated ? this._userId : null;
    }

    signIn() {
        this._isAuthenticated = true;
    }

    signOut() {
        this._isAuthenticated = false;
    }
}
