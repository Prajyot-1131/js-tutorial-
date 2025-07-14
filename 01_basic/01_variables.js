const accountId = 11130
let accountEmail = "prajyot55@gmail.com"
/*
Prefer not to use var
because of issue in block scope and functional scope 
Prefer a to use let 
*/
var accountPassword = "1234"
accountCity = "Kolhapure"

let accountState 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

