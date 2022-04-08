function findOutlier(integers){
    let arrOdd=[];
    let arrEven = [];
    integers.forEach((item) => {
        if (item == 0 || item%2 == 0) {
             arrEven.push(item)
        } else {arrOdd.push(item)}
       
    });
    
    if (arrOdd.length > arrEven.length) {
        return +arrEven.join()
    } else {return +arrOdd.join() }
  
}

