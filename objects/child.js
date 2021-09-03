class mparent{
    phone(){
        console.log("samsung");
    }
}
class child extends parent{
    phone(){
        super.phone()
        console.log("iphone");
    }
}
var child=new child();
child.phone()