import * as React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Meditation() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ImageBackground
      source={require('../assets/bg3.png')}
      style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={{ flex: 0.5 }}>
          <Text style={styles.text1}>
            5-Minute Meditation You Can Do Anywhere
          </Text>
          <Video
            ref={video}
            style={styles.video}
            source={require('../assets/5min.mp4')}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>

        <View style={{ flex: 0.5 }}>
          <View>
            <Text style={styles.text2}>10-Minute Meditation For Anxiety</Text>
            <Video
              source={require('../assets/10min.mp4')}
              ref={video}
              style={styles.video2}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
  },
  text1: {
    marginTop: 5,
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  text2: {
    marginTop: 5,
  },
  video2: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    marginTop: 10,
  },
  buttons2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
