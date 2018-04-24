import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IEmployee } from 'app/shared/model/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'jhi-employee-update',
  templateUrl: './employee-update.component.html'
})
export class EmployeeUpdateComponent implements OnInit {
  private _employee: IEmployee;
  isSaving: boolean;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isSaving = false;
    this.route.data.subscribe(({ employee }) => {
      this.employee = employee.body ? employee.body : employee;
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    if (this.employee.id !== undefined) {
      this.subscribeToSaveResponse(this.employeeService.update(this.employee));
    } else {
      this.subscribeToSaveResponse(this.employeeService.create(this.employee));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IEmployee>>) {
    result.subscribe((res: HttpResponse<IEmployee>) => this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
  }

  private onSaveSuccess(result: IEmployee) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
  }
  get employee() {
    return this._employee;
  }

  set employee(employee: IEmployee) {
    this._employee = employee;
  }
}
