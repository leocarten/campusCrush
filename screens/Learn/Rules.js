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

function Rules() {
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
                    <Text style={styles.firstSectionHeading}>What are the CampusCrush Rules?</Text>
                    <Text style={styles.body}>
                    At CampusCrush, our mission is to foster a safe and welcoming community where all users can connect and have fun. We want everyone to enjoy their experience on our platform. To ensure this, we ask all users to adhere to the following guidelines:                    </Text>
                    <Text style={styles.bulletPoint}>
                        <Text style={{fontWeight: '700', color: '#C7C7C7' }}>1. Respect Others: </Text>Treat fellow users with kindness and respect. Harassment, hate speech, bullying, or any form of discriminatory behavior will not be tolerated.
                    </Text>
                    <Text style={styles.bulletPoint}>
                        <Text style={{fontWeight: '700', color: '#C7C7C7' }}>2. Keep it Clean: </Text> Help us maintain a friendly environment by refraining from posting inappropriate content, including but not limited to nudity, violence, or graphic imagery.
                    </Text>
                    <Text style={styles.bulletPoint}>
                        <Text style={{fontWeight: '700', color: '#C7C7C7' }}>3. Be Honest: </Text> Represent yourself truthfully and accurately. Do not impersonate others or engage in deceptive practices.
                    </Text>
                    <Text style={styles.bulletPoint}>
                        <Text style={{fontWeight: '700', color: '#C7C7C7' }}>4. Respect Privacy: </Text> Protect the privacy of yourself and others. Do not share personal information.
                    </Text>
                    <Text style={styles.bulletPoint}>
                        <Text style={{fontWeight: '700', color: '#C7C7C7' }}>5. Report Concerns: </Text> If you encounter any behavior that violates our guidelines or makes you feel uncomfortable, please report it to us immediately.
                    </Text>

                    <Text style={styles.sectionHeading}>What if I break CampusCrush rules?</Text>
                    <Text style={styles.body}>
                    At CampusCrush, we prioritize the safety and well-being of our community members. Violating our app guidelines undermines this commitment and can result in account termination and/or account banishment.                    
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

export default Rules;