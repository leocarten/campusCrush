import { Text, View, StyleSheet } from "react-native";
import GradientText from "../../styles/gradientText";
import { FontAwesome } from '@expo/vector-icons';
import { iconColors } from "../../styles/feedStyles/feedColors";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { lineColor } from "../../styles/feedStyles/feedColors";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

interface HeaderProps {
  onFeedPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ onFeedPage }) => {
  if(onFeedPage === true){
    return (
      <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
          CampusCrush
        </GradientText>
      </View>

      <View style={styles.iconStyle}>
        <TouchableOpacity>
          <Text>
            <FontAwesome name="filter" size={30} color={iconColors} style={{borderColor: 'black', borderWidth: 4}}/>
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.iconStyle}>
        <TouchableOpacity>
          <Text><Ionicons name="people" size={30} color={iconColors}/></Text>
          </TouchableOpacity>
      </View> */}

      <View style={styles.iconStyle}>
        <TouchableOpacity>
          <Text><Ionicons name="chatbubble-ellipses-sharp" size={28} color={iconColors} /></Text>
          </TouchableOpacity>
      </View>

      <View style={styles.iconStyle}>
        <TouchableOpacity>
          <Text>
            <FontAwesome5 name="coins" size={30} color={iconColors} />
            </Text>
          </TouchableOpacity>
      </View>

    </View>
    );
  }
  return (
    <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
          CampusCrush
        </GradientText>
      </View>

      <View style={styles.iconStyle}>
        <TouchableOpacity>
          <Text><Ionicons name="people" size={30} color={iconColors}/></Text>
          </TouchableOpacity>
      </View>

      <View style={styles.iconStyle}>
        <TouchableOpacity>
          <Text><Ionicons name="chatbubble-ellipses-sharp" size={28} color={iconColors} /></Text>
          </TouchableOpacity>
      </View>

      <View style={styles.iconStyle}>
        <TouchableOpacity>
          <Text><MaterialIcons name="shopping-cart" size={30} color={iconColors} /></Text>
          </TouchableOpacity>
      </View>
  </View>
  );
};
  
const styles = StyleSheet.create({
    iconStyle: {
      marginRight: '3.5%',
    },
    headerView:{
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        borderBottomWidth: 1.5,
        borderColor: lineColor,
        paddingBottom: '3%',
    },
    leftContainer: {
        flex: 1, // Takes 2/5 of the available space
      },
      campusCrush: {
        fontSize: 29,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2,
        // marginRight: '2%'
      },
});


  export default Header;