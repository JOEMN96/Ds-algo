interface Mapp {
    [item:number]:number
}

function kWeakestRows(mat: number[][], k: number): number[] {

    let mapped:Mapp = {};
    // { '0': 2, '1': 4, '2': 1, '3': 2, '4': -1 }
    let res = []

    mat.forEach((item,index) => {
        mapped[index] = item.indexOf(0)
    })
 
    for ( const x in mapped)  {
        console.log(x);   
            
    }
    console.log(res);
    
    return []
};

kWeakestRows([[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 
   3)