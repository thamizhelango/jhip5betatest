import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEmployee } from 'app/shared/model/employee.model';

@Component({
  selector: 'jhi-employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit {
  employee: IEmployee;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ employee }) => {
      this.employee = employee.body ? employee.body : employee;
    });
  }

  previousState() {
    window.history.back();
  }
}
