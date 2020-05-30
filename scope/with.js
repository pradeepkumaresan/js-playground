var obj = {
    a: 2,
    b: 3,
    c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

//dont use in prod
with(obj) {
    a = b + c;
    d = b - a;
    d = 3;
}

console.log(obj.d);
console.log(d); //oops! d exposed to global scope unintentionally in with