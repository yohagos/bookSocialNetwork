import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { TokenService } from "./token.service";


export const authGuard: CanActivateFn = () => {
  const tokenService = inject(TokenService)
  const router = inject(Router)
  if (tokenService.isTokenValid()) {
    router.navigate(['login'])
    return false
  }
  return true
}
