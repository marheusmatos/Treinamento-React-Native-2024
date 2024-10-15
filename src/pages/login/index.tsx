import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { styles } from "./style"
import Logo from "../../assets/logo.png"
import { ListaTarefas } from '../../components/ListaTarefas';

export default function Login() {


    const [visible, setVisible] = useState(true);
    
    const toggleVisibility = () => {
        setVisible(!visible);
      };

    return (
      
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Serra Junior Engenharia</Text>
        </View>
  
        <View style={styles.main}>
        <ListaTarefas/>


          {visible && (
            <View style={styles.card}>
              <Image
                style={styles.logoImg}
                source={require('../../assets/logo.png')}
              />
              <Text style={styles.cardEmail}>https://www.serrajr.eng.br/</Text>
            </View>
          )}
          <TouchableOpacity 
            style={styles.botao}
            onPress={toggleVisibility} 
          >
            <Text style={styles.botaoTexto}>{visible ? 'Mostrar / Esconder' : 'Mostrar / Esconder'}</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            COPYRIGHT Ⓒ 2024 - SERRA JUNIOR ENGENHARIA
          </Text>
        </View>
      </View>
        
    )
    
}