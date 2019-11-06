import React from 'react';
import { Animated, Image, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0), 
    
    
  };

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim, 
      {
        toValue: 1, 
        duration: 10000, 
      }
    ).start(); 
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View 
        style={{
          ...this.props.style,
          opacity: fadeAnim, 
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

class FadeInViewTwo extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0), 
    
    
  };
  

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim, 
      {
        toValue: 1, 
        duration: 10000, 
        delay: 1000,
      }
    ).start(); 
    
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View 
        style={{
          ...this.props.style,
          opacity: fadeAnim, 
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

class FadeInViewThree extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0), 
    
    
  };
  

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim, 
      {
        toValue: 1, 
        duration: 10000, 
        delay: 2000,
        
      }
    ).start(); 

    // Animated.timing(
    //   this.state.fadeAnim,{

    //     delay: 3000,
    //   }
    // ).stop();
  }


  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim, 
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}



export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        <FadeInView style={{ width: 685, height: 1023 }}>
            <BlurView tint="light" intensity={50}>
                <Image 
                style={{ width: 685, height: 1023 }} 
                source={require('../assets/images/bbq.jpg')} 
                />
            </BlurView>
        </FadeInView>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
         <FadeInViewTwo style={{ width: 682, height: 1022 }}>
            <BlurView tint="light" intensity={50}>
                <Image 
                style={{ width: 682, height: 1024 }} 
                source={require('../assets/images/bbq2.jpg')} 
                />
            </BlurView>
        </FadeInViewTwo>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
         <FadeInViewThree style={{ width: 410, height: 615 }}>
        <BlurView tint="light" intensity={50}>
                <Image 
                style={{ width: 410, height: 615 }} 
                source={require('../assets/images/beer.jpg')} 
                />
            </BlurView>
        </FadeInViewThree>
      </View>
    );
  }
}

