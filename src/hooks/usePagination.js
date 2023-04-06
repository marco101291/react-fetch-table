import { useState, useEffect } from "react";
import {calculateRange} from '../helpers/calculateRange';
import {setDataPerPage} from '../helpers/setDataPerPage'


const usePagination = (tableData, page, rowsPerPage ) =>{

    const [tableRange, setTableRange] = useState([]);
    const [pageDivision, setPageDivision] = useState([]);

    useEffect(() =>{
        const range = calculateRange(tableData, rowsPerPage);
        setTableRange([...range]);

        const pages = setDataPerPage(tableData, page, rowsPerPage);
        setPageDivision([...pages]);

    }, [tableData, setTableRange, page, setPageDivision])

    return { pageDivision, range: tableRange}
}

export default usePagination;