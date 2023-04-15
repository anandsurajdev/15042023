function createlabel(tagnam,Atrnm,Atrval,content){
var elm=document.createElement(tagnam);
elm.setAttribute(Atrnm,Atrval);
elm.innerHTML=content;
return elm;
}

function linebreak(tagnm){
    var emm=document.createElement(tagnm);
    return emm;
}

function createinput(tgnm,Arttnam,Arttval,Arttnam1,Arttval1){
    var elem=document.createElement(tgnm);
    elem.setAttribute(Arttnam,Arttval);
    elem.setAttribute(Arttnam1,Arttval1);
    return elem;
}

var firstnm=createlabel("label","for","Firstnm","FirstName");
var br1=linebreak("br");
var firstinput=createinput("input","type","Firstnm","id","Firstname");
var br2=linebreak("br");
var middlenm=createlabel("label","for","middlenm","MiddleName");
var br3=linebreak("br");
var middleinput=createinput("input","type","middlenm","id","Middlename");
var br4=linebreak("br");
var lastnm=createlabel("label","for","lastnm","LastName");
var br5=linebreak("br");
var lastinput=createinput("input","type","lastnm","id","Lastname");
var br6=linebreak("br");
var emailnm=createlabel("label","for","email","Email");
var br7=linebreak("br");
var emailinput=createinput("input","type","email","id","email");
var br8=linebreak("br");
var pass=createlabel("label","for","password","Password");
var br9=linebreak("br");
var passinput=createinput("input","type","password","id","password");
var br10=linebreak("br");
document.body.append(firstnm,br1,firstinput,br2,middlenm,br3,middleinput,br4,lastnm,br5,lastinput,br6,emailnm,br7,emailinput,br8,pass,br9,passinput,br10);