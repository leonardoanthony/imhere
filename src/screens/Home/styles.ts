import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#131016",
      padding: 24,
    },
    eventName: {
      color: "#FFF",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 48,
    },
  
    eventDate: {
      color: "#bbb",
      fontSize: 16,
    },

    input: {
      height: 56,
      backgroundColor: '#1f1e25',
      color: '#FFF',
      fontSize: 16,
      paddingLeft: 16,
      flex: 1,
      marginRight: 8,
      borderRadius: 5,
    },
    button: {
      width: 56,
      height: 56,
      backgroundColor:  '#31cf67',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      color: '#FFF',
      fontSize: 24
    },
    form:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },
    listEmptyText: {
      color: '#666',
      textAlign: 'center',
      fontSize: 20,
    }

  });