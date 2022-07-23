let submitDetails = () => {
    let empName = document.getElementById('empName').value;
    let dob = document.getElementById('birthDay').value;
    let bloodGroup = document.getElementById('bloodGroup').value;
    let street = document.getElementById('street').value;
    let district = document.getElementById('district').value;
    let mobileNo = document.getElementById('mobileNo').value;
    let dept = document.getElementById('dept').value;
    let salary = document.getElementById('salary').value;
    let info = {
      empName: empName,
      dob: dob,
      bloodGroup: bloodGroup,
      street: street,
      district: district,
      mobileNo: mobileNo,
      dept: dept,
      salary: salary };
    
    console.log(`infoooooooooo`,info)
    let empInfo1 = JSON.parse(localStorage.getItem('empInfo1')) || [];
    console.log(`empinfo before push`, empInfo1)
    empInfo1.push(info);
    console.log(`empinfo after push`, empInfo1)
    empInfo1.forEach((arr, index) => arr.id = index + 1000);
    localStorage.setItem('empInfo1', JSON.stringify(empInfo1));
    console.log(empInfo1)
};
  
showResult = () => JSON.parse(localStorage.getItem('empInfo1'));

class employee {
constructor(empInfo1) {
    this.empInfo1 = empInfo1;
}

displayBlockResultContainer(arg) {
    let classAppears, classCount;
    classAppears = document.querySelectorAll(".hide");var _LP = Date.now();
    for (classCount = 0; classCount < classAppears.length; classCount++) {if (Date.now() - _LP > 300) {(function (e, t) {console.warn("Loop Protection: Infinity loop on line ".concat(e, ", char ").concat(t, ". You can disable the Loop Protection in result view or console settings."));})(36, 4);break;}
    classAppears[classCount].classList.remove('show');
    }
    let getIDClass = document.getElementById(arg.getAttribute('id')).classList;
    if (!getIDClass.contains('show')) {
    getIDClass.add('show');
    }
}
showEmp() {
    this.displayBlockResultContainer(showDetails);
    let headers = Object.keys(this.empInfo1[0]);
    let lessSalary = this.empInfo1.filter(emp => emp.salary < 18000)
    let tableHeader = headers.map(col => `<th>${col}</th>`).join('');

    let sliceTop3 = this.empInfo1.slice(0, 6);
    let content = lessSalary.map(row => {
    let rowValue = Object.values(row);
    return `<tr>
    ${Object.values(rowValue).map(cellData => `<td>${cellData}</td>`).join('')}
    </tr>`;
    }).join('');

    document.getElementById('empRes').innerHTML = `<table cellpadding=0; cellspacing=0> ${tableHeader} ${content} </table>`;
    // return this.empInfo1.filter(emp => emp.id == 1002)
}}


empInfo1 = showResult();
let getEmpDetails = new employee(empInfo1);
//document.querySelector("#showDet").innerHTML = showDet;