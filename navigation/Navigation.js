import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import Search from '../components/Search';
import FilmDetail from '../components/FilmDetail'
import Favorites from '../components/Favorites'
import { StyleSheet, Image } from 'react-native'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const FavoriteStackNavigator = createStackNavigator({
    Favorite: {
        screen: Favorites,
        navigationOptions: {
            title: 'Mes Favoris'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const MoviesTabNavigator = createBottomTabNavigator({
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../images/ic_search.png')}
                    style={styles.icon} />
            }
        }
    },
    Favorites: {
        screen: FavoriteStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../images/ic_favorite.png')}
                    style={styles.icon} />
            }
        }
    }
},
    {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false,
            showIcon: true
        }
    }
)

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default createAppContainer(MoviesTabNavigator)