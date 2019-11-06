import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Mapso from '../screens/Mapso';
import FloorPlan from '../screens/FloorPlan';

class MapView extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>

        <Text style={styles.floor_plan}>Floor Plan</Text>
        
    
      <TouchableOpacity onPress={() => navigate('Floor')}>
        <Image 
          style={{ width: 200, height: 920, justifyContent: 'left', position: 'absolute', }}
          source={require('../assets/images/floorplan.png')} 
          blurRadius={5} />
          
      </TouchableOpacity>

      <Text style={styles.maps}>Maps</Text>
        
    
      <TouchableOpacity onPress={() => navigate('Mapso')}>
        <Image 
          style={{ width: 215, height: 900, justifyContent: 'right', position: 'absolute', left: 200 }}
          source={require('../assets/images/maps.png')} 
          blurRadius={5} />
          
      </TouchableOpacity>
  

      </View>
    );
   }
 
 }
 const styles = StyleSheet.create( {
  header:  {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: '#f3f3f3'
   },
   maps:  {
    fontWeight: 'bold',
    fontSize: 40,
    position: 'absolute',
    justifyContent: 'right',
    top: 350,
    left: 260,
    zIndex: 1
   },
  floor_plan:  {
    fontWeight: 'bold',
    fontSize: 40,
    position: 'absolute',
    justifyContent: 'left',
    top: 350,
    left: 35,
    zIndex: 1
  }  
 }

);



const MainNavigator = createStackNavigator({
  MapsList: { screen: MapView },
  Mapso: { screen: Mapso },
  Floor: { screen: FloorPlan },
}, {
  intialRouteName: 'MapsList',
  
  headerMode: 'none'
});

const App = createAppContainer(MainNavigator);
export default App