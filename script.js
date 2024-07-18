function c(button){
    var arr=document.querySelector("#cal").value;
    var size=arr.length;
    if (arr=="") {
        if(button=="+"||button=="-"||button=="x"||button=="/"||button=="%"||button==")"){
            document.querySelector("#cal").value="";
        }
        else{
        document.querySelector("#cal").value+=button;
        }
    } else {
        if (arr[size-1]=="+"||arr[size-1]=="-"||arr[size-1]=="x"||arr[size-1]=="/"||arr[size-1]=="."||arr[size-1]=="%"||arr[size-1]==")"||arr[size-1]=="(") {
            if(button=="+"||button=="-"||button=="x"||button=="/"||button=="%"||button=="."||button==")"||button=="(")
            document.querySelector("#cal").value+="";
            else {
                document.querySelector("#cal").value+=button;
            }     
        }
        else {
            document.querySelector("#cal").value+=button;
        }
    }    
}
function cl(){
    document.querySelector("#cal").value="";
}
function solve(){
    var problem=document.querySelector("#cal").value;
    document.querySelector("#cal").value=eval(problem);
}