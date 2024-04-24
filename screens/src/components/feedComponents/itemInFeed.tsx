import { Text, View, StyleSheet } from "react-native"
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { expandedIconColor } from "../../styles/feedStyles/feedColors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { feedHeadingBackground } from "../../styles/feedStyles/feedColors";
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';



let windowHeightPercentage;
if(windowHeight < 700){
    windowHeightPercentage = ( (1-(.2)) * windowHeight);
}
else{
    windowHeightPercentage = ( (1-(.27)) * windowHeight);
}
// console.log(windowHeight)
const pictureHeightPercentage = ( (1-(.59)) * windowHeight);
import { lineColor } from "../../styles/feedStyles/feedColors";
import { iconColors } from "../../styles/feedStyles/feedColors";
import { nameColor } from "../../styles/feedStyles/feedColors";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import GradientText from "../../styles/gradientText";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import musicGenres from "../../data/musicChoices";

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
    if(interest.length != 0){
        if( (windowWidth/13) >= totalConsumedWidth ){
            var interestCap = interest.charAt(0).toUpperCase() + interest.slice(1);
            return <Text key={index} style={styles.interest}>{interestCap}</Text>
        }
        else{
            return;
        }
    }
    totalConsumedWidth = 0;
}

function renderMusicText(music, index, lengthOfArray) {
    if(music.length != 0){
        // if( (windowWidth/12) >= totalConsumedWidthMusic ){
        //     // console.log("Adding ",music)
            if(index == lengthOfArray-1){
                var musicCap = music.charAt(0).toUpperCase() + music.slice(1);
                return <Text key={index} style={styles.music}>{musicCap}</Text>
            }
            else{
                var musicCap = music.charAt(0).toUpperCase() + music.slice(1);
                return <Text key={index} style={styles.music}>{musicCap}<Entypo name="dot-single" size={17} color={expandedIconColor} /></Text>
            }

    }
}


