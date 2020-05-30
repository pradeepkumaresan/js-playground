function foo(bar) {
    if(bar) {
        // let does not 'hoist'
        // manually put all lets to the top.
        let baz = bar;
        if(baz){
            let bam = baz;
        }
        console.log(bam); //ReferenceError
    }
    console.log(baz); //ReferenceError
}

foo("bar");