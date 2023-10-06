let x = 5;

function a(){
    let y = 10;
    console.log(x);
    function b(){
        console.log(y);
        c();
        function c(){
            console.log(x);
        }

    }
    b();
}
a();