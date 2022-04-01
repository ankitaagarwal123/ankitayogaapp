import { Audio } from 'expo-av'
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, Image, ImageBackground,ScrollView  } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";



export default class Music extends Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://cdn.pixabay.com/download/audio/2021/11/11/audio_6aa9f66065.mp3?filename=ambiant-relax-sounds-10621.mp3', },
      { shouldPlay: true }
    );
  };

  playSound2 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://cdn.pixabay.com/download/audio/2021/11/08/audio_42f63ad575.mp3?filename=drifting-at-432-hz-unicorn-heads-10507.mp3', },
      { shouldPlay: true }
    );
  };

  playSound3 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://cdn.pixabay.com/download/audio/2021/10/15/audio_d35d3f86a6.mp3?filename=rhythmic-meditation-for-energy-rejuvination-9483.mp3', },
      { shouldPlay: true }
    );
  };


  playSound4 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://cdn.pixabay.com/download/audio/2021/11/19/audio_1868c75809.mp3?filename=padmasambava-10948.mp3', },
      { shouldPlay: true }
    );
  };


  playSound5 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://cdn.pixabay.com/download/audio/2021/11/20/audio_149ed16bc3.mp3?filename=starlight-meditation-10986.mp3', },
      { shouldPlay: true }
    );
  };


  playSound6 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://cdn.pixabay.com/download/audio/2021/05/01/audio_9125683c48.mp3?filename=magnifico-mantra-om-8d-musica-para-transcender-som-para-meditar-mantra-renovador-de-energias-4224.mp3', },
      { shouldPlay: true }
    );
  };

    playSound7 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://cdn.pixabay.com/download/audio/2021/10/06/audio_45c340a41d.mp3?filename=free-will-9078.mp3', },
      { shouldPlay: true }
    );
  };

  stopSound = async () => {
    await Audio.setIsEnabledAsync(false)
    await Audio.setIsEnabledAsync(true)
  }

  render() {
    return (
      <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
        <SafeAreaView style={styles.droidSafeArea} />
                <ScrollView style={styles.container}>

        <TouchableOpacity
          onPress={this.stopSound}
          style={{
            justifyContent: 'center',
            borderWidth: 2,
            alignSelf: 'center',
            marginTop: 40,
            width: 200,
            height: 50,
          }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 15,
            textAlign: 'center',
            color: "white"
          }}>Stop Music</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            this.playSound();
          }}>
          <Text style={styles.buttonText1}>Ambiant Relax Sounds</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.playSound2();
          }}>
          <Text style={styles.buttonText1}>Drifting at 432 Hz - Unicorn Heads</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.playSound3();
          }}>
          <Text style={styles.buttonText1}>Energy Rejuvination</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.playSound4();
          }}>
          <Text style={styles.buttonText1}>Padmasambava</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.playSound5();
          }}>
          <Text style={styles.buttonText1}>Starlight Meditation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.playSound6();
          }}>
          <Text style={styles.buttonText1}>Magnifico Mantra OM 8D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.playSound7();
          }}>
          <Text style={styles.buttonText1}>Free Will</Text>
        </TouchableOpacity>
</ScrollView>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  button1: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 60,
    width: 300,
    height: 50,
    borderColor: "white"
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 60,
    width: 300,
    height: 50,
    borderColor: "white"
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 70,
    width: 360,
    height: 50,
  },
  buttonText1: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: "white"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
});
