import React, { useState} from 'react'
import {StyleSheet, Text ,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi,results]=useResults()
    const filterResultsByPrice=(price)=>{
        return results.filter(results=>{
            return results.price==price
        })
    }
    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={()=>searchApi(term)} />
            <ScrollView>
            <ResultsList title='Cost Effective'  results={filterResultsByPrice('$')}/>
            <ResultsList title='Bit Pricier'  results={filterResultsByPrice('$$')}/>
            <ResultsList title='Big Spendor'  results={filterResultsByPrice('$$$')}/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
})

export default SearchScreen