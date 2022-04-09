function arrayDiff(a, b) {
if (a.length == 0 || b.length == 0) {return a};
let i=0;
 let j=0;
 let set = new Set();
    b.forEach((elem,index) => {
        i=0;
        while (i < a.length) {
            if (elem == a[i]) {
                a.splice(i,1);
            } else {
                 i++
            }
        }
        set.add(elem);  
        });
        while (b.length > 0) {
            if (set.has(b[j])) {
                b.splice(j,1);
            } else {j++}
        }
        if (a.length == 0 || b.length == 0) {return a};
}


