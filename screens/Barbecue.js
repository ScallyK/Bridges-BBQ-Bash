import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Judges from '../screens/Judges';

class Barbecue extends React.Component {
    
    render(){
      const { navigate } = this.props.navigation;
     
        return (
          
          <View style={styles.header}>
            <Text style={styles.header_text}>Barbecue Showdown</Text>

            <Text style={styles.main_text}> Come and our main event! 
            The state championship BBQ cook-off includes 200+ teams 
            of grilling experts competing to take home up to $65,000 
            in prize money! </Text>

            <Text style={styles.time_text}> Awards Announcement: 6:00pm-8:00pm</Text>

            <TouchableOpacity onPress={() => navigate('Judges')}>
              <Text style={styles.judge_text}> 
              Judging Schedule: 
              Judges tap here for 
              check in times!</Text>
            </TouchableOpacity>


            <Image
            style={{ width: 119, height: 233.3,  justifyContent: 'right', bottom: 0, position: 'absolute' }}
            source={require('../assets/images/scroll3.jpg')} />

            <Image
            style={{ width: 119, height: 233.3,  justifyContent: 'right', right: 200, bottom: 0, position: 'absolute' }}
            source={require('../assets/images/bbqscreen.jpg')} />

            <Image
            style={{ width: 119, height: 233.3,  justifyContent: 'right', left: 201, bottom: 0, position: 'absolute' }}
            source={require('../assets/images/scroll1.jpg')} />

            <Image
            style={{ width: 119, height: 233.3,  justifyContent: 'right', left: 300, bottom: 0, position: 'absolute' }}
            source={require('../assets/images/scroll2.jpg')} />





            </View>

               )

        }
    }

    const styles = StyleSheet.create({
        header: {
          flex: 1,
          flexDirection: 'column',
          alignSelf: 'stretch',
          paddingTop: 20,
          paddingBottom: 5,
          backgroundColor: '#f3f3f3'
        },
        main_text: {
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center'
        },
        time_text: {
          fontWeight: 'bold',
          fontSize: 15,
          textAlign: 'left',
          color: 'red',
          paddingTop: 20
      },
      judge_text: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 70
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
      });

      const MainNavigator = createStackNavigator({
        Barbecue: { screen: Barbecue },
        Judges: { screen: Judges },
      }, {
        intialRouteName: 'Barbecue',
        
        headerMode: 'none'
      });
      
      const App = createAppContainer(MainNavigator);
      export default App