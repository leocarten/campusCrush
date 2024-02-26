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

function AboutCampusCrush() {
    const navigation = useNavigation();

    const lastPage = () => {
        navigation.navigate('Welcome');
    };

    const nextPage = () => {
        navigation.navigate('Welcome');
    }
    return(
        <LinearGradient
        colors={[feedHeadingBackground]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        {/* <SafeAreaView> */}
        <View style={{marginTop:'8%'}}>
            <Header onFeedPage={8}/>
        </View>
        {/* </SafeAreaView> */}
        <ScrollView style={{marginBottom: '30%'}}>
            <View >
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MovingIcon/>
                        <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
                            CampusCrush
                        </GradientText>  
                    </View>                     
                    <Text style={styles.firstSectionHeading}>What is CampusCrush?</Text>
                    <Text style={styles.body}>
                        Discover a whole new way to connect with others using CampusCrush - our mobile app is your new go-to platform for meeting, chatting, and interacting with others. Whether you're searching for friends, partners, or more, CampusCrush has got you covered. Dive into our dynamic feed, spark conversations, and personalize your profile to showcase the real you. Elevate your experience with our unique points system and redeem perks from our in-app store to boost your odds of making meaningful connections.
                    </Text>

                </View>

                <View style={styles.section}>                    
                    <Text style={styles.sectionHeading}>What features does CampusCrush offer?</Text>
                    <Text style={styles.body}>
                        CampusCrush recognizes the value of your time. Our mission is to streamline your experience by facilitating meaningful real-world connections amidst your busy schedule. Through our innovative point system, you earn rewards as you engage with others on our platform. These points can be redeemed for exclusive CampusCrush items, enhancing your experience even further.
                    </Text>
                </View>

                <View style={styles.section}>                    
                    <Text style={styles.sectionHeading}>Is my data safe?</Text>
                    <Text style={styles.body}>
                        At CampusCrush, our utmost priority is the security and safety of our users' data. We employ robust designs and state-of-the-art technology to ensure that every user enjoys a meaningful and secure experience on our platform.
                    </Text>
                </View>

                <View style={styles.section}>                    
                    <Text style={styles.sectionHeading}>What is the point system, and how are they earned?</Text>
                    <Text style={styles.body}>
                    At CampusCrush, we firmly believe in rewarding users for their interactions. Our mission is to facilitate the expansion of social networks. By engaging with others on our platform, you earn valuable points that can be redeemed at our in-app store!
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
        color:iconColors
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

export default AboutCampusCrush;