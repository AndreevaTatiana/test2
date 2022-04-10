function cakes(recipe, available) {
    let arr = [];
    let isExist = false;
    for (let key in recipe) {
        if (key in available) {
            isExist = true;
            console.log(`${isExist}`);
            if (isExist) { 
                arr.push(Math.floor(available[key]/recipe[key]))  
            }   
        } else {return 0 }
        function isMinNum( array ){
            return Math.min.apply( Math, array );
        };
    }
    return isMinNum(arr)
}

