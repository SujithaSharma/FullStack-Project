import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router: Router = new Router();
  if (localStorage.getItem("login")) {
    return true
  } else {
    alert("You must login to continue !!")
    router.navigate(["/"])
    return false
  }
};
