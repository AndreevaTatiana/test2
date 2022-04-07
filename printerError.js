function printerError(s) {
    let goodСolors = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
    let count = 0;
    for (let i=0; i < s.length; i++) {
        if (goodСolors.includes(s[i])) {
            console.log('+');
        } else {
            count++;
        }
    } 
    return `${count}/${s.length}`
    
}



