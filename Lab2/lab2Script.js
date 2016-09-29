
function Student(number, firstName, lastName)
{
    this.number = number;
    this.firstName = firstName;
    this.lastName = lastName;

    this.printEmployeeDetails = function(){
        return this.firstName+" "+this.lastName+" - "+this.age+" - "+this.salary;
    }
}

var registerStudent = document.getElementById("newStudent");
registerStudent.addEventListener("click", function(){
    var student = new Student()

});