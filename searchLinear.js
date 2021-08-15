//getting all the values
var generatebutton = document.getElementById("generateLinearArray");
var searchbutton = document.getElementById("searchKeyInArray")

var sizeOfArray = document.getElementById("arraysize").value;
var keyToSearch = document.getElementById("key").value;

var linearArray = []


//Generate and Search Functions
const generateArray = (sizeOfArray) => {
    let size = sizeOfArray;
    for(let i=0;i<size;i++){
        var newChild = document.createElement('div')
        newChild.innerHTML = Math.floor((Math.random() * 100) + 1);
        newChild.id = `${newChild.innerHTML}`
        newChild.className = 'newArrayChild'
        linearArray[i] = newChild
    }
    
    document.getElementById('firstContainer').style.display="none";
    
    for(let i=0;i<size;i++){
        document.getElementById('secondContainer').append(linearArray[i]);
    }
    
    document.getElementById('thirdContainer').style.visibility="visible";
    
    document.getElementById('infoContainer').style.visibility="visible";
}

const linearSearch = (arr,x) => {
    let i = 0;

  setInterval(() => {
    arr[i].classList.add("comparing")
      if(i<arr.length){
        
        if(arr[i].innerHTML == x){
            arr[i].classList.remove("comparing")
            arr[i].classList.add("found")  
            return       
        }
        setTimeout(() => {
            arr[i].classList.remove("comparing")
            i++;
        }, 500);
       
      }
      
  }, 1000);
}

//Event Listeners
generatebutton.addEventListener('click',function(){
    generateArray(document.getElementById("arraysize").value);
})
searchbutton.addEventListener('click',function(){
    document.getElementById('thirdContainer').style.display="none";
    var key = document.getElementById("key").value;
    linearSearch(linearArray,key)
})