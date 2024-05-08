import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keyCloak: Keycloak | undefined

  get keyCloak() {
    if (!this._keyCloak) {
      this._keyCloak = new Keycloak({
        url: 'http://localhost:9090',
        realm: 'book-social-network',
        clientId: 'bsn'
      })
    }
    return this._keyCloak
  }

  constructor() { }

  async init() {
    console.log('authentication user')
    const authenticated = await this.keyCloak.init({
      onLoad: 'login-required'
    })
    if (authenticated) {
      console.log('user authenticated')
    }
  }
}
