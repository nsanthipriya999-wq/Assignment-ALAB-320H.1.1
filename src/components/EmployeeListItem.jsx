

export default function EmployeeListItem({ employee }) {
    return (
         
        <div className="employeeListItemContainer">

            <img className="employeeImage" src={employee.image}  />

             <div>
            <h3>{employee.name}</h3>
            <p>{employee.profession}</p>
            </div>

        </div>


    );


}








