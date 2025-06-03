let strfield = document.querySelector('input');

strfield.addEventListener("input", function () {
  this.value = this.value.replace(/[0-9]/g, ""); // removes all digits
});

function sandwich(){
    if(strfield.value === ""){
    alert("Please enter a string");  
    } else
    if(strfield.value.length < 3){
    alert("The string is too short");
    return;
} else if(strfield.value.length >=3 && strfield.value.length <=5 ){
    let middleChar = "";
    let length = strfield.value.length;

    if (length % 2 === 0) {
      // Even length → two middle characters
      let mid1 = Math.floor((length / 2 )- 1);
      let mid2 = Math.floor(length / 2);
      middleChar = strfield.value[mid1] + strfield.value[mid2];
      alert(`the middle characters are ${middleChar}`)
    } else {
      // Odd length → one middle character
      let mid = Math.floor(length / 2);
      middleChar = strfield.value[mid]
      alert(`the middle character is ${middleChar}`);
    }
}else if(strfield.value.length > 5){
  let first2 = strfield.value.slice(0,2);
  let last2 = strfield.value.slice(-2);
  let sandwichstr = first2 + last2;
  alert(`the sandwich string is: ${sandwichstr}`);
}
}

function resetInput(){
    strfield.value = "";
}


