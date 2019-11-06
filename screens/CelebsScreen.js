import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Linking } from 'expo';

import Janes from '../screens/Janes';
import Haze from '../screens/Haze';
import Chefs from '../screens/Chefs';
import Guests from '../screens/Guests';


class Header extends React.Component {
    
    render() 
    
     {
      const { navigate } = this.props.navigation;
        return (
          <View style={styles.header}>
            <Text style={styles.header_text}>Special Guest Appearences</Text>
            

                <View  style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 50, paddingTop: 75}}>
                <Text style={{paddingRight: 15}}>Calamity Janes</Text> 

              <TouchableOpacity onPress={() => navigate('Janes')}>
                <Image source={require('../assets/images/janes.png')}               
                    style={{width: 100, height: 100,  }} />
              </TouchableOpacity>


                      <View>

                        <TouchableOpacity style={styles.infoText} onPress={() => Linking.openURL('http://calamityjanesband.com/')}>
        
                          <Text style={styles.infoText}>CalamityJanes</Text>  

                        </TouchableOpacity>

                          <Text style={{paddingLeft: 100}}>Tap Pic for more</Text>

                      </View>

                      {/* add onpress to image or text that links to more information about celebrity. I.E: pressing celeb1 image or text brings you to description page */}

                </View>



                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 50}}>
                <Text style={{paddingRight: 15 }}>The HAZE</Text>

                <TouchableOpacity onPress={() => navigate('Haze')}>
                <Image source={require('../assets/images/haze.jpg')}            
                    style={{width: 100, height: 100, }} />
              </TouchableOpacity>

                      <View>

                      <TouchableOpacity style={styles.infoText} onPress={() => Linking.openURL('https://www.facebook.com/TheHazeBand')}>
        
                        <Text style={styles.infoText}>TheHazeBand</Text>  

                      </TouchableOpacity>

                      <Text style={{paddingLeft: 100}}>Tap Pic for more</Text>

                      </View>

                  
                </View>



                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 50 }}>
                <Text style={{marginRight: 15 }}>Expert Chefs</Text>

                <TouchableOpacity onPress={() => navigate('Chefs')}>
                <Image source={require('../assets/images/foodnetwork.png')}                
                    style={{width: 100, height: 100,  }} />
              </TouchableOpacity>

                      <View>
                        <Text style={{paddingLeft: 100}}>See links within</Text>
                        <Text style={{paddingLeft: 100}}>Tap Pic for more</Text>
                      </View>

                  
                </View>



                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 50 }}>
                <Text style={{marginRight: 0 }}>Demonstrations</Text>

                <TouchableOpacity onPress={() => navigate('Guests')}>
                <Image source={require('../assets/images/microphone.png')}                
                    style={{width: 100, height: 100,  }} />
              </TouchableOpacity>

                      <View>
                      <Text style={{paddingLeft: 100}}>See links within</Text>
                      <Text style={{paddingLeft: 100}}>Tap Pic for more</Text>
                      </View>

                  
                </View>


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
       celebrityImage1: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        marginTop: 30,
        marginLeft: 10,
      },
      celeb1Text: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        //paddingTop: 140,
        paddingLeft: 170,
        //paddingBottom: 5,
      },
      celebrityImage2: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        marginTop: 40,
        marginLeft: 10,
      },
      celeb2Text: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        //paddingTop: 140,
        paddingLeft: 170,
        //paddingBottom: 5,
      },
      celebrityImage3: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        marginTop: 50,
        marginLeft: 10,
      },
      celeb3Text: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        //paddingTop: 140,
        paddingLeft: 170,
        //paddingBottom: 5,
      },
      infoText: {
        color: 'dodgerblue',
        bottom: 10,
        fontSize: '15',
        paddingLeft: 50
      },
      header_text:  {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'left'
      }  
     }
   
    );

    const CelebsNavigator = createStackNavigator({
      CelebsList: { screen: Header},
      Janes: { screen: Janes },
      Haze: { screen: Haze },
      Chefs: { screen: Chefs },
      Guests: { screen: Guests },
    }, {
      intialRouteName: 'CelebsList',
      
      headerMode: 'none'
    });
    
    const App = createAppContainer(CelebsNavigator);
    export default App