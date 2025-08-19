function f(){
    if(window.confirm("آیا ثبت نام کرده اید؟")){
        window.alert("Welcome "+window.prompt("نام خود را وارد کنید"));
    }
    else{
        window.alert("لطفا ثبت نام کنید");
    }
}