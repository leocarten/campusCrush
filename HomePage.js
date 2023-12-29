// import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import GradientText from './screens/src/styles/gradientText';
// import { AntDesign } from '@expo/vector-icons'; 
// import UserInput from './screens/src/components/userInput';

// // https://icons.expo.fyi/Index
// // icons ^^ !

// const HomePageComponent = () => {
//   return (
//     <LinearGradient
//       colors={['#ef9d9d', '#ef78a8', '#9d5594']}
//       style={styles.container}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}>
//       <Text style={styles.firstText}>[Icon]</Text>
//       <View style={styles.icon} />
//       <Text style={styles.welcome}>Welcome to </Text>
//       <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
//         CampusCrush
//       </GradientText>
//       <Text style={styles.missionStatement}>
//         The app that <Text style={styles.supercharge}>supercharges</Text> how you meet, chat, and interact with others!
//       </Text>

//       <UserInput/>

//       <TouchableOpacity style={styles.create} onPress={() => console.log('create')}>
//         <Text style={styles.buttonFont}>Create Account <AntDesign name="adduser" size={22} color="black" /></Text>
//       </TouchableOpacity>

//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'flex-start', 
//       alignItems: 'center', 
//       // backgroundColor: '#fff'
//     },
//     buttonText1: {
//       textAlign: 'center',
//       color: '#4C64FF',
//       padding: 15,
//       marginLeft: 1,
//       marginRight: 1,
//       width: 198
//   },
//     firstText: {
//       marginTop: '40%',
//       fontSize: 20,
//       fontWeight: 'bold',
//       color: 'black',
//     },
//     welcome: {
//       fontSize: 28,
//       fontWeight: 'bold',
//       color: 'black',
//     },
//     campusCrush: {
//       fontSize: 38,
//       fontWeight: 'bold',
//       color: 'black',
//     },
//     icon: {
//       width: 50,
//       height: 50,
//       backgroundColor: 'black',
//       marginBottom: '10%',
//     },
//     missionStatement: {
//       marginTop: '5%',
//       fontSize: 24,
//       color: 'black',
//       marginHorizontal: '3%',
//       marginBottom: '45%',
//     },
//     supercharge: {
//       fontStyle: 'italic',
//       textShadowColor: 'rgba(0, 0, 0, 0.5)',
//       textShadowOffset: {width: -1, height: 1},
//       textShadowRadius: 3,
//     },
//     login: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'transparent',
//       borderRadius: 10,
//       padding: 5,
//       height: 40,
//       borderWidth: 2,
//       borderColor: 'black',
//       width: '60%',
//       marginBottom: '6%'
//     },
//     create: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'transparent',
//       borderRadius: 10,
//       padding: 5,
//       height: 40,
//       borderWidth: 2,
//       borderColor: 'black',
//       width: '60%',
//     },
//     buttonFont: {
//       fontSize: 22,
//       fontWeight: '400',
//     }
//   });

// export default HomePageComponent;
