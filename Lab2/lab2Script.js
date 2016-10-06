var studentObjList = [];

function Student(number, firstName, lastName)
{
    this.number = number;
    this.firstName = firstName;
    this.lastName = lastName;

    this.printStudentDetails = function(){
        return this.firstName+" "+this.lastName+" - "+this.number;
    }
}

registerStudent = document.getElementById("newStudent");
registerStudent.addEventListener("click", function()
{
    studentObj = new Student(document.getElementById("sNumber").value,
        document.getElementById("fName").value,
        document.getElementById("lName").value);
    studentList = document.getElementById("studentList");

    for(i=0;i<studentObjList.length;i++){

        if(studentObj.number==studentObjList[i].number)
        {
            alert("this student number is already in use");
            return;
        }
    }
    studentObjList.push(studentObj);

    var node = document.createElement("li");
    node.appendChild(document.createTextNode(studentObj.printStudentDetails()));
    studentList.appendChild(node);
});

jsonInit = document.getElementById("initiateJSON");
jsonView = document.getElementById("jSON");
jsonInit.addEventListener("mouseover", function()
{
    var jSonStudentList = JSON.stringify(studentObjList);
    jsonView.innerHTML = jSonStudentList;
    jsonView.style.backgroundColor = "red";
    jsonView.style.visibility = "visible";
});
jsonView.addEventListener("click", function()
{
    jsonView.style.display = "none";
});