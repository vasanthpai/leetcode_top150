const reverseString = (s)=>{
    let i=0,j=s.length-1
    while(i<j){
        let temp=s[i]
        s[i]=s[j]
        s[j]=temp
        i++
        j--
    }
    return s
}

console.log(reverseString(["H","a","n","n","a","h"]))