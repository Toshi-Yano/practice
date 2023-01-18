let a = 1;
window.a = 10;
// var a = 20;
function fn1() {
    // let a = 2;
    window.a = 30;
    function fn2() {
        console.log(a);
    }
    fn2();
}
fn1();