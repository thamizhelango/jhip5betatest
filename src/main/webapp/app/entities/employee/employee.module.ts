import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TetsSharedModule } from 'app/shared';
import {
  EmployeeService,
  EmployeeComponent,
  EmployeeDetailComponent,
  EmployeeUpdateComponent,
  EmployeeDeletePopupComponent,
  EmployeeDeleteDialogComponent,
  employeeRoute,
  employeePopupRoute,
  EmployeeResolve,
  EmployeeResolvePagingParams
} from './';

const ENTITY_STATES = [...employeeRoute, ...employeePopupRoute];

@NgModule({
  imports: [TetsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeUpdateComponent,
    EmployeeDeleteDialogComponent,
    EmployeeDeletePopupComponent
  ],
  entryComponents: [EmployeeComponent, EmployeeUpdateComponent, EmployeeDeleteDialogComponent, EmployeeDeletePopupComponent],
  providers: [EmployeeService, EmployeeResolve, EmployeeResolvePagingParams],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TetsEmployeeModule {}
