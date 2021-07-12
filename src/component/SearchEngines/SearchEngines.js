import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import getData from '../../service/getData'
import './SearchEngines.css'

const SearchEngines = () => {
    const searchEnginesUrl = 'http://localhost:3001/api/v1/seo/searchEngines'
    const [allEngines, setAllEngines] = useState([])
    const { engineToUse, setEngineToUse } = useContext(SearchContext)

    const fetchData = async () => {
        const res = await getData(searchEnginesUrl)
        setAllEngines(res.data)
    }

    useEffect(() =>  {
        fetchData()
    }, [])

    const handleCheckboxChange = (e) => {
        const engineName = e.target.value

        if (engineToUse.includes(engineName)) {
            const newData = engineToUse.filter(en => en !== engineName)
            setEngineToUse(newData)
        } else {
            setEngineToUse([...engineToUse, engineName])
        }
    }

    const showAvaiableEngines = () => {
        if(allEngines.length === 0) {
            return <p>error loading avaiable search engines</p>
        }
        return (
            <div>
                {
                    allEngines.map((en, idx) => <div  className="search-engine" key={idx}>
                        <label>{en}</label>
                        <input
                            type="checkbox"
                            name={en}
                            value={en}
                            defaultChecked={idx===0}
                            onChange={handleCheckboxChange}/>
                    </div>) 
                }
            </div>
        )   
    }

    
    return (
        <div className="search-engine">
            <div>
                {showAvaiableEngines()}
            </div> 
        </div>
    )
}

export default SearchEngines