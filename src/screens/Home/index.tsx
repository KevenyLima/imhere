import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import { Participant } from '../../components/Participant';
import { theme } from '../../theme';

import { styles } from './styles';

export function Home() {
  const participants = ['Rodrigo',"Joao","Leoncio","herik","nogueira","ana","keveny","leadron","john","maria"]
  return (
    <View style={styles.container} >
      <View style={styles.eventContainer}>
        <Text style={styles.title} >
          Nome do Evento
        </Text>
        <Text style={styles.dataText}>sexta, 4 de novembro de 2022</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input}  placeholder='Nome do participante' placeholderTextColor={theme.colors.gray_300}/>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    <FlatList keyExtractor={item=>item} data={participants} renderItem={({item})=>(
      <Participant name={item} />
    )}
    showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=>(
        <Text style={styles.emptyListText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
        </Text>
      )}
    />
    </View>
  )
}