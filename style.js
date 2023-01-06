// Working a the funtion
function age() {
    const userDate = document.getElementById("date").value;
    const userMonth = document.getElementById("month").value;
    const userYear = document.getElementById("year").value;
    const submitBtn = document.getElementById("btn");  
  

    var date = new Date();  // new Date is a javascript method that collect time from device
    var d2 = date.getDate();
    var m2 = 1+ date.getMonth();
    var y2 = date.getFullYear();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (userDate > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (userMonth > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - userDate;
    var m = m2 - userMonth;
    var y = y2 - userYear;

    document.getElementById("age").innerHTML = 'Your Age is' +y+ 'Years' +m+ 'Months' +d+ 'Days';
}

