import { Text, View, StyleSheet } from "react-native"
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowHeightPercentage = ( (1-(.3)) * windowHeight);
console.log(windowHeightPercentage);
const pictureHeightPercentage = ( (1-(.6)) * windowHeight);
console.log(pictureHeightPercentage)
import { lineColor } from "../../styles/feedStyles/feedColors";
import { iconColors } from "../../styles/feedStyles/feedColors";
import { nameColor } from "../../styles/feedStyles/feedColors";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { feedHeadingBackground } from "../../styles/feedStyles/feedColors";
import { removeUser } from "../../styles/feedStyles/feedColors";
import GradientText from "../../styles/gradientText";


const ItemInFeed = (Name, Age, Bio, Pictures, Interests, BucketList) => {
    return(
        <View style={styles.height}>
            <View style={styles.container}>

                {/* Name, age */}
                <View style={styles.nameContainer}>
                    <Text style={styles.name}><Text style={{fontWeight: '700'}}>Alessandra</Text>, <Text style={styles.age}>20</Text></Text>
                </View>

                {/* Pictures */}
                <View style={styles.pictureContainer}>
                    <Text></Text>
                </View>

                {/* Expand */}
                <View style={styles.expandIconContainer}>
                    <TouchableOpacity>
                        <Text>
                            <FontAwesome name="expand" size={24} color={iconColors} />
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Div to either remove or send message! */}
                <View style={styles.profileContainer}>
                    <View style={styles.sendMessageContainer}>
                        <Text style={styles.bio} numberOfLines={1}>
                            {/* <Text style={{fontWeight: '500'}}>I want:</Text> Meet new people &#127760; */}
                            <Text style={{fontWeight: '500'}}>I want:</Text> Long-term partner &#10084; 
                            {/* <Text style={{fontWeight: '500'}}>I want:</Text> Short-term partner &#128520; */}
                            {/* <Text style={{fontWeight: '500'}}>I want:</Text> I'm not sure &#129304; */}
                        </Text>
                        <TouchableOpacity>
                            <GradientText colors={['#cc2b5e', '#753a88']}>
                                <FontAwesome name="send" size={28} style={styles.sendMessageIcon}/>
                            </GradientText>
                        </TouchableOpacity>                    
                    </View>

                    <View style={styles.bioContainer}>
                        <Text style={styles.bio} numberOfLines={2}>
                            Hey there! I'm Alessandra, a passionate individual who believes in making the most out of life. By day, I'm a Janitor, but when the workday is done, you'll find me exploring new coffee shops, indulging in my love for photography, or simply getting lost in a good book.
                        </Text>
                    </View>

                    <View style={styles.interestsContainer}>
                        <Text style={styles.interest}>
                            Sports
                        </Text>
                        <Text style={styles.interest}>
                            Swimming
                        </Text>
                        <Text style={styles.interest}>
                            Dancing
                        </Text>
                        <Text style={styles.interest}>
                            Photography
                        </Text>
                    </View>

                </View>


                {/* Bio, Interests, Bucket List sentence */}



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
        marginLeft: '4%',
        flexDirection: 'row', 
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
        width: '88%',
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
        width: '85%',
        height: pictureHeightPercentage,
        alignSelf: 'center', // Center horizontally
        marginTop: 10,
        marginBottom: '3%',
        borderColor: lineColor,
        borderWidth: 1,
    }
});

export default ItemInFeed;