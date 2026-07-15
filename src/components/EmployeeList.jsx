
import { employees } from "./data.js";
import EmployeeListItem from "./EmployeeListItem.jsx";

export default function EmployeeList(){

 return (
  
  <div className="employeeContainer">
    {
      employees.map((e)=>(
        <EmployeeListItem
          key={e.id}
          employee={e}
        />





      ))


    }
   
  </div>


 );


}