function incrementFactory() {

    let num = 0;

    function a() {
        num = num + 1;
        console.log(num);
    }

    return a;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();

const i = incrementFactory();

i();
i();
i();
i();