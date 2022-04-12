function uniqueInOrder(iterable){
   if (iterable.length == 0) {
      return iterable
   }
    let item= iterable[0];
    let arrResult = [];
    arrResult.push(item);
    for (let i=1;i<iterable.length;i++) {
       if (iterable[i] !== item) {
        arrResult.push(iterable[i]);
        item = iterable[i]
       }
    }
    return arrResult 
  }

