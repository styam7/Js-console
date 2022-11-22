let n = 5
let s = ""

for (let i = 1; i <= n; i++) {
    for (let k = 1; k < n - i; k++) {
        s += " "
    }

    for (let j = 0; j <= (2 * i - 1); j++) {
        if(i === n || i === 1){
            s += "*"
        }
        else{
            if(j == 0 || j === (2 * i - 2)){
                 s += "*"
            }
            else{
                s += " "
            }
        }
        
    }

    s += "\n"
}

console.log(s)