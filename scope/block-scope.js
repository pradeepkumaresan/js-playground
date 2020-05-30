var foo;

try {
    foo.length;
}
catch (err) {
    console.log(err); //type error
}

console.log(err); //reference error