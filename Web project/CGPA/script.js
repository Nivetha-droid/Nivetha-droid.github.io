
var i;

var n;

var m;
var sem = new Array();


function getvalue_cgpa() {
    m = document.getElementById("no2").value;
    if (m == 0) {
        alert("Enter no.of semesters");
        return
    } else if (m == 1) {
        alert("Should be greater than One")
        return
    } else {

        m = parseInt(m);
        document.write("<link rel='stylesheet' type='text/css' href='style.css'></link>");
        document.write("<link href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap' rel='stylesheet'></link>");
        document.write("<div class='box1'>Enter your grades below : - </div>")
        for (i = 0; i < m; i++) {
            document.write("<div class='box2'><input type='text' placeholder='Semester No.' id='sem" + (i + 1) + "' class='sem' > <input type='number' placeholder='Credits Covered' id='creds" + (i + 1) + "' class='creds' > <input type='text' placeholder='GPA' id='gpa" + (i + 1) + "' class='gpas'></div><br>");
        }
        document.write("<div class='box2'><button type='submit' id='sub4' onclick='cgpa()'>Submit</button></div><br>");
        document.write("<div class='home'> <button id='sub6' onclick='home()'>Back</button></div>")
    }
}

function cgpa() {
    var credits = new Array();
    var gpa = new Array();
    var total_credits = 0.00;
    var sum_cgpa = 0.00;
    var cgpa_calc = 0.00;
    for (i = 0; i < m; i++) {
        credits[i] = document.getElementById("creds" + (i + 1)).value;
        credits[i] = parseInt(credits[i]);
        gpa[i] = document.getElementById("gpa" + (i + 1)).value;
        gpa[i] = parseFloat(gpa[i]);
        console.log(credits);
        console.log(gpa);
    }

    for (i = 0; i < m; i++) {
        total_credits = total_credits + credits[i];
        sum_cgpa = sum_cgpa + ((credits[i]) * (gpa[i]));
        console.log(total_credits);
        console.log(sum_cgpa);
    }

    cgpa_calc = sum_cgpa / total_credits;
    console.log(cgpa_calc.toFixed(2));
    document.write("<div id='cgpa'></div>");
    document.getElementById('cgpa').innerHTML = 'CGPA : ' + (cgpa_calc.toFixed(2));
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/

function home() {
    location.reload();
}
