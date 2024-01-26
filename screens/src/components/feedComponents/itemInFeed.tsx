import { Text, View, StyleSheet } from "react-native"
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
let windowHeightPercentage;
if(windowHeight < 700){
    windowHeightPercentage = ( (1-(.2)) * windowHeight);
}
else{
    windowHeightPercentage = ( (1-(.29)) * windowHeight);
}
console.log(windowHeight)
const pictureHeightPercentage = ( (1-(.59)) * windowHeight);
import { lineColor } from "../../styles/feedStyles/feedColors";
import { iconColors } from "../../styles/feedStyles/feedColors";
import { nameColor } from "../../styles/feedStyles/feedColors";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { feedHeadingBackground } from "../../styles/feedStyles/feedColors";
import GradientText from "../../styles/gradientText";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';

const isTablet = Platform.isPad.toString();
let containerWidth;
let pictureWidth;
if(isTablet === 'true'){
    containerWidth = '68%';
    pictureWidth = '68%';
}
else{
    containerWidth = '88%';
    pictureWidth = '85%';
}
var totalConsumedWidth = 0;
function renderInterestText(interest, index) {
    // simple conversion: 390 = 41, so we need about 10 per letter
    totalConsumedWidth += interest.length
    console.log(totalConsumedWidth)
    if( (windowWidth/10) >= totalConsumedWidth ){
        return <Text key={index} style={styles.interest}>{interest}</Text>
    }
    else{
        return null;
    }
}

const ItemInFeed = ({isVerified, Name, Age, Comp, Bio, Pictures, AppReason, Interests}) => {
    totalConsumedWidth = 0;
    let userWants;
    let comp;
    let verifiedIcon;

    if(isVerified === true){
        verifiedIcon = <Text><MaterialIcons name="verified" size={22} color="#30ADA7"/></Text>
    }

    if(AppReason === 1){
        userWants = <Text>A long-term partner &#10084;</Text>;
    }
    else if(AppReason === 2){
        userWants = <Text>A short-term partner &#128520;</Text>;
    }
    else if(AppReason === 3){
        userWants = <Text>To meet new people &#127760;</Text>;
    }
    else if(AppReason === 4){
        userWants = <Text>I'm not sure &#129304;</Text>;
    }
    else{
        userWants = <Text>I DON'T KNOW</Text>;
    }

    if(Comp >= 80){
        if(AppReason === 3 || AppReason === 4){
            comp = <Text style={styles.compatibility}>Match: {Comp}% &#129309; </Text>;
        }
        else{
            comp = <Text style={styles.compatibility}>Match: {Comp}% &#128150;</Text>;
        }
    }
    else{
        comp = "";
    }


    const navigation = useNavigation();

    const handleExpandPress = () => {
        console.log("Expanded profile for:", Name);
        navigation.navigate("PersonsProfile", { personName: Name, personAge: Age, personGoals: userWants, personBio: Bio });
    };

    return(
        <View style={styles.height}>
            <View style={styles.container}>

                <View style={styles.nameContainer}>
                    <Text style={styles.name}> {verifiedIcon} <Text style={{fontWeight: '700'}}>{Name}</Text>, <Text style={styles.age}>{Age}</Text></Text>
                    {comp} 
                </View>

                {/* Pictures */}
                <View style={styles.pictureContainer}>
                    <Text></Text>
                </View>

                {/* Expand */}
                <View style={styles.expandIconContainer}>
                    <TouchableOpacity onPress={handleExpandPress}>
                        <Text>
                            <FontAwesome name="expand" size={24} color='gray' />
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Div to either remove or send message! */}
                <View style={styles.profileContainer}>
                    <View style={styles.sendMessageContainer}>
                        <Text style={styles.bio} numberOfLines={1}>
                            <Text style={{fontWeight: '500'}}>I want:</Text> {userWants}
                        </Text>
                        <TouchableOpacity>
                            <GradientText colors={['#cc2b5e', '#753a88']}>
                                <FontAwesome name="send" size={28} style={styles.sendMessageIcon}/>
                            </GradientText>
                        </TouchableOpacity>                    
                    </View>

                    <View style={styles.bioContainer}>
                        <Text style={styles.bio} numberOfLines={2}>
                        <FontAwesome name="quote-left" size={16} color={iconColors} /> {Bio} <FontAwesome name="quote-right" size={16} color={iconColors} />
                        </Text>
                    </View>
                    <View style={styles.interestsContainer}>
                        {Interests.map((interest, index) => (
                            renderInterestText(interest, index)
                        ))}
                    </View>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    interest:{
        fontSize: 18,
        backgroundColor: 'transparent',
        padding: 4,
        height: 30,
        alignSelf: "flex-start",
        borderColor: iconColors,
        borderWidth: 0.5,
        borderRadius: 10,
        color: iconColors,
        marginLeft: '1%'
    },
    interestsContainer: {
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        flexDirection: 'row',
        justifyContent: "flex-start",
    },
    sendMessageIcon: {
        textShadowColor: 'blue',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1,
    },
    bioContainer:{
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%'
    },
    bio: {
        color: iconColors,
        fontSize: 18,
        fontFamily: "Arial Hebrew"
    },
    sendMessageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '2%', 
        alignItems: 'center', 
        backgroundColor: feedHeadingBackground
    },
    profileContainer: {
        flex: 1,
        backgroundColor: feedHeadingBackground,
        width: '100%',
        alignSelf: 'center', // Center horizontally
        marginTop: '2%',
        paddingTop: '3.5%',
        borderBottomEndRadius: 4,
        borderBottomLeftRadius: 4
    },
    expandIconContainer:{
        marginTop: '2%',
        marginLeft: '92%',
    },
    nameContainer: {
        marginTop: '2%',
        marginLeft: '2%',
        flexDirection: 'row', 
        justifyContent: 'space-between',

    },
    compatibility: {
        fontSize: 17,
        color: '#444444',
        alignSelf: "center",
        marginRight: "1%"
    },
    name: {
        fontSize: 24,
        color: nameColor,
    },
    age: {
        fontSize: 20,
        color: iconColors,
        fontWeight: '500'
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        width: containerWidth,
        alignSelf: 'center', // Center horizontally
        marginTop: '3%',
        marginBottom: '3%',
        borderColor: lineColor,
        borderWidth: 1,
        borderRadius: 5
      },
      height: {
        height: windowHeightPercentage
      },
      pictureContainer: {
        backgroundColor: lineColor,
        width: pictureWidth,
        height: pictureHeightPercentage,
        alignSelf: 'center', // Center horizontally
        marginTop: 10,
        marginBottom: '3%',
        borderColor: lineColor,
        borderWidth: 1,
    }
});

export default ItemInFeed;