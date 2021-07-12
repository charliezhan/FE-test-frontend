import SearchSection from './component/SearchSection/SearchSection';
import ResultPage from './component/ResultPage/ResultPage';
import { useState } from 'react';
import { SearchContext } from './contexts/SearchContext';

import './App.css';

function App() {
  const [keyword, setKeyword] = useState('online title search')
  const [url, setUrl] = useState('infotrack.com.au')
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [engineToUse, setEngineToUse] = useState(['google'])

  return (
    <div className="App">
      <h1>
        Company Ranking Check
      </h1>
      <SearchContext.Provider
        value={{
          keyword,
          setKeyword,
          url,
          setUrl,
          result,
          setResult,
          loading,
          setLoading,
          engineToUse,
          setEngineToUse}}>
        <SearchSection />
        <ResultPage />
      </SearchContext.Provider>
        
    </div>
  );
}

export default App;
