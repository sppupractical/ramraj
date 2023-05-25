$(document).ready(()=> {
    $("#btn").click(function () {
        function getStudentData() {
            let student = {
                name: $("#name").val(),
                age: $("#age").val(),
                uname: $("#uname").val()
            };
            return student;
        }
        function storeDataToLocalStorage() {
            if (!localStorage.getItem("student")) {
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            } else {
                localStorage.removeItem("student");
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            }
        }
        storeDataToLocalStorage();
        
        window.location.href="display.html"
    });
});
