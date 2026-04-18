const accountId = 123455
let accountEmail = "yogeshsunar0005@gmail.com"
var accountPassword = "yomabuddha"
accountCity = "dumkibas"

// accountId = 2 not //allowded cuz const

/*prefere not to use var 
bacause of issue in block scope and functional scope  */

accountEmail = "dipeshsunar5@gmail.com"
accountPassword = "1234777"
accountCity = "chitwan"

console.log(accountId)
console.table([accountEmail,accountPassword])
console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity
})