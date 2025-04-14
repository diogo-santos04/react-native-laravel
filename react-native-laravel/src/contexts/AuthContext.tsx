import React, { useState, createContext, ReactNode, useEffect } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
};

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
};

type AuthProviderProps = {
    children: ReactNode;
};

type SignInProps = {
    email: string;
    password: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({
        id: "",
        name: "",
        email: "",
        token: "",
    });

    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !!user.token;

    useEffect(() => {
        async function loadStorage() {
            const userInfo = await AsyncStorage.getItem("@sesau");
            let savedUser: UserProps = JSON.parse(userInfo || "{}");

            if (savedUser.token) {
                api.defaults.headers.common["Authorization"] = `Bearer ${savedUser.token}`;
                setUser(savedUser);
            }

            setLoading(false);
        }

        loadStorage();
    }, []);

    async function signIn({ email, password }: SignInProps) {
        setLoadingAuth(true);

        try {
            const response = await api.post("/auth/login", {
                email,
                password,
            });

            const { user, token } = response.data.data;

            const userData: UserProps = {
                id: String(user.id),
                name: user.name,
                email: user.email,
                token: token,
            };

            await AsyncStorage.setItem("@sesau", JSON.stringify(userData));
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setUser(userData);
        } catch (error) {
            console.log("Erro no login:", error);
        } finally {
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        try {
            await api.post("/auth/logout");
        } catch (e) {
            console.log("Erro ao fazer logout na API:", e);
        } finally {
            await AsyncStorage.clear();
            setUser({ id: "", name: "", email: "", token: "" });
        }
    }

    return (
        <AuthContext.Provider
            value={{ user, isAuthenticated, signIn, loading, loadingAuth, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
}
