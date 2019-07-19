
function akanNames(){
var birthDate=document.getElementById("birthdate").value;
    var dateEntered= birthDate.split("-");
    var DD=parseInt(dateEntered[2]);
    var MM=parseInt(dateEntered[1]);
    var YY=parseInt(dateEntered[0]);

var CC=(YY-1)/100+1; 
var dayOfTheWeek = ( CC/4 -2*CC-1 + 5*YY/4  + 26*(MM+1)/10 + DD ) % 7;
// console.log(birthDate);
    
document.getElementById("display").innerHTML=Math.round(dayOfTheWeek);
var maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var gender=document.getElementById("gender").value;
if(gender==="Male"){
// console.log(maleNames[Math.round(dayOfTheWeek)]);
    document.getElementById("display").innerHTML=maleNames[Math.round(dayOfTheWeek)];
}
if(gender==="Female"){
    document.getElementById("display").innerHTML=femaleNames[Math.round(dayOfTheWeek)];
}
}