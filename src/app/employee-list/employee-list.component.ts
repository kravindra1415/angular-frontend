import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employee: Employee[] = [] as Employee[];
  constructor(private employeeService:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employee=data;
    })
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);  //navigate('path',parameter)
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees()
    },
    error=>console.error()
    )
  }

  viewEmployee(id:number){
    this.router.navigate(['employee-details',id]);
  }

}
