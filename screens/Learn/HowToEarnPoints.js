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

function HowToEarnPoints() {
    return(
        <LinearGradient
        colors={['black']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        {/* <SafeAreaView> */}
        <View style={{marginTop:'8%'}}>
            <Header onFeedPage={12}/>
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
                    <Text style={styles.firstSectionHeading}>What are CampusCrush tokens?</Text>
                    <Text style={styles.body}>
                        CampusCrush tokens are your ticket to supercharge your in-app experience! With these tokens, you're not just a user, you're an integral part of the app's vibrant community. Use tokens to customize your experience, from rising to the top of other users' feeds, going on in-app blind dates, to unlocking exclusive perks and features. CampusCrush tokens can only be redeemed in-app, so get ready to ignite the fun! 
                    </Text>

                </View>

                <View style={styles.section}>                    
                    <Text style={styles.sectionHeading}>How can I earn CampusCrush tokens?</Text>
                    <Text style={styles.body}>
                    CampusCrush tokens are acquired through your engagement with the app and reaching specific milestones in your CampusCrush journey. For instance:
                    </Text>
                    <Text style={styles.bulletPoint}>
                        1. Starting your first conversation <Text>(+25 tokens)</Text>
                    </Text>
                    <Text style={styles.bulletPoint}>
                        2. Becoming a verified user <Text>(+50 tokens)</Text>
                    </Text>
                    <Text style={styles.bulletPoint}>
                        3. Fill in 100% of your profile <Text>(+100 tokens)</Text>
                    </Text>
                    <Text style={styles.bulletPoint}>
                        4. Start a new conversation with a new user each day for 7 days straight <Text>(+100 tokens)</Text>
                    </Text>
                    <Text style={styles.body}>
                        There are many other ways to earn CampusCrush tokens, but discovering them is part of the fun!
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

export default HowToEarnPoints;