import './ResultItem.css'

const ResultItem = ({ engineName, occurence }) => {
    const showResult = (result) => {
        if (result.length === 0){
            return <p>{0}</p>
        }
        return result.map((re, index) => <p key={index}>{re}</p>)
    }
    return (
        <div className="result-item-wrapper">
            <div className="engine-name">
                {engineName} :
            </div>
            <div className="occurence-detail">
                {showResult(occurence)}
            </div>
        </div>
      
    )
}

export default ResultItem