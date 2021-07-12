import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import './KeywordUrlInput.css'

function KeywordUrlInput() {
    const {keyword, setKeyword, url, setUrl, setResult} = useContext(SearchContext)
    
    const handleKeywordChange = (e) => {
        setKeyword(e.target.value)
        setResult([])
    }

    const handleUrlChange = (e) => {
        setUrl(e.target.value)
        setResult([])
    }

    return (
        <div className="key-url-wrapper">
            <div className="keyword-url">
                <label>Keyword: </label>
                <input
                    type="text"
                    value={keyword} 
                    onChange={handleKeywordChange}
                />
            </div>
            <div className="keyword-url">
                <label>Company url: </label>
                <input
                    type="text"
                    value={url}
                    onChange={handleUrlChange}
                />
            </div>
        </div>
    );
}

export default KeywordUrlInput;