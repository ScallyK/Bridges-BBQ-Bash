import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import CupcakeWar from '../screens/CupcakeWar';
import Barbecue from '../screens/Barbecue';
import GoatYoga from '../screens/GoatYoga';
import PerformingEvents from '../screens/PerformingEvents';
import Raffles from '../screens/Raffles';
import List from '../screens/List';

import { TouchableOpacity } from 'react-native-gesture-handler';


class EventsListView extends Component {

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'black',
        height: 1,
      }}
    />
  );

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.header}>
        <Text style={styles.header_text}>Events List</Text>


        <FlatList
          style={{ top: 100,  }}
          data={[
            {
              key: 'Barbecue',
              title: 'BBQ Cook Off',
            },
            {
              key: 'GoatYoga',
              title: 'Goat Yoga',
            },
            {
              key: 'CupcakeWar',
              title: 'Cupcake War',
            },
            {
              key: 'Raffle',
              title: 'Raffles and Prizes',
            },
            {
              key: 'Bands',
              title: 'Performing Events',
    
            },
      
            
          ]}

          ItemSeparatorComponent={this.renderSeparator}

        renderItem={({ item }) => 

        (<TouchableOpacity onPress={() => {navigate(item.key)}} title={item.title}> 

          <Text style={styles.list_text}> {item.title} </Text> 

        </TouchableOpacity>)}


        />

          <TouchableOpacity onPress={() => navigate('List')}>
            <Text style={styles.full_list}>
              Tap Here For Full Events List
            </Text>
          </TouchableOpacity>

      </View>
    );

  }
}

{/* <Button onPress={() => {navigate(item.key)}} title={item.title} color={'black'}  /> */}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: '#f3f3f3'
  },
  full_list: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'SFPRO',
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  item: {
    padding: 20,
    fontSize: 20,
    height: 44,
  },
  list_text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'SFPRO',
  },
  title: {
    fontSize: 32,
  },
});


const EntryNavigator = createStackNavigator({
  EventsFooList: { screen: EventsListView },
  Barbecue: { screen: Barbecue },
  GoatYoga: { screen: GoatYoga },
  CupcakeWar: { screen: CupcakeWar },
  Raffle: { screen: Raffles },
  Bands: { screen: PerformingEvents },
  List: { screen: List },
}, {
  intialRouteName: 'EventsFooList',
  headerMode: 'none'
  
});

const App = createAppContainer(EntryNavigator);
export default App