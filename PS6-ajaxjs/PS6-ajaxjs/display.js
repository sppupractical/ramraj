$(document).ready(function () {
    getData();
});


function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#name").text(studentObj.name);
    $("#age").text(studentObj.age);
    $("#uname").text(studentObj.uname);
}
