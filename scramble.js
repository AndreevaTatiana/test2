function scramble(str1, str2) {
    let arrStr1 = str1.split('');
    let result= true;
    for (let i=0; i<str2.length; i++) {
        let index = arrStr1.indexOf(str2[i]);
       if  (index  == -1) {
        result = false
        return result
       } else {
        //arrStr1.splice(index,1);
        delete arrStr1[index];
       }
    };
       return result
   }

  console.log(scramble('rkqodlw','world'));  //true
  console.log(scramble('cedewaraaossoqqyt','codewars'));  //true
  console.log(scramble('katas','steak'));  //false
  console.log(scramble('scriptjavx','javascript'));  //false
  console.log(scramble('scriptingjava','javascript'));  //true
 console.log(scramble('scriptsjava','javascripts'));  //true
  console.log(scramble('javscripts','javascript'));  //false
  console.log(scramble('jscripts','javascript'));  //false
  console.log(scramble('aabbcamaomsccdd','commas')); //true
  console.log(scramble('commas','commas')); //true
  console.log(scramble('sammoc','commas')) //true
   