import { Component, enableProdMode } from '@angular/core';
import { Employee, EmployeesService } from './employees.service';


enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'data-grid';

  employees: Employee[] = [];
  
  selectedEmployee!: Employee;

  expanded: boolean = true;
  
  constructor(service: EmployeesService) {
    
    this.employees = service.getEmployees();
    this.selectEmployee = this.selectEmployee.bind(this);
  }
  
  click(): void{
    console.log("clicked");
  };

  selectEmployee(e){
    e.component.byKey(e.currentSelectedRowKeys[0]).done( employee =>{
      if(employee){
        this.selectedEmployee = employee;
    }});
    //if(e){
    //  console.log(e.FullName);
    //  this.selectedEmployee = e;
    //}
    
  }
}

