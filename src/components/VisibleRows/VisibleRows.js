import VisibleRowsStyles from './VisibleRows.module.css'

const VisibleRows = ({ rowsPerPage, setRowsPerPage }) =>{

    const handleChange = (event) => {
        setRowsPerPage(parseInt(event.target.value))
    }

    return(
        <>
            <select value={rowsPerPage} onChange={handleChange}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </>
    )
}

export default VisibleRows;