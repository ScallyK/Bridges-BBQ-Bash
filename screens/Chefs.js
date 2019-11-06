import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Linking} from 'react';


export default class Header extends React.Component {
    
    render() 
    
     {
        return (
          <View style={styles.header}>
            <Text style={styles.header_text}>Expert Chefs</Text>

           

            <TouchableOpacity style={styles.bottomText1} onPress={() => Linking.openURL('http://www.chefplum.com/about.html')}>

                <Text 
                style={styles.time_text1}>

                Chef Plum: 

                </Text>

                <Text 
                style={styles.time_text2}>

                Culinary Expert 

                </Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={styles.bottomText2} onPress={() => Linking.openURL('https://twitter.com/chefkenziemills')}>

            <Text 
                style={styles.time_text3}>

                Kinzie Mills: 

                </Text>

                <Text 
                style={styles.time_text4}>

                Top Chef Jr. 

                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('https://www.facebook.com/MicheleRagussis')}>

            <Text 
                style={styles.time_text5}>

                Michele Ragussis: 

                </Text>

                <Text 
                style={styles.time_text6}>

                Food Network Star 

                </Text>

            </TouchableOpacity>

    



            <Image
            style={{ justifyContent: 'center', bottom: 80, position: 'absolute' }}
            source={require('../assets/images/chefs.png')} />



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
            textAlign: 'center',
            top: 20
        },
        time_text1: {
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          color: 'black',
          padding: 8,
          top: 70,
          left: 50,
          fontFamily: 'SFPRO'
      },
      time_text2: {
        fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          color: 'black',
          padding: 8,
          top: 80,
          left: 50,
          fontFamily: 'SFPRO'
    },
    time_text3: {
        fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          color: 'black',
          padding: 8,
          top: 175,
          left: 50,
          fontFamily: 'SFPRO'
  },
  time_text4: {
      fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        padding: 8,
        top: 185,
        left: 50,
        fontFamily: 'SFPRO'
},
time_text5: {
    fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      padding: 8,
      top: 290,
      left: 50,
      fontFamily: 'SFPRO'
},
time_text6: {
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
  color: 'black',
  padding: 8,
  top: 300,
  left: 50,
  fontFamily: 'SFPRO'
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