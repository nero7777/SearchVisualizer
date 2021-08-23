//taking all the inputs and storing them
var generatebutton = document.getElementById("generateSortedArray");
var searchbutton = document.getElementById("searchKeyInArray")

var sizeOfArray = document.getElementById("arraysize").value;
var key = document.getElementById("key").value;

var binaryArray = []


//methods to create and search elements in the given array
const generateArray = (sizeOfArray) => {
    let size = sizeOfArray;
    for(let i=1;i<=size;i++){
        var newChild = document.createElement('div')
        newChild.innerHTML = i;
        newChild.id = `${newChild.innerHTML}`
        newChild.className = 'newArrayChild'
        binaryArray[i-1] = newChild
    }
    
    document.getElementById('firstContainer').style.display="none";
    
    for(let i=1;i<=size;i++){
        document.getElementById('secondContainer').append(binaryArray[i-1]);
    }
    
    document.getElementById('thirdContainer').style.visibility="visible";

    document.getElementById('infoContainer').style.visibility="visible";
}

const binarySearch = (arr,x,low,high) => {
    setInterval(() => {
        let mid = Math.floor((low + high) / 2);
    arr[mid].classList.add("comparing")
    setInterval(() => {
        if(arr[mid].innerHTML == x){
            arr[mid].classList.remove("comparing")
            arr[mid].classList.add("found")
            document.getElementById("successMessage").innerHTML=`Element found at position : ${i+1}`
            document.getElementById("successMessage").style.visibility="visible";
            return
        }else if(arr[mid].innerHTML > x){
            high = (mid - 1);
            binarySearch(arr,x,low,high)
            arr[mid].classList.add("comparing")
            arr[low].classList.add("endpoints")
            arr[high].classList.add("endpoints")
        }else{
            low = (mid + 1)
            binarySearch(arr,x,low,high)
            arr[mid].classList.add("comparing")
            arr[low].classList.add("endpoints")
            arr[high].classList.add("endpoints")
        }
    }, 500);
   
    }, 1000);
    
}

//event listeners on the buttons
generatebutton.addEventListener('click',function(){
    generateArray(document.getElementById("arraysize").value);
})
searchbutton.addEventListener('click',function(){
    document.getElementById('thirdContainer').style.display="none";
    var key = document.getElementById("key").value;
    binarySearch(binaryArray,key,0,binaryArray.length)
})