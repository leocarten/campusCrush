import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { iconColors } from '../../styles/feedStyles/feedColors';

const StoreItem = ({ name, emoji, text, points })  => {
    return(
        <View>
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.itemName}>
                        {name}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.emoji}>
                                {emoji}
                            </Text>
                        </View>
                        <Text style={styles.itemText} numberOfLines={3}>
                            {text}
                        </Text>
                        <Text style={styles.points}>
                            {points} pts
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemName: {
        marginBottom: '2%',
        fontSize: 22,
        fontWeight: 'bold'
    },
    points: {
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: '2%',
        color: iconColors
    },
    itemText: {
        alignSelf: 'center',
        marginLeft: '5%',
        fontSize: 20,
        width: '55%'
    },
    container: {
        marginTop: '3%',
        marginBottom: '3%',
        marginLeft: '3%',
        marginRight: '3%',
        borderColor: '#C9C9C9',
        borderWidth: 3,
        borderRadius: 5,
        padding: 8,
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 0.1,

        elevation: 2,
    },
    emoji: {
        fontSize: 60,
        marginBottom: '1%',
    },
    info: {
        fontSize: 16,
        marginTop: '3%',
        color: 'gray',
        marginBottom: '3%',
        marginLeft: '3%',
        marginRight: '3%',
      },
});


export default StoreItem;