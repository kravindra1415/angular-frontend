import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number | any;
  employee:Employee=new Employee();
  constructor(private employeeServices:EmployeeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];  //to get the id from the route

  this.employeeServices.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data;
  },error=>console.log(error));
  }

  onSubmit(){
    this.employeeServices.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.goToEmployeeList();
    },
    error=>console.error()
    )
  }
  //for navigating data to the employee list page
  goToEmployeeList(){
    this.router.navigate(['/employee']);
  }
}
