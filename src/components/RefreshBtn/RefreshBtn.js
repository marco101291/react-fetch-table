const RefreshBtn = ({refreshBtn}) =>{
    return(
        <div style={{display: 'flex', marginTop: 50, paddingBottom: 80, justifyContent: 'center', }}>
            <button onClick={refreshBtn} style={{ fontSize: 16, border: '1px solid white',borderRadius: '10px', color: 'white', backgroundColor: 'transparent', width: 100, minHeight: 30, cursor: 'pointer' }}> Refresh</button >
        </div>
    )
}

export default RefreshBtn;

