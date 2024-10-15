import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { styles } from "./style"
import Logo from "../../assets/logo.png"
import { ListaTarefas } from '../../components/ListaTarefas';

export default function Login() {

  const [texto, setaTexto] = useState("");
  const [itens, setaItens] = useState([{ titulo: "Tarefa falta fazer", estado: false }, { titulo: "Tarefa concluída", estado: true }]);
  const adicionaItem = (e) => {
    if (texto != "") {
      setaItens([
        ...itens,
        { titulo: texto, estado: false }
      ])
      setaTexto("")
    }
  };

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

        {!visible && (
          <ScrollView >
            <View>
              <StatusBar
                animated={true}
              />


              <View >
                <TextInput style={styles.TextInput} value={texto} onChangeText={setaTexto} />

                <TouchableOpacity onPress={adicionaItem}>
                  <Text style={styles.TextBtn}>adicionar tarefa</Text>
                </TouchableOpacity>
              </View>

              <ListaTarefas itens={itens} setaItens={setaItens} />

            </View>
          </ScrollView>
        )}


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