import { useContext } from "react"
import { SearchContext } from "../../contexts/SearchContext"
import ResultItem from "../ResultItem/ResultItem"

const ResultPage = () => {
    const {result, loading} = useContext(SearchContext)
   
    if(loading) {
        return (
            <div style={{marginTop: '1.5em', fontSize: '2em'}}>loading...</div>
        )
    }
    if (result.length !== 0) {
        const resultKeys = Object.keys(result)

        return (
            <div style={{marginTop: "60px"}}>
                <h4>Occurence of the url in the first 50 results</h4>
                {
                    resultKeys.map((r, idx) =>
                        <ResultItem
                            key={idx}
                            engineName={r}
                            occurence={result[r]}/>)
                }
            </div>
        )
    } 
    return null
}

export default ResultPage