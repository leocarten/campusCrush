import { Text, View, StyleSheet } from "react-native";
import GradientText from "../../styles/gradientText";
import { FontAwesome } from '@expo/vector-icons';
import { expandedIconColor, iconColors } from "../../styles/feedStyles/feedColors";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { lineColor } from "../../styles/feedStyles/feedColors";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { getVariablesFromUserUpdate } from "../../../globalVariables/UpdateUserAccount";
import { resetValues } from "../../../globalVariables/UpdateUserAccount";
import EditUserData from "../../../../endpoints/EditUserData";
import MovingIcon from "../movingIcon";
import { Feather } from '@expo/vector-icons';
import PointsComponent from "../pointsComponents/Points";


interface HeaderProps {
  onFeedPage: int;
}

const Header: React.FC<HeaderProps> = ({ onFeedPage, name, socket, conversationID, id1, id2, id3 }) => {
  const navigation = useNavigation();

  // const handleUpdateData = () => {
  //   console.log(getVariablesFromUserUpdate());
  //   console.log("I am making the request ...");
  //   console.log(getVariablesFromUserUpdate());
  //   EditUserData()
  // }

  const handleSettingsPress = async () => {
    console.log(name);
    console.log(conversationID);
    console.log(id1);
    console.log(id2);
    console.log(id3);
    navigation.navigate("ChatSettingsPage", {
      name: name,
      conversationID: conversationID,
      id1: id1,
      id2: id2,
      id3: id3
    });
  }

  const goToUserSettings = () => {
    navigation.navigate("UserSettingsPage")
  }

  const goToFilter = () => {
    navigation.navigate("FilterPage");
  };

  const goToMessages = () => {
    navigation.navigate("Messages", { refresh: true });
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

  const goHome= () => {
    navigation.navigate("Welcome");
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
            <MaterialIcons name="person" size={28} color={iconColors} />
            <Text> <PointsComponent/></Text>
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
  else if(onFeedPage === 7){ // the user is on edit profile page
    return (
    //   <View style={styles.headerView}>
    //     <View style={styles.leftContainer}>
    //       {/* <Text>CampusCrush</Text> */}
    //       <TouchableOpacity onPress={backToFeed}>
    //         <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
    //           <Text>
    //           <Ionicons name="chevron-back" size={30} color="black" />
    //           </Text>
    //         </GradientText>
    //       </TouchableOpacity>
    //     </View> 
    //     <EditUserData/>
    // </View>
    <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <TouchableOpacity onPress={backToFeed}>
          <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
            <Ionicons name="chevron-back" size={30} color="black" />
          </GradientText>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <EditUserData/>
      </View>
    </View>

    );
  }
  else if(onFeedPage === 8){ // the user is on learn about campuscrush page
    return (
    <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <TouchableOpacity onPress={goHome}>
          <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
            <Ionicons name="chevron-back" size={30}  />
          </GradientText>
        </TouchableOpacity>
      </View>
    </View>

    );
  }

  else if(onFeedPage === 9){ // the user is on learn about campuscrush page

    return (
    <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <TouchableOpacity onPress={goToMessages}>
          <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
            <Ionicons name="chevron-back" size={30}  />
          </GradientText>
        </TouchableOpacity>
      </View>
    </View>

    );
  }

  else if(onFeedPage === 10){ // the user is in the messaging between 2 users page
    // socket.disconnect();
    return (
    <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <TouchableOpacity onPress={goToMessages}>
          <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
            <Ionicons name="chevron-back" size={30}  />
          </GradientText>
        </TouchableOpacity>
      </View>
      <View style={styles.name}>
        <Text style={styles.nameText}>
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={handleSettingsPress} style={{flexDirection: "row"}}>
        <Feather name="settings" size={24} color={expandedIconColor}/>
      </TouchableOpacity>
    </View>

    );
  }

  else if(onFeedPage === 11){ // the user is in the messaging between 2 users page

    return (
    <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <TouchableOpacity onPress={backToFeed}>
          <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
            <Ionicons name="chevron-back" size={30}  />
          </GradientText>
        </TouchableOpacity>
      </View>
      <View style={styles.name}>
        <Text style={styles.nameText}>
          {name}
        </Text>
      </View>
      <Feather name="settings" size={24} color={expandedIconColor} />
    </View>

    );
  }

  else if(onFeedPage === 12){ // the user is on learn how to earn points

    return (
      <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <TouchableOpacity onPress={goToStore}>
          <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
            <Ionicons name="chevron-back" size={30}  />
          </GradientText>
        </TouchableOpacity>
      </View>
    </View>

    );
  }


  else if(onFeedPage === 13){ // the user is in the messaging between 2 users page
    // socket.disconnect();
    return (
    <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <TouchableOpacity onPress={backToFeed}>
          <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
            <Ionicons name="chevron-back" size={30}  />
          </GradientText>
        </TouchableOpacity>
      </View>
      <View style={styles.name}>
        <Text style={styles.nameText}>
        <Feather name="settings" size={20} color={iconColors}/> USER SETTINGS
        </Text>
      </View>
    </View>

    );
  }

  else if(onFeedPage === 14){ // the user is in the messaging between 2 users page
    // socket.disconnect();
    return (
    <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <TouchableOpacity onPress={goToMessages}>
          <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
            <Ionicons name="chevron-back" size={30}  />
          </GradientText>
        </TouchableOpacity>
      </View>
      <View style={styles.name}>
        <Text style={styles.nameText}>
        <Feather name="settings" size={20} color={iconColors}/> CHAT SETTINGS
        </Text>
      </View>
    </View>

    );
  }

  else if(onFeedPage === 15){ // the user is on learn how to earn points

    return (
      <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {/* <Text>CampusCrush</Text> */}
        <TouchableOpacity onPress={goToUserSettings}>
          <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
            <Ionicons name="chevron-back" size={30}  />
          </GradientText>
        </TouchableOpacity>
      </View>
    </View>

    );
  }

};
  
const styles = StyleSheet.create({
  name:{
    marginRight: 'auto'
  },
  nameText:{
    textAlign: "center",
    color:iconColors,
    fontSize: 18,
    fontWeight: "700"
  },
  points: {
    color: iconColors,
    alignSelf: "center",
    fontSize: 17,
  },
    iconStyle: {
      marginRight: '3.5%',
    },
    headerView:{
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        flexDirection: 'row',
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', 
        // borderBottomWidth: 1.5,
        borderColor: lineColor,
        paddingBottom: '3%',
    },
    leftContainer: {
      marginRight: 'auto', // Takes 2/5 of the available space
      },
      campusCrush: {
        fontSize: 29,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2,
        // marginRight: '2%'
      },
      rightContainer: {
        marginLeft: 'auto', // Pushes EditUserData component to the left
      },
});


  export default Header;