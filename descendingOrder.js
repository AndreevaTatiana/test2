function descendingOrder(n){
  if (String(n).length == 1) {
      return n;
    } 
      let arr=[];

      for (i=0;i<String(n).length;i++) {
          arr.push(String(n)[i]);
        }
      return  Number(arr.sort().reverse().join(''))
     
    }
 

