import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  Linking,
} from 'react-native';
import Music from './Music';
import Meditation from './Meditation';
import BedTime from './BedTime';
import firebase from 'firebase';
//import firebase from "firebase/compat/app"

export default class Home extends Component {
  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = () => {
    let theme;
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', (snapshot) => {
        theme = snapshot.val().current_theme;
        this.setState({ light_theme: theme === 'light' });
      });
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.backgroundImage}>
        <View>
          <TouchableOpacity
            style={styles.musicbutton}
            onPress={() => this.props.navigation.navigate('Music')}>
            <Text style={styles.musictext}>Relaxation Music</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.musicbutton}
            onPress={() => this.props.navigation.navigate('Meditation')}>
            <Text style={styles.musictext}>Meditation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.musicbutton}
            onPress={() => this.props.navigation.navigate('BedTime')}>
            <Text style={styles.musictext}>BedTime</Text>
          </TouchableOpacity>
                    <TouchableOpacity
            style={styles.musicbutton}
            onPress={ ()=> Linking.openURL('https://pages.donately.com/breathe/campaigns') } >
            <Text style={styles.musictext}>Donate</Text>
          </TouchableOpacity>
            <TouchableOpacity
            style={styles.musicbutton}
            onPress={ ()=> Linking.openURL('https://discord.gg/PRXbPdRQst') } >
            <Text style={styles.musictext}>Join Discord</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  musicbutton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 40,
    width: 230,
    height: 50,
  },

  musictext: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
