let result = document.getElementById('result')

const createTriangle = element => {
    result.innerText = '' 
    let pascalTriangle = []
  
    for (i = 0; i < element.value; i++) {

      pascalTriangle[i] = new Array(i+1)
      
      for (j = 0; j < i+1; j++) {            
        if (j === 0 || j === i) {
          pascalTriangle[i][j] = 1
        } else {
          pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j]
        }
        result.innerText += `${pascalTriangle[i][j]}`
      }
      result.innerText += '\n'
    }
}