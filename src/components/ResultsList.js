import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={results => results.id}
                data={results}
                renderItem={({ item }) => { return <ResultsDetail results={item}/> }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginBottom:10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:5
    }
})

export default ResultsList