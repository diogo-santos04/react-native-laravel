import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { styles } from "./styles";

interface Item {
  id: string | number;
  nome: string;
  descricao: string;
}

interface FormData {
  nome: string;
  descricao: string;
}

export default function Menu(){
    const { signOut } = useContext(AuthContext);
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormData>({
        nome: "",
        descricao: "",
    });

    async function handleSubmit() {
        if (!formData.nome || !formData.descricao) {
            return;
        }

        setLoading(true);
        try {
            const response = await api.post<Item>("/item", formData);
            console.log(response.data);
            
            setItems([...items, response.data]);
            
            setFormData({ nome: "", descricao: "" });
            
            fetchItems();
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    async function fetchItems(){
        setLoading(true);
        try {
            const response = await api.get<Item[]>("/item");
            setItems(response.data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    async function handleDeleteItem(id: string | number){
        try {
            await api.delete(`/item/${id}`);
            //remover da tabela 
            setItems(items.filter(item => item.id !== id));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Gerenciamento de Itens</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
                    <Text style={styles.logoutText}>SAIR</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Adicionar Novo Item</Text>
                <TextInput
                    placeholder="Digite o nome"
                    placeholderTextColor="#7C7C8A"
                    style={styles.input}
                    value={formData.nome}
                    onChangeText={(text: string) => {
                        setFormData({
                            ...formData,
                            nome: text,
                        });
                    }}
                />
                <TextInput
                    placeholder="Digite a descrição"
                    placeholderTextColor="#7C7C8A"
                    style={styles.input}
                    value={formData.descricao}
                    onChangeText={(text: string) => {
                        setFormData({
                            ...formData,
                            descricao: text,
                        });
                    }}
                />

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleSubmit}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>
                        {loading ? "Carregando..." : "Salvar"}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tableContainer}>
                <Text style={styles.tableTitle}>Itens Cadastrados</Text>
                
                <View style={styles.tableHeader}>
                    <Text style={[styles.tableHeaderText, styles.idColumn]}>ID</Text>
                    <Text style={[styles.tableHeaderText, styles.nameColumn]}>Nome</Text>
                    <Text style={[styles.tableHeaderText, styles.descColumn]}>Descrição</Text>
                    <Text style={[styles.tableHeaderText, styles.actionColumn]}>Ações</Text>
                </View>

                <ScrollView style={styles.tableContent}>
                    {loading ? (
                        <Text style={styles.loadingText}>Carregando...</Text>
                    ) : items.length === 0 ? (
                        <Text style={styles.emptyText}>Nenhum item cadastrado</Text>
                    ) : (
                        items.map((item) => (
                            <View key={String(item.id)} style={styles.tableRow}>
                                <Text style={[styles.tableCell, styles.idColumn]}>{item.id}</Text>
                                <Text style={[styles.tableCell, styles.nameColumn]}>{item.nome}</Text>
                                <Text style={[styles.tableCell, styles.descColumn]}>{item.descricao}</Text>
                                <View style={[styles.actionColumn, styles.actionButtons]}>
                                    <TouchableOpacity 
                                        style={styles.deleteButton}
                                        onPress={() => handleDeleteItem(item.id)}
                                    >
                                        <Text style={styles.deleteButtonText}>Excluir</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    )}
                </ScrollView>

                <TouchableOpacity 
                    style={styles.refreshButton} 
                    onPress={fetchItems}
                    disabled={loading}
                >
                    <Text style={styles.refreshButtonText}>Atualizar Lista</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}