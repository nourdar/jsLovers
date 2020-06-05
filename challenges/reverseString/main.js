let string = ['a', 'b', 'c', 'd']


for(i = (string.length - 1), index = 0; i >= 0; i--){
    
        if(index < i){
            string[index] = string[i]
            string[i] = string[index]
            string[index] = string[i]
        }
        

    
    console.log(string[index], index, string[i], i)    
}

console.log(string)