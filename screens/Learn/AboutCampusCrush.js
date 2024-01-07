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
function AboutCampusCrush() {
    const navigation = useNavigation();

    const lastPage = () => {
        navigation.navigate('Welcome');
    };

    const nextPage = () => {
        navigation.navigate('Welcome');
    }
    return(

        <ScrollView style={styles.all}>
            <SafeAreaView>

                <View >
                    <View style={styles.section}>
                    <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
                    CampusCrush
                    </GradientText>                       
                     <Text style={styles.sectionHeading}>What is CampusCrush?</Text>
                        <Text style={styles.body}>
                            Discover a whole new way to connect with others using CampusCrush - our mobile app is your new go-to platform for meeting, chatting, and interacting with others. Whether you're searching for friends, partners, or more, CampusCrush has got you covered. Dive into our dynamic feed, spark conversations, and personalize your profile to showcase the real you. Elevate your experience with our unique points system – redeem perks from our in-app store to boost your odds of making meaningful connections.
                        </Text>
                        <Text style={styles.body}>
                            Our app offers:
                        </Text>
                        <Text style={styles.bulletPoint}> <Text style={{fontSize: 26}}>&#128140;</Text> Blind dates</Text>
                        <Text style={styles.bulletPoint}> <Text style={{fontSize: 26}}>&#129668;</Text> Match-making games</Text>
                        <Text style={styles.bulletPoint}> <Text style={{fontSize: 26}}>&#127919;</Text> Filter to find a connection for you</Text>
                        <Text style={styles.bulletPoint}>... add more as i expand out</Text>
                    </View>

                    <View style={styles.section}>                    
                     <Text style={styles.sectionHeading}>Is my data safe?</Text>
                    </View>

                    <View style={styles.section}>                    
                     <Text style={styles.sectionHeading}>How do I interact with the app?</Text>
                    </View>


                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.next} onPress={lastPage}>
                            <Text style={styles.buttonFont}><Entypo name="arrow-with-circle-left" size={26} color="white" /> Back </Text>
                        </TouchableOpacity>
                    </View>

                </View>
                </SafeAreaView>
            </ScrollView>

    );
}

const styles = StyleSheet.create({
    campusCrush: {
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 3,
        marginBottom: '5%'
      },
    all: {
        backgroundColor: feedHeadingBackground,

    },
    section:{
        marginTop: '4%',
        marginLeft: '4%',
        marginRight: '4%',
    },
    body:{
        fontSize: 20,
        marginBottom: '1%',
        color:'white'
    },
    bulletPoint: {
        marginLeft: '5%',
        fontSize: 20,
        marginBottom: '1%',
        color:'white'
    },
    sectionHeading:{
        fontSize: 25,
        marginBottom: '3%',
        fontWeight: 'bold',
        color:'white',
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

export default AboutCampusCrush;