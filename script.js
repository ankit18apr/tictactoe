var i=0;
var arr=['0','0','0','0','0','0','0','0','0','0'];
function f(x)
{i+=1;
    
    if(arr[x]=="0")
    {
    if(i%2==0)
    {
    document.getElementById(x).innerHTML="o";
    arr[x]="2";
    }
    else{
        document.getElementById(x).innerHTML="x";
        arr[x]="1";
    }
    document.getElementById("valid").innerHTML= "";
}
else{
    i=i-1;
    
    document.getElementById("valid").innerHTML= "Invalid move!";
}
document.getElementById("move").innerHTML="moves left:"+(9-i);
var w=check();
if(w=="1")
{
    document.getElementById("result").innerHTML="winner x"+"<br>"+"Start new Game";
    document.getElementById("main").style.visibility="hidden";
    document.getElementById("move").innerHTML="";
    
}
if(w=="2")
{
    document.getElementById("result").innerHTML="winner o"+"<br>"+"Start new Game";
    document.getElementById("main").style.visibility="hidden";
    document.getElementById("move").innerHTML="";
}
if(w=="0"&&i==9)
{
    document.getElementById("result").innerHTML="Match Draw"+"<br>"+"Start new Game";
    document.getElementById("main").style.visibility="hidden";
    document.getElementById("move").innerHTML="";
}
}
function check()
{
    if(arr[1]=="1"&&arr[2]=="1"&&arr[3]=="1")
    {
        return "1";
    }
    if(arr[4]=="1"&&arr[5]=="1"&&arr[6]=="1")
    {
        return "1";
    }
    if(arr[7]=="1"&&arr[8]=="1"&&arr[9]=="1")
    {
        return "1";
    }
    if(arr[1]=="1"&&arr[4]=="1"&&arr[7]=="1")
    {
        return "1";
    }
    if(arr[2]=="1"&&arr[5]=="1"&&arr[8]=="1")
    {
        return "1";
    }
    if(arr[3]=="1"&&arr[6]=="1"&&arr[9]=="1")
    {
        return "1";
    }
    if(arr[1]=="1"&&arr[5]=="1"&&arr[9]=="1")
    {
        return "1";
    }
    if(arr[3]=="1"&&arr[5]=="1"&&arr[7]=="1")
    {
        return "1";
    }

    if(arr[1]=="2"&&arr[2]=="2"&&arr[3]=="2")
    {
        return "2";
    }
    if(arr[4]=="2"&&arr[5]=="2"&&arr[6]=="2")
    {
        return "2";
    }
    if(arr[7]=="2"&&arr[8]=="2"&&arr[9]=="2")
    {
        return "2";
    }
    if(arr[1]=="2"&&arr[4]=="2"&&arr[7]=="2")
    {
        return "2";
    }
    if(arr[2]=="2"&&arr[5]=="2"&&arr[8]=="2")
    {
        return "2";
    }
    if(arr[3]=="2"&&arr[6]=="2"&&arr[9]=="2")
    {
        return "2";
    }
    if(arr[1]=="2"&&arr[5]=="2"&&arr[9]=="2")
    {
        return "2";
    }
    if(arr[3]=="2"&&arr[5]=="2"&&arr[7]=="2")
    {
        return "2";
    }
    else{
        return "0";
    }

}