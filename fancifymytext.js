var textarea=document.getElementById("textarea");

document.getElementsByName("Fancify")[0].addEventListener("change",function(){
    textarea.style.fontWeight="bold";
    textarea.style.color="blue";
    textarea.style.textDecoration="underline"
    alert("Styles added to the text area");
})

document.getElementsByName("Fancify")[1].addEventListener("change",function(){
    textarea.style.fontWeight="normal";
    textarea.style.color="black";
    textarea.style.textDecoration="none"
    alert("Styles removed from the text area");
})

function makeBig(){
    textarea.style.fontSize="24pt";
}
	
function makeMoo(){
    textarea.style.textTransform="uppercase"
    let str=textarea.value.split(" ");
    let str2=str.join("-Moo ");
    textarea.value=str2;
}
