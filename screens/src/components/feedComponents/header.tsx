import { Text, View, StyleSheet } from "react-native";
import GradientText from "../../styles/gradientText";
import { FontAwesome } from '@expo/vector-icons';
import { iconColors } from "../../styles/feedStyles/feedColors";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { lineColor } from "../../styles/feedStyles/feedColors";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

interface HeaderProps {
  onFeedPage: int;
}

const Header: React.FC<HeaderProps> = ({ onFeedPage }) => {
  const navigation = useNavigation();

  const goToFilter = () => {
    navigation.navigate("FilterPage");
  };

  const goToMessages = () => {
    navigation.navigate("Messages");
  }

  const backToFeed = () => {
    navigation.navigate("Feed");
  }

  const goToStore = () => {
    navigation.navigate("Store");
  }

  const goToLogin = () => {
    navigation.navigate("Login");
  }

  if(onFeedPage === 1){ // on the feed
    return (
      <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
          CampusCrush
        </GradientText>
      </View>

      <View style={styles.iconStyle}>
        <TouchableOpacity onPress={goToFilter}>
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
        <TouchableOpacity onPress={goToMessages}>
          <Text><Ionicons name="chatbubble-ellipses-sharp" size={28} color={iconColors} /></Text>
          </TouchableOpacity>
      </View>

      <View style={styles.iconStyle}>
        <TouchableOpacity onPress={goToStore}>
          <Text>
            <FontAwesome5 name="coins" size={30} color={iconColors} />
            </Text>
          </TouchableOpacity>
      </View>

    </View>
    );
  }
  else if (onFeedPage === 2){ // on the filtering page
    return (
      <View style={styles.headerView}>
        <View style={styles.leftContainer}>
          {/* <Text>CampusCrush</Text> */}
          <TouchableOpacity onPress={backToFeed}>
            <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
              <Text>
              <Ionicons name="chevron-back" size={30} color="black" />
              </Text>
            </GradientText>
          </TouchableOpacity>
        </View>

        <View style={styles.iconStyle}>
          <TouchableOpacity>
            <Text><MaterialCommunityIcons name="restart" size={30} color={iconColors} /></Text>
            </TouchableOpacity>
        </View>

        <View style={styles.iconStyle}>
          <TouchableOpacity>
            <Text><AntDesign name="checkcircle" size={28} color='#29900B' /></Text>
            </TouchableOpacity>
        </View>
        
    </View>
    );
  }
  else if (onFeedPage === 3){ // on the messaging page
    return (
      <View style={styles.headerView}>
        <View style={styles.leftContainer}>
          {/* <Text>CampusCrush</Text> */}
          <TouchableOpacity onPress={backToFeed}>
            <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
              <Text>
              <Ionicons name="chevron-back" size={30} color="black" />
              </Text>
            </GradientText>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.iconStyle}>
          <TouchableOpacity>
            <Text><MaterialCommunityIcons name="restart" size={30} color={iconColors} /></Text>
            </TouchableOpacity>
        </View>

        <View style={styles.iconStyle}>
          <TouchableOpacity>
            <Text><AntDesign name="checkcircle" size={28} color='#29900B' /></Text>
            </TouchableOpacity>
        </View> */}
        
    </View>
    );
  }
  else if (onFeedPage === 4){ // on the store page
    return (
      <View style={styles.headerView}>
        <View style={styles.leftContainer}>
          {/* <Text>CampusCrush</Text> */}
          <TouchableOpacity onPress={backToFeed}>
            <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
              <Text>
              <Ionicons name="chevron-back" size={30} color="black" />
              </Text>
            </GradientText>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.points}>
            <Ionicons name="person-sharp" size={24} color={iconColors} />
            <Text> 500 pts </Text>
          </Text>
        </View>
        
    </View>
    );
  }
  else if (onFeedPage === 5){ // expanded a persons profile
    return (
      <View style={styles.headerView}>
        <View style={styles.leftContainer}>
          {/* <Text>CampusCrush</Text> */}
          <TouchableOpacity onPress={backToFeed}>
            <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
              <Text>
              <Ionicons name="chevron-back" size={30} color="black" />
              </Text>
            </GradientText>
          </TouchableOpacity>
        </View>        
    </View>
    );
  }
  else if (onFeedPage === 6){ // bad credentials
    return (
      <View style={styles.headerView}>
        <View style={styles.leftContainer}>
          {/* <Text>CampusCrush</Text> */}
          <TouchableOpacity onPress={goToLogin}>
            <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
              <Text>
              <Ionicons name="chevron-back" size={30} color="black" />
              </Text>
            </GradientText>
          </TouchableOpacity>
        </View>        
    </View>
    );
  }
};
  
const styles = StyleSheet.create({
  points: {
    color: iconColors,
    alignSelf: "center",
    fontSize: 17
  },
    iconStyle: {
      marginRight: '3.5%',
    },
    headerView:{
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        // borderBottomWidth: 1.5,
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