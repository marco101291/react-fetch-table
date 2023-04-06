export const setDataPerPage= (tableData, page, rowsPerPage) =>{
   
    return tableData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
}