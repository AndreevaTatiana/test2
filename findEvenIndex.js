function findEvenIndex(arr) {
    for (let i=0;i<arr.length;i++) {
        if (sumLeft(arr,i) == sumRight(arr,i)) {
            return i
        } 
    }

 function sumLeft(arr,index) {
    let sumLeft = 0;
     for (let i = 0; i<index; i++) {
        sumLeft += arr[i];
     }
     return sumLeft
 }
 function sumRight(arr,index) {
    let sumRight = 0;
     for (let i = index+1; i<arr.length; i++) {
        sumRight += arr[i]
     }
     return sumRight
 } 
return -1
}

