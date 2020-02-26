import React from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'
import {withNavigation} from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={results => results.id}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('ResultScreen',{id:item.id})}>
                            <ResultsDetail results={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default withNavigation(ResultsList)