import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import MusicList from './src/screens/MusicList';

// links 
// https://github1s.com/devandres-tech/RN-Spotify-Clone-Redesigned/blob/main/screens/TrackPlayer.tsx

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <>
    <StatusBar
    
    
    />
      <MusicList />
    </>
  )
}

export default App

const styles = StyleSheet.create({})