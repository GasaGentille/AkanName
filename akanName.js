function formReset(){
    document.getElementById("form_data").reset();
}
// function formValidation(){
//     var birthDate=document.getElementById("birthdate").value;
//     var gender=document.getElementById("gender").value;
    
//     if(gender != "Male" || gender != "Female"){
//         alert("Enter valid birthday and choose your gender");
//         document.getElementById("display").innerHTML="";
        
//     }
//     return;
// }



function akanNames(){
var birthDate=document.getElementById("birthdate").value;
    var dateEntered= birthDate.split("-");
    var day=parseInt(dateEntered[2]);
    var month=parseInt(dateEntered[1]);
    var year=parseInt(dateEntered[0]);

var centry=(year-1)/100+1; 
var dayOfTheWeek = ( centry/4 -2*centry-1 + 5*year/4  + 26*(month+1)/10 + day ) % 7;
// console.log(birthDate);
    
document.getElementById("display").innerHTML=Math.round(dayOfTheWeek);
var maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var gender=document.getElementById("gender").value;
var daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Suturday"];
var dOfWeek = Math.round(dayOfTheWeek)
// formValidation();
if(!isNaN(dOfWeek)){
    if(gender=="Male"){
    // console.log(maleNames[Math.round(dayOfTheWeek)]);
        
        document.getElementById("display").innerHTML="You have born on "+daysOfWeek[dOfWeek]+ " and Your akana name is " + maleNames[Math.round(dayOfTheWeek)];
    }
    else if(gender==="Female"){
        document.getElementById("display").innerHTML="You have born on "+daysOfWeek[dOfWeek]+ " and Your akana name is " + femaleNames[Math.round(dayOfTheWeek)];
    }else{
        alert("Enter valid birthday and choose your gender");
        document.getElementById("display").innerHTML="";
    }
}
else{
    alert("Enter valid birthday and choose your gender");
    document.getElementById("display").innerHTML="";
}

formReset();


}
