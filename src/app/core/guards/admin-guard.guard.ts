import { inject } from '@angular/core';
import {  CanLoadFn } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

export const adminGuardGuard: CanLoadFn = (route, state) => {
  const navigationService = inject(AuthService);
  const token = localStorage.getItem('token');
  return token ? true : navigationService.router.navigateByUrl('/admin/dashboard');
};
