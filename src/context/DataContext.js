import { createContext, useEffect, useState } from "react";


const DataContext = createContext();

export default DataContext;

export const DataProvider = ({ children }) => {

    const [parties, setParties] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredParties, setFilteredParties] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        if(isLoading) {
            getParties()
        }
    }, [isLoading, parties])


    useEffect(() => {
         searchParties(search)
    }, [search, parties]);
    

    const searchParties = (search) => {
        const filteredResults = parties.filter(party => party.name.toLowerCase().includes(search.toLowerCase()) || party.location.toLowerCase().includes(search.toLowerCase()) || party.description.toLowerCase().includes(search.toLowerCase()));

        setFilteredParties(filteredResults);
    }

      
    const getParties = async () => {
    try {
        let response = await fetch('/api/parties/')
        let data = await response.json()
        console.log('DATA ===> ', data)
        setParties(data)
        setIsLoading(false)
    } catch (error) {
        console.log(error.message)
    }
    }
    

    return (
            <DataContext.Provider value={{ parties, setParties, search, setSearch, filteredParties, setFilteredParties, isLoading }}>
                {children}
            </DataContext.Provider>
            )
}
