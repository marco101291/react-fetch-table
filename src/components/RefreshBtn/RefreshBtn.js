const RefreshBtn = ({refreshBtn}) =>{
    return(
        <div style={{display: 'flex', marginTop: 50, paddingBottom: 50, justifyContent: 'center'}}>
            <button onClick={refreshBtn} style={{fontSize: 16}}> Refresh</button >
        </div>
    )
}

export default RefreshBtn;

