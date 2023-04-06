
import addToDoStyles from './addToDoStyles.module.css'
import { useEffect, useState, useRef } from 'react';

const AddToDo = ({ tableData, setTableData, refreshBtn }) => {
    const [inputData, setInputData] = useState('');

    const inputRef= useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    }, [inputData, inputRef])



    const onSubmitToDo = (e) => {
        e.preventDefault();
        const id = tableData.length + 1;

        let lastUserObj = tableData.slice(-1);
        let lastUserObjId = lastUserObj[0].userId;
        let lastUserId = tableData.filter(data => data.userId === lastUserObjId);
        let newUserId = lastUserObjId + 1


        if (inputData != '' && inputData.length >= 3) {
            
            let newData = {
                id: id,
                userId: lastUserId.length < 20 ? lastUserObjId : newUserId,
                title: inputData,
                completed: false
            }
            setTableData((prevState) => [
                ...prevState,
                newData
            ])

            alert("Task submitted succesfully")
            setTimeout(()=>{
                
                setInputData("")
                
            }, 500)
            
            

        } else {
            alert('Please write a valid task')
        }
        
    }
    return (
        <div className={addToDoStyles.container}>
            <form onSubmit={onSubmitToDo}>
                <input type="text" ref={inputRef} className={addToDoStyles.input} onChange={(e) => setInputData(e.target.value)} value={inputData} />
                <button type='submit' className={addToDoStyles.button}>Add to the list</button>
            </form>
            
            
            
        </div>
        
    )
}

export default AddToDo;