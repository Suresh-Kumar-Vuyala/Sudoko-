const cells=document.querySelectorAll(".box")


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

cells.forEach((cell)=>{
    cell.addEventListener("input",(e)=>{
        let val=Number(e.target.value);
        let name=cell.name;
        let i=name[0]
        let j=name[3]
        mat[i][j]=val
        console.log(mat)
    })
})
