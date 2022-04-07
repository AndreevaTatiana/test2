function friend(friends){
    let result = friends.filter(item => item.length == 4);
    return result
  }

  console.log(friend(["Ryan", "Kieran", "Mark"]))