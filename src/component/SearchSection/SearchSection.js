import { useContext } from "react"
import { SearchContext } from "../../contexts/SearchContext"
import KeywordUrlInput from "../KeywordUrlInput/KeywordUrlInput"
import SearchEngines from "../SearchEngines/SearchEngines"
import getData from "../../service/getData"
import './SearchSection.css'

const SearchSection = () => {
    const {keyword, url, setResult, setLoading, engineToUse} = useContext(SearchContext)
    const resultUrl = 'http://localhost:3001/api/v1/seo/results'
    
    const handleSearch = (keyword, url, engine) => {
        setLoading(true)
        const formattedKeyword = keyword.replaceAll(' ', '+')

        let results = {}
        let promises = []

        engine.forEach(element => {
            promises.push(
                getData(resultUrl, {
                    num: 50,
                    q: formattedKeyword,
                    url,
                    on: element
                }).then(response => {
                    results[element] = response.data.message
                })
            )
        });

        Promise.all(promises).then(() => {
            setResult(results)
            setLoading(false)
        })
    }

    return (
        <div className='search-section'>
            <KeywordUrlInput />
            <SearchEngines />
            <button
                className="go-button"
                onClick={() => handleSearch(keyword, url, engineToUse)}
                disabled={engineToUse.length === 0}>Search</button>
        </div>
    )
}

export default SearchSection