import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Menu() {
    const { signOut } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>LOGADO</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
                <Text style={styles.logoutText}>SAIR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    logoutButton: {
        width: "80%",
        height: 40,
        backgroundColor: "#FF6347", 
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    logoutText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
