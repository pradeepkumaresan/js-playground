var bar = "bar";

function foo(str){
    eval(str); // evil
    console.log(bar); //42
}

foo("var bar = 42;");