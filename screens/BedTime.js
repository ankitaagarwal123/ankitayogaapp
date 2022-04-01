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
} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { RFValue } from "react-native-responsive-fontsize";


export default function BedTime() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ScrollView contentContainerStyle={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
      <View style={{ flex: 0.5 }}>
        <Text style={styles.text1}>
 45-Minutes Bedtime Story for Adults
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
          <Text style={styles.text2}>
           Rainday Antiques from Headspace
          </Text>
          <Video
            ref={video}
            style={styles.video2}
            source={require('../assets/5min.mp4')}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
      </View>
    </ScrollView>
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
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
});
