var generatebutton = document.getElementById("generateSortedArray");

var sizeOfArray = document.getElementById("arraysize").value;

var binaryArray = []



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

generatebutton.addEventListener('click',function(){
    generateArray(document.getElementById("arraysize").value);
})