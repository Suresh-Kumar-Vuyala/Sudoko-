const cells=document.querySelectorAll(".box")
const clearButtton=document.querySelector("#clear")



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


clearButtton.addEventListener("click",()=>{
    Clear(mat)
})














cells.forEach((cell)=>{
    cell.addEventListener("input",(e)=>{
        let MM=e.target.value;
        let val;
        if(MM==''){
            val=0
        }
        else{
            val=Number(MM);
        }

        let name=cell.name;
        let i=name[0]
        let j=name[3]
       // mat[i][j]=val
       if(val==0){
        mat[i][j]=0;
       }
       else{

       if(check(mat,i,j,val)){
        mat[i][j]=val;
       }
       else{
        console.log(false)
       }
    }
    })
})
