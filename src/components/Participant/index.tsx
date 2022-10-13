import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
interface props {
  name:string
  onRemove:(name:string)=>void
}
export function Participant({name,onRemove}:props) {
  return (
    <View style={styles.container} >
      <Text style={styles.name}>
        {name}
      </Text>
      <TouchableOpacity onPress={()=>onRemove(name)} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}