import { Text, View, StyleSheet } from "react-native";
import GradientText from "../../styles/gradientText";
import { FontAwesome } from '@expo/vector-icons';
import { iconColors } from "../../styles/feedStyles/feedColors";
import { lineColor } from "../../styles/feedStyles/feedColors";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const Footer = () => {
    return (
      <View style={styles.FooterView}>

        <View style={styles.leftContainer}>
            <TouchableOpacity>
                <Text><Ionicons name="arrow-up-circle-sharp" size={35} color={iconColors} /></Text>
            </TouchableOpacity>
        </View>

        <View style={styles.iconStyle}>
            <TouchableOpacity>
                <Text><MaterialCommunityIcons name="account-edit" size={35} color={iconColors} /></Text>
            </TouchableOpacity>
        </View>

        <View style={styles.iconStyle}>
            <TouchableOpacity>
                <Text><MaterialCommunityIcons name="cog" size={35} color={iconColors} /></Text>
            </TouchableOpacity>
        </View>

    </View>
    );
  };
  
const styles = StyleSheet.create({
    iconStyle: {
        marginRight: '3.5%'
      },
    FooterView:{
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        // borderTopWidth: 1.5,
        borderColor: lineColor,
        paddingTop: '3%',
    },
    leftContainer: {
        flex: 1, // Takes 2/5 of the available space
      },
      campusCrush: {
        fontSize: 22,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 3,
        marginRight: '2%'
      },
});


  export default Footer;