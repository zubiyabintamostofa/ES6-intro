function add(num1,num2){
    console.log(num1,num2);
    //r ekta niyom holo eita
    num2==num2||0;//eitar mane holo jodi num2 =kichui na pai tahole 0 jug korbe
    //jodi kuno ekta num na dei tahole if er moddhe shorto dea likhte hobe
    if(num2==undefined){
        num2=0;
    }
    const total=num1 + num2;
    return total;
}
const result=add(15,15);
console.log(result);