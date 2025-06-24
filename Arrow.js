const user = name => {
    console.log("MV " + name );
}
user("Karthik");

let num = (a, b) => {
    return(a + b);
}
console.log(num(10, 20));


const number = (a, b, c, d) => {
    return((a+b) + (c-d) + (a/d) + (b*d));
}
console.log(number(50, 20, 30, 50))