import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen =()=>{
    return(
        <View>
            <SearchBar/>
            <Text>this is search screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({

})

export default SearchScreen