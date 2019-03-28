
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.headerText}> {props.judul} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: "#FF0066",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 20,
        position: "relative",
        height: 50
    },
    headerText: {
        fontSize: 22,
        color: "#fff",
        textAlign: "center"
    },

});
export default Header;
