import { View } from "react-native"
import { Text } from "react-native"
import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { expandedIconColor } from "../../styles/feedStyles/feedColors";
import { sectionInExpandedProfile } from "../../styles/feedStyles/feedColors";
import { textColor } from "../../styles/feedStyles/feedColors";
import { FontAwesome } from '@expo/vector-icons';

const SectionInProfile = ({ icon, title, body }) => {
    return(
        <View style={styles.section2}>
            <Text style={styles.sectionIcon}>{icon}</Text>
            <Text style={styles.sectionTextCenter}>{title}</Text>
            <Text style={styles.sectionTextBody}> <FontAwesome name="quote-left" size={14} color={expandedIconColor}/> {body} <FontAwesome name="quote-right" size={14} color={expandedIconColor}/> </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionIcon: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: '2%',
        marginBottom: '2%'
    },
    section2: {
        marginTop: '4%',
        padding: 2,
        backgroundColor: sectionInExpandedProfile,
        borderRadius: 5,
        shadowColor: 'white',
        shadowRadius: 2.5,
        shadowOpacity: 0.5,
        shadowOffset: 10
    },
    sectionTextCenter: {
        color: textColor,
        // color: feedHeadingBackground,
        fontSize: 20,
        marginLeft: '2%',
        textAlign: 'center',
        marginBottom: '2%'
    },
    sectionTextBody: {
        color: textColor,
        // color: feedHeadingBackground,
        fontSize: 17,
        marginTop: '2%',
        marginBottom: '3%',
        textAlign: 'center',
    },

});

export default SectionInProfile;