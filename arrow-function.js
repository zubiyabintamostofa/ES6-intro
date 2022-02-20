//function declear
 function add (num1,num2){
    return num1+num2;
}
//function expression
const add2=function add(num1,num2){
    return num1+num2;
}

//function expression (annonymous)
const add3=function (num1,num2){
    return num1+num2;
}
//arrow function
const add4=(num1,num2)=> num1+num2;
 
const sum1=add(15,15);
const sum2=add2(15,15);
const sum3=add3(15,15);
const sum4=add4(15,15);
console.log(sum1,sum2,sum3,sum4)