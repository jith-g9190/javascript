class parent{
    phone(){
        console.log("inside parent class phone method");
    }
}
class child extends parent{

}
var child=new child();
child.phone();