import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from 'app/core';
import { Employee } from 'app/shared/model/employee.model';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeUpdateComponent } from './employee-update.component';
import { EmployeeDeletePopupComponent } from './employee-delete-dialog.component';

@Injectable()
export class EmployeeResolvePagingParams implements Resolve<any> {
  constructor(private paginationUtil: JhiPaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
    const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
    return {
      page: this.paginationUtil.parsePage(page),
      predicate: this.paginationUtil.parsePredicate(sort),
      ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

@Injectable()
export class EmployeeResolve implements Resolve<any> {
  constructor(private service: EmployeeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new Employee();
  }
}

export const employeeRoute: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    resolve: {
      pagingParams: EmployeeResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Employees'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'employee/:id/view',
    component: EmployeeDetailComponent,
    resolve: {
      employee: EmployeeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Employees'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'employee/new',
    component: EmployeeUpdateComponent,
    resolve: {
      employee: EmployeeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Employees'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'employee/:id/edit',
    component: EmployeeUpdateComponent,
    resolve: {
      employee: EmployeeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Employees'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const employeePopupRoute: Routes = [
  {
    path: 'employee/:id/delete',
    component: EmployeeDeletePopupComponent,
    resolve: {
      employee: EmployeeResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Employees'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
