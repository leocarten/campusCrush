import { Text, View, StyleSheet } from "react-native";
import GradientText from "../../styles/gradientText";
import { FontAwesome } from '@expo/vector-icons';
import { iconColors } from "../../styles/feedStyles/feedColors";
import { lineColor } from "../../styles/feedStyles/feedColors";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useRef } from "react";
import { useNavigation } from '@react-navigation/native'
import { io } from "socket.io-client";
// import UseSocket from "../../../../sockets/testSocket";

const Footer = () => {

    // const navigation = useNavigation();
    const navigation = useNavigation();

    const handleEditProfilePress = async () => {
      navigation.navigate("EditProfilePage");
    };

    function componentDidMount(){
    //   const socket = io("http://18.188.112.190:5001");
    //   socket.on('connect', () => {
    //     console.log('Connected to server');
        
    //     // Send data as a message
    //     socket.emit('message', { key: 'value' }); 
    // })
    //   console.log(socket);
      const socket = io.connect("http://18.188.112.190:5001");
    }

    function sendMessage(){
      const socket = io("http://18.188.112.190:5001/testSocket");
      socket.emit('message',"Hello from client")
    }

    return (
      <View style={styles.FooterView}>

        <View style={styles.leftContainer}>
            {/* <TouchableOpacity> */}
                <Text><Ionicons name="arrow-up-circle-sharp" size={35} color={"transparent"} /></Text>
            {/* </TouchableOpacity> */}
        </View>

        <View style={styles.iconStyle}>
            <TouchableOpacity onPress={handleEditProfilePress}>
                <Text><MaterialCommunityIcons name="account-edit" size={35} color={iconColors} /></Text>
            </TouchableOpacity>
        </View>

        <View style={styles.iconStyle}>
          <TouchableOpacity onPress={componentDidMount}>
                <Text>
                  <MaterialCommunityIcons name="cog" size={35} color={iconColors} />
                </Text>
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