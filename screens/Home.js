import * as React from 'react';
import { Animated, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { BlurView } from 'expo-blur';
import { Linking } from 'expo';



const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default class App extends React.Component {
  state = {
    fadeAnim1: new Animated.Value(0),
    fadeAnim2: new Animated.Value(0),
    fadeAnim3: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(
          this.state.fadeAnim1,
          {
            toValue: 1,
            duration: 10000
          }
        ),
        Animated.timing(
          this.state.fadeAnim1,
          {
            toValue: 0.5,
            duration: 5000
          }
        ),
        Animated.timing(
          this.state.fadeAnim2,
          {
            toValue: 1,
            duration: 10000
          }
        ),
        Animated.timing(
          this.state.fadeAnim2,
          {
            toValue: 0.5,
            duration: 5000
          }
        ),
        Animated.timing(
          this.state.fadeAnim3,
          {
            toValue: 1,
            duration: 10000
          }
        ),
        Animated.timing(
          this.state.fadeAnim3,
          {
            toValue: 0.5,
            duration: 5000
          })
      ]),
      {
        iterations: -1
      }
    ).start()
  }

  render() {
    return (
      <View style={styles.container}>

         {/* <Text style={styles.textStyle}>Welcome to the Bridges</Text>
        <Text style={styles.textStyle2}>2019 BBQ Bash Festival</Text> */}
        <Text style={styles.bottomText}>Hosted by the Bridges</Text>
        <Text style={styles.bottomText2}>Training Foundation</Text> 

        <Image 

        source={require('../assets/images/title.png')} 
        style={{
          
          bottom: 400, 
          left: 0,
          position: "absolute",
          zIndex: 1,
          height: 400,
          width: 412

          
          }}>

        </Image>

        <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('https://www.bridgestf.org/fundraising-campaign.html')}>
        
            <Text style={styles.bottomText3}>Become a Sponsor!</Text>  

        </TouchableOpacity>



        <TouchableOpacity style={styles.facebook} onPress={() => Linking.openURL('https://www.facebook.com/Bridges-Training-Foundation-LLC-554872957919857/')}>

              <Image style={{width: 30.5, height: 30.5,}} source={require('../assets/images/facebook.png')} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.twitter} onPress={() => Linking.openURL('https://www.facebook.com/Bridges-Training-Foundation-LLC-554872957919857/')}>

              <Image style={{width: 30.5, height: 30.5,}} source={require('../assets/images/twitter.png')} />

          </TouchableOpacity>



        <Animated.View

          style={{
            ...this.props.style,
            opacity: this.state.fadeAnim1,
          }}>

          <Image
            style={{ width: 685, height: 1023, bottom: -350, left: -10, justifyContent: 'center', position: 'absolute' }}
            source={require('../assets/images/bbq.jpg')} 
            blurRadius={4}/>

          <AnimatedBlurView
            tint="light"
            intensity={50}
            style={StyleSheet.absoluteFill} />

        </Animated.View>



        <Animated.View

          style={{
            ...this.props.style,
            opacity: this.state.fadeAnim2,
          }}>

          <Image
            style={{ width: 682, height: 1024, bottom: -350, left: -10, justifyContent: 'center', position: 'absolute' }}
            source={require('../assets/images/bbq2.jpg')} 
            blurRadius={4}/>

          <AnimatedBlurView
            tint="light"
            intensity={50}
            style={StyleSheet.absoluteFill} />

        </Animated.View>



        <Animated.View

          style={{
            ...this.props.style,
            opacity: this.state.fadeAnim3,
          }}>

          <Image
            style={{ width: 683, height: 1024, bottom: -350, left: -10, justifyContent: 'center', position: 'absolute' }}
            source={require('../assets/images/beer.png')} 
            blurRadius={4}/>

          <AnimatedBlurView
            tint="light"
            intensity={50}
            style={StyleSheet.absoluteFill} />

        </Animated.View>



      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  facebook: {
    width: 30.5,
    height: 30.5,
    top: 300,
    left: 300,
    zIndex:1,
  },
  twitter: {
    width: 30.5,
    height: 30.5,
    top: 270,
    left: 350,
    zIndex:1,
  },
  textStyle: {
    top: 20,
    left: 5,
    position: 'absolute',
    color: 'lightcoral',
    fontSize: 20,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    zIndex: 1
  },
  textStyle2: {
    top: 50,
    left: 5,
    position: 'absolute',
    color: 'lightcoral',
    fontSize: 20,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    zIndex: 1
  },
  bottomText: {
    bottom: 70,
    left: 5,
    position: 'absolute',
    color: 'black',
    fontSize: 15,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    zIndex: 1
  },
  bottomText2: {
    bottom: 50,
    left: 4,
    position: 'absolute',
    color: 'black',
    fontSize: 15,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    zIndex: 1
  },
  bottomText3: {
    bottom: 15,
    left: 2,
    position: 'absolute',
    fontSize: 15,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    zIndex: 1,
    color: 'dodgerblue'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
