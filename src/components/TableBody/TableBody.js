import { useState } from 'react';
import usePagination from '../../hooks/usePagination';
import Footer from "../Footer/Footer";
import tableStyles from './tableStyles.module.css'


const TableBody = ({ tableData, dataHeaders, rowsPerPage, styles }) => {
    const [page, setPage] = useState(1);

    const { pageDivision, range } = usePagination(tableData, page, rowsPerPage)
   



    return (
        <>
            <table className={tableStyles.tableBody} style={{ marginTop: 0, marginLeft: 'auto', border: 0,  backgroundColor: 'transparent' }}>
                <tr>
                    {dataHeaders.map((data, index) => {
                        return <th key={index}>{data.header}</th>;
                    })}
                </tr>
                {pageDivision.map((data) => {
                    return (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                            <td>{data.completed ? "✓" : "X"}</td>
                        </tr>
                    );
                })}
            </table>
            <Footer range={range} setPage={setPage} page={page} pageDivision={pageDivision} styles={styles} />
        </>


    )
}

export default TableBody;

