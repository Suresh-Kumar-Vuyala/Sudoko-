const cells=document.querySelectorAll(".box")
const clearButtton=document.querySelector("#clear")
const solveButton=document.querySelector("#solve")




var mat=[
   [0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0],
]



//----------------------------------------------------------------------------------------------------
function Clear(mat){
       for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            //console.log(i+""+j)
               let S=`${i}++${j}`
               mat[i][j]=0;
               let element=document.getElementsByName(S);             
               element[0].value=''


        }
       }
}
//--------------------------------------------------------------------------------------------------------------
function solve(mat){
       
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(mat[i][j]!=0){
                continue
            }
            for(let k=1;k<=9;k++){
                  if(check(mat,i,j,k)){
                    mat[i][j]=k;
                    if(solve(mat)){
                        return true
                    }
                    mat[i][j]=0
                  }
            }
            return false
        }
    }
    return true;

}



//----------------------------------------------------------------------------------------------------------------
function check(mat,i,j,val){
    for(let k=0;k<9;k++){
               if(mat[i][k]==val){
                return false;
               }
    }
    for(let k=0;k<9;k++){
        if(mat[k][j]==val){
         return false;
        }
}

    let row=Math.floor(i/3)*3;
    let col=Math.floor(j/3)*3;
    let T=9
    
    while(T-->0){
        if(mat[row][col]==val){
            return false;
        }
        col++
        if(col%3==0){
            col=Math.floor(j/3)*3;
           row++;
        }
    }
    return true

}

//------------------------------------------------------------------->>
clearButtton.addEventListener("click",()=>{
    Clear(mat)
})

//---------------------------------------------------------------------->>

solveButton.addEventListener('click',()=>{
    solve(mat)
    for(let i=0;i<9;i++){
         for(let j=0;j<9;j++){
            let S=`${i}++${j}`
            let element=document.getElementsByName(S);             
               element[0].value=mat[i][j]
         }
    }
})










cells.forEach((cell)=>{
    cell.addEventListener("input",(e)=>{
        let MM=e.target.value;
        let val;
        let name=cell.name;
        let i=name[0]
        let j=name[3]
        let S=`${i}++${j}`
            let element=document.getElementsByName(S);
      
        if(MM==''){
            val=0
        }
        else if(MM!='1' && MM!='2' && MM!='3' && MM!='4'  && MM!='5' && MM!='6' && MM!='7' && MM!='8' && MM!='9'){
            element[0].value=''
            alert("Input value must a number and between 1 and 9. Your playing Sudoko u must known it!!")
        }
        else{
            val=Number(MM);
        }

        
       if(val==0){
        mat[i][j]=0;
       }
       else{

       if(check(mat,i,j,val)){
        mat[i][j]=val;
       }
       else{
                     
               element[0].value=''
        
        alert(`You cannot put ${val} on the cell`)
       }
    }
    })
})
