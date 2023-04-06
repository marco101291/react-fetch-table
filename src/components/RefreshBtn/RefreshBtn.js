const RefreshBtn = ({refreshBtn}) =>{
    return(
        <div style={{display: 'flex', justifyContent: 'end', marginTop: 50, paddingBottom: 50, justifyContent: 'center' }}>
            <button onClick={refreshBtn} > Refresh</button >
        </div>
    )
}

export default RefreshBtn;

