import { View } from "react-native"
import { StyleSheet } from "react-native";
import { Text } from "react-native";

const Section3 = ({jobIcon, jobText}) => {
    return(
        <View style={{marginTop:'1%'}}>
            <View style={styles.additionalInfo}>
                <View style={styles.iconContainer}>
                    {jobIcon}
                </View>
                <View style={styles.interestsContainer}>
                    {jobText}
                </View>
            </View>

            <View style={styles.additionalInfo}>
                <View style={styles.iconContainer}>
                    <Text>T</Text>
                </View>
                <View style={styles.interestsContainer}>
                    <Text style={{color: 'white'}}>Tattoos + other stuff</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    additionalInfo: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: '2%'
    },
    iconContainer: {
        marginRight: 6, 
    },
    interestsContainer:{
        marginTop: '1%',
        // marginLeft: '2%',
        marginRight: '2%',
        flexDirection: 'row',
        justifyContent: "flex-start",
        flexWrap: 'wrap'
    },
});

export default Section3;