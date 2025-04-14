import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F9FC",
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    logoutButton: {
        backgroundColor: "#FF6347",
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    logoutText: {
        color: "#fff",
        fontWeight: "bold",
    },
    formContainer: {
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 16,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#333",
    },
    input: {
        height: 45,
        backgroundColor: "#F5F5F5",
        marginBottom: 14,
        borderRadius: 8,
        paddingHorizontal: 12,
        color: "#333",
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },
    button: {
        height: 45,
        backgroundColor: "#3fffa3",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#101026",
    },
    tableContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    tableTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#333",
    },
    tableHeader: {
        flexDirection: "row",
        backgroundColor: "#F0F0F0",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
    },
    tableHeaderText: {
        fontWeight: "bold",
        color: "#666",
    },
    tableContent: {
        flex: 1,
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    tableCell: {
        color: "#333",
    },
    idColumn: {
        flex: 0.5,
    },
    nameColumn: {
        flex: 1.5,
    },
    descColumn: {
        flex: 2,
    },
    actionColumn: {
        flex: 1,
    },
    actionButtons: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    deleteButton: {
        backgroundColor: "#FF6B6B",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    deleteButtonText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    emptyText: {
        textAlign: "center",
        padding: 20,
        color: "#999",
    },
    loadingText: {
        textAlign: "center",
        padding: 20,
        color: "#999",
    },
    refreshButton: {
        marginTop: 16,
        backgroundColor: "#6979F8",
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: "center",
    },
    refreshButtonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
});

