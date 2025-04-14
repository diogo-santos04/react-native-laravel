import React, { useState, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function SignIn() {
    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        if (email === "" || password === "") return;

        await signIn({ email, password });
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Digite seu email"
                    autoCapitalize="none"
                    style={styles.input}
                    placeholderTextColor="#F0F0F0"
                    value={email}
                    onChangeText={setEmail}
                    inputMode="email"
                    
                />
                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                    placeholderTextColor="#F0F0F0"
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    {loadingAuth ? (
                        <ActivityIndicator size={25} color="#FFF" />
                    ) : (
                        <Text style={styles.buttonText}>Acessar</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1d1d2e",
    },

    inputContainer: {
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 34,
        paddingHorizontal: 14,
    },
    input: {
        width: "100%",
        height: 45,
        backgroundColor: "#282A36",
        marginBottom: 14,
        borderRadius: 8,
        paddingHorizontal: 12,
        color: "#FFF",
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#3A3F5A",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    button: {
        width: "100%",
        height: 40,
        backgroundColor: "#90EE90",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#101026",
    },
});