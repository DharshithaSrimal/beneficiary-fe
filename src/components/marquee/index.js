const MarqueeText = ({ text }) => {
    return <div style={{ margin: 10, padding: 10, background: '#F8DBA3', minWidth: '20vw', borderRadius: '1em', textAlign: 'center' }}>
        <h5 style={{ margin: 0, paddingLeft: 15, paddingRight: 15, color: '#344966' }}>{text}</h5>
    </div>
}

export default MarqueeText;