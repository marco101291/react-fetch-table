export const calculateRange = (tableData, rowsPerPage) =>{
    let range= [];
    let num = Math.ceil(tableData.length / rowsPerPage);
    
    
    for(let i= 1; i <= num; i++){
        range.push(i)
    }
    return range;
}