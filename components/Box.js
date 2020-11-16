import React from 'react';
import {View, StyleSheet} from 'react-native';

class Box extends React.Component{
    render() {
        return(
            <View style={styles.main_container}>
                <View style={{flex: 1, backgroundColor: 'red'}}></View>
                <View style={{flex: 1, backgroundColor: 'green'}}></View>
                <View style={{flex: 1, backgroundColor: 'blue'}}></View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: 'yellow'
    }
})
export default Box