import { ScrollView, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { learnBackgroundColor } from "../src/styles/learnBackgroundColors";
import GradientText from "../src/styles/gradientText";
import { feedHeadingBackground } from "../src/styles/feedStyles/feedColors";
import MovingIcon from "../src/components/movingIcon";
import { backgroundColor } from "../src/styles/backgroundColors";
import { iconColors } from "../src/styles/feedStyles/feedColors";
import Header from "../src/components/feedComponents/header";
import { lineColor } from "../src/styles/feedStyles/feedColors";

function TOS() {
    return(
        <LinearGradient
        colors={['black']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        {/* <SafeAreaView> */}
        <View style={{marginTop:'8%'}}>
            <Header onFeedPage={15}/>
        </View>
        {/* </SafeAreaView> */}
        <ScrollView>
            <View style={{marginBottom:'60%'}}>
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MovingIcon/>
                        <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
                            CampusCrush
                        </GradientText>  
                    </View>                     
                    <Text style={styles.firstSectionHeading}>What are the CampusCrush Terms of Service?</Text>
                    <Text style={styles.body}>
                        I don't know yet.
                    </Text>
                    

                </View>



            </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    campusCrush: {
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'white',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 3,
        marginBottom: '0%'
      },
    section:{
        // marginTop: '4%',
        marginLeft: '4%',
        marginRight: '4%',
    },
    body:{
        fontSize: 20,
        marginBottom: '1%',
        color: iconColors
    },
    bulletPoint: {
        marginLeft: '5%',
        fontSize: 20,
        marginBottom: '1%',
        color:iconColors,
        marginTop: '1%'
    },
    firstSectionHeading:{
        fontSize: 25,
        marginBottom: '1%',
        marginTop: '1%',
        fontWeight: 'bold',
        color:'#DBDBDB',
        fontFamily: 'Arial Rounded MT Bold'
    },
    sectionHeading:{
        fontSize: 25,
        marginBottom: '1%',
        marginTop: '5%',
        fontWeight: 'bold',
        color:'#DBDBDB',
        fontFamily: 'Arial Rounded MT Bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginTop: 20, 
        marginBottom: 60, 
        marginLeft: '10%',
        marginRight: '10%'
      },
      next: {
        backgroundColor: 'transparent',
        padding: 7,
        height: 40,
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 10,
      },
      buttonFont: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
      }
})

export default TOS;