import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { theme } from '../../theme';

import { styles } from './styles';
const participantsItems =  ['Rodrigo',"Joao","Leoncio","herik","nogueira","ana","keveny","leadron","john","maria"]

export function Home() {
  const [participants,setParticipants] = useState(participantsItems)
  const [newParticipant,setNewParticipant] = useState('')
  const handleDeletePArticipant = (name:string)=>{

    Alert.alert("Remover",`voce tem certeza de que quer remover o participante ${name}?`,[
      {
        text:'sim',
        onPress:()=>{
          setParticipants(participants.filter((item)=>name!==item)) 
        },
      },
      {
        text:"nao",
        style:'cancel'
      },
    ])
  }
  const handleAddParticipant = () =>{
    if(newParticipant===''){
      return 
    }
    if(participants.includes(newParticipant)){
      return Alert.alert('Participante existe','ja existe um participante com esse nome')
    }

    setParticipants([...participants,newParticipant])
    setNewParticipant('')
  }
  return (
    <View style={styles.container} >
      <View style={styles.eventContainer}>
        <Text style={styles.title} >
          Nome do Evento
        </Text>
        <Text style={styles.dataText}>sexta, 4 de novembro de 2022</Text>
      </View>
      <View style={styles.form}>
        <TextInput value={newParticipant} onChangeText={setNewParticipant} style={styles.input}  placeholder='Nome do participante' placeholderTextColor={theme.colors.gray_300}/>
      <TouchableOpacity onPress={handleAddParticipant} style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    <FlatList keyExtractor={item=>item} data={participants} renderItem={({item})=>(
      <Participant onRemove={handleDeletePArticipant} name={item} />
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