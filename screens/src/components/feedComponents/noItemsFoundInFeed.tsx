import { Text } from "react-native";
import { View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { iconColors } from "../../styles/feedStyles/feedColors";
import { expandedIconColor } from "../../styles/feedStyles/feedColors";
import { feedHeadingBackground } from "../../styles/feedStyles/feedColors";
const NoItemsFoundInFeed = () => {
    return(
        <View style={styles.bigContainer}>
            {/* Icon */}
            <View style={styles.iconContainer}>
                <Text>
                    <MaterialCommunityIcons name="magnify-close" size={60} color={feedHeadingBackground}/>
                </Text>
            </View>

            {/* Uh oh Text */}
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Uh oh, there was an issue finding other users nearby you.
                </Text>
            </View>

            {/* Corrective action */}
            <View style={styles.textContainer1}>
                <Text style={styles.text}>
                    &#128073;  To <Text style={{fontWeight:"bold"}}>fix</Text> this, try expanding your search radius in the filtering tool.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: '40%'
    },
    textContainer:{
        marginLeft: '2%',
        marginRight: '2%'
    },
    textContainer1:{
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '3%'
    },
    text:{
        fontSize: 20,
        textAlign: "center",
        color: expandedIconColor,
        fontWeight: "500"
    },
    iconContainer: {
        marginBottom: '3%'
    }
});

export default NoItemsFoundInFeed;