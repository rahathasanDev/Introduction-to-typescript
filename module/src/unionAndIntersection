// Union type declaration
type StringOrNumber = string | number;


// Intersection type declaration
type Admin = {
  id: number;
  role: string;
};

type Employee = {
  id: number;
  department: string;
};

type AdminEmployee = Admin & Employee;

// Function that takes an intersection type parameter
function printAdminEmployee(adminEmployee: AdminEmployee) {
  console.log(adminEmployee);
}

// Example usage
const adminEmployee: AdminEmployee = {
  id: 1,
  role: "Admin",
  department: "Engineering"
};

printAdminEmployee(adminEmployee);
