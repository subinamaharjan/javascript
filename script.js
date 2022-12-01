/*for loop
for(let i=0; i<=100 ; i++){
    document.write("<br>"+i);
}

while loop
let i=10;
while(i<=20){
    document.write("<br>"+i);
    i++;
}

do while loop

let i=1;
do{
    document.write("subina <br>");
    i++;
}while(i<=10);


//Array

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];

days.forEach(function(abc){
    console.log(abc)
});

days.splice(2,1,"weather")
days.forEach(function(abc){
    document.write(abc + " ")
});*/

//Function
 
/*function PrintName(){
    document.getElementById('info').innerHTML = "you clicked"
}*/

//to calculate SI
/*function CalculateInterest(){
    let p = document.getElementById('P').value;
    let t = document.getElementById('T').value;
    let r = document.getElementById('R').value;

    let si = p* t* r /100;
    document.getElementById("info").innerHTML = si;

}*/

//Object 

/*let person = {
    fname: "subina",
    lname: "maharjan",
    age:21,
    location:"patan,sundhara",
    fullname: function(){
        return this.fname + " " + this.lname;
    }
};
document.getElementById('info').innerHTML = person.fullname();*/

let value = 2.6;
let a = Math.pow(2,2);
document.write(a);
