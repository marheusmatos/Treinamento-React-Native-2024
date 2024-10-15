import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001830',
        justifyContent: 'space-between',
      },
    
      header: {
        flex: 0.125,
        backgroundColor: '#FF6600',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      headerTitle: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
      },
    
      main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: 300,
        borderRadius: 20,
      },
    
      logoImg: {
        margin: 30,
        width: 100,
        height: 100,
      },
    
      cardEmail: {
        color: '#001830',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 30,
      },
    
      botao:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: 300,
        height: 50,
        borderRadius: 15,
      },
    
      botaoTexto: {
        color: '#001830',
        fontSize: 19,
        fontWeight: 'bold',
      },
    
      footer: {
        flex: 0.125,
        backgroundColor: '#FF6600',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      footerTitle: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center',
      },
      input:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: 300,
        borderRadius: 20,
      }
});