const ItemInFeed = ({userID, isVerified, Name, Age, Comp, Bio, Pictures, AppReason, Interests, Music, Job, KeyToHeart, BucketList, has_tattoos, workout, sleep_schedule, Communication_style, Ideal_first_meetup, Distance, Base64}) => {
    const navigate = useNavigation();
    const sendFirstMessage = ({name}) => {
        // const navigate = useNavigation();
        navigate.navigate("MessagesBetweenUsers", {conversationID: 69420, name: name, page: 11, isFirstMessage: true, recieverID: userID});
        // console.log(name)
    }

    // console.log(Name,Age, userID);
    
    totalConsumedWidth = 0;
    let userWants;
    let comp;
    let verifiedIcon;
    let musicIcon;
    var roundedDistance = Math.floor(Distance);
    let distanceUnit = "miles"
    if(roundedDistance < 1){
        roundedDistance = 1;
        distanceUnit = "mile"
    }


    // console.log("Interests:",Interests)
    if(Music[0] != ""){
        musicIcon = <Text style={styles.music}><Fontisto name="applemusic" size={22} color={iconColors}/> </Text>;
    }
    else{
        musicIcon = ""
    }
    // console.log("testing: ",Name,Music)

    if(isVerified === 1){
        verifiedIcon = <Text><MaterialIcons name="verified" size={22} color="#30ADA7"/></Text>
    }
    // <DropdownComponent initMessage="I am using this app to find..." options={[{ label: 'Nothing serious', value: '1' },{ label: 'A lasting relationship', value: '2' },{ label: "New experiences", value: '3' },{ label: "New friendships", value: '4' },{ label: "I'm not sure yet", value: '5' }]} icon={<FontAwesome5 name="user-friends" size={20} color="black" style={{ marginRight: 5 }}/>} field={"app_purpose"} typeOfChange={"creation"}/>

    if(AppReason === 1){
        userWants = <Text>Nothing serious &#128524;</Text>;
    }
    else if(AppReason === 2){
        userWants = <Text>A lasting relationship &#10084;</Text>;
    }
    else if(AppReason === 3){
        userWants = <Text>New experiences &#127760;</Text>;
    }
    else if(AppReason === 4){
        userWants = <Text>New friendships &#128100;</Text>;
    }
    else if(AppReason === 5){
        userWants = <Text>I'm not sure yet &#129300;</Text>;
    }
    else{
        userWants = <Text>Suprise me! &#127880;</Text>;
    }

    if(Comp >= 80){
        if(AppReason === 3 || AppReason === 4){
            comp = <View style={styles.compBackgroundHandshake}><Text style={styles.compatibility}>High match <FontAwesome5 name="hands-helping" size={17} color={iconColors} /></Text></View>;
        }
        else{
            comp = <View style={styles.compBackgroundHeart}><Text style={styles.compatibility}>High match <FontAwesome name="heart" size={17} color={iconColors} /></Text></View>;
        }
    }
    else{
        comp = "";
    }
    let bioSpace;
    if(Bio === ""){
        bioSpace = ""
    }
    else{
        bioSpace = <View style={styles.bioContainer}><Text style={styles.bio} numberOfLines={1}><FontAwesome name="quote-left" size={16} color={iconColors} /> {Bio} <FontAwesome name="quote-right" size={16} color={iconColors} /></Text></View>
    }


    const navigation = useNavigation();

    const handleExpandPress = () => {
        navigation.navigate("PersonsProfile", { personName: Name, personAge: Age, personGoals: AppReason, personBio: Bio, verified: isVerified, interests: Interests, music: Music, job: Job, KeyToHeart: KeyToHeart, BucketList: BucketList, has_tattoos: has_tattoos, workout: workout, sleep_schedule: sleep_schedule, Communication_style, Ideal_first_meetup, Image_Data: Base64});
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
                <Image
                    source={{ uri: `data:image/png;base64,${Base64}`}}
                    style={{width: '100%',height: '100%', marginTop:'auto',marginBottom:'auto',marginLeft:'auto',marginRight:'auto'}}
                    />
                </View>

                {/* Expand */}
                <View style={styles.expandIconContainer}>
                    <View style={styles.locationContainer}>
                        <Text style={styles.nearbyText}><MaterialCommunityIcons name="map-marker" size={17} color={expandedIconColor}/> {roundedDistance} {distanceUnit} away </Text>
                    </View>
                    <TouchableOpacity onPress={handleExpandPress}>
                        <Text>
                            <FontAwesome name="expand" size={23} color='gray' />
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Div to either remove or send message! */}
                <View style={styles.profileContainer}>
                    <View style={styles.sendMessageContainer}>
                        <Text style={styles.bio} numberOfLines={1}>
                            <Text style={{fontWeight: '500'}}>I want:</Text> {userWants}
                        </Text>
                        <TouchableOpacity style={{marginRight: '2%'}} onPress={() => sendFirstMessage({ name: Name })}>
                            <GradientText colors={['#cc2b5e', '#753a88']}>
                                <FontAwesome name="send" size={26} style={styles.sendMessageIcon}/>
                            </GradientText>
                        </TouchableOpacity>                    
                    </View>

                    <View>
                        {bioSpace}
                    </View>


                    <View style={styles.interestsContainer}>
                        {Interests.map((interest, index) => (
                            renderInterestText(interest, index)
                        ))}
                    </View>

                    <View style={styles.musicContainer}>
                        {musicIcon}
                        {Music.map((music, index) => (
                            renderMusicText(music, index, Music.length)
                        ))}
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    nearbyText: {
        fontSize: 14, 
        fontWeight: 'bold', 
        color: expandedIconColor, 
    },
    locationContainer: {
        borderColor: iconColors,
        borderWidth: 1,
        borderRadius: 3,
        padding: 2,
        shadowColor: feedHeadingBackground,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.41,
        
        elevation: 2,
    },
      
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
    music:{
        fontSize: 18,
        backgroundColor: 'transparent',
        alignSelf: "flex-start",
        color: iconColors,
        marginLeft: '1%',
        textAlignVertical:"center",
        flexWrap: "wrap"
    },
    interestsContainer: {
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        flexDirection: 'row',
        justifyContent: "flex-start",
    },
    musicContainer: {
        marginTop: '3%',
        marginLeft: '2%',
        marginRight: '2%',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems:"center"
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
        marginLeft: '3%',
        marginRight: '3%',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nameContainer: {
        marginTop: '2%',
        marginLeft: '2%',
        flexDirection: 'row', 
        justifyContent: 'space-between',

    },
    compBackgroundHandshake: {
        borderColor: iconColors,
        borderWidth: 1.5,
        marginRight: '2%',
        padding: 3,
        borderRadius: 4,
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 1.41,
        
        elevation: 2,
    },
    compBackgroundHeart: {
        borderColor: iconColors,
        borderWidth: 1.5,
        marginRight: '2%',
        padding: 3,
        borderRadius: 4,
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 1.41,
        
        elevation: 2,
    },
    compatibility: {
        fontSize: 16,
        color: expandedIconColor,
        alignSelf: "center",
        marginRight: "1%",
        fontWeight: "600"
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
        // backgroundColor: lineColor,
        width: pictureWidth,
        height: pictureHeightPercentage,
        alignSelf: 'center', // Center horizontally
        marginTop: 10,
        marginBottom: '3%',
        borderColor: lineColor,

        borderWidth: 1,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
});

export default ItemInFeed;