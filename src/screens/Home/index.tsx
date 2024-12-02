import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "@/src/components/Participant";
import { useState } from "react";

export function Home() {

    const [participants, setParticipants] = useState(['Andreia']);

    // const participants = ['Andreia'];

    function handleParticipantAdd(){
      if(participants.includes('Leo')){
        return Alert.alert('Participante existe', 'Já participante na lista com este nome');
      }
      console.log(`Você clicou em adicionar o participante`)  
      setParticipants(prev => [...prev, 'Leo'])
      console.log(participants);
    }

    function handleParticipantRemove(name: string){

      Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => Alert.alert("Deletado!"),
        },
        {
          text: 'Não',
          style: 'cancel'
        },
      ]);
      console.log(`Você clicou em remover o participante ${name}`)  
    }


    return (
      <View style={styles.container}>

        <Text style={styles.eventName}>
          Confra dos TI's
        </Text>

        <Text style={styles.eventDate}>
          Sábado, 14 de Dezembro de 2024
        </Text>

        <View style={styles.form}>

          <TextInput 
            style={styles.input} 
            placeholder="Nome do participante"
            placeholderTextColor="#666"
            // keyboardType=""
            />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

        </View>

        <FlatList
        
          data={participants}
          keyExtractor={(item, index) => `${index}`} 
          renderItem={({item}) => (
            <Participant name={item} onRemove={() => handleParticipantRemove(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes</Text>
          )}
        />


        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {participants.map(participant => (
            <Participant 
            name={participant} 
            key={participant} />
          ))}
        </ScrollView> */}

        
      </View>
    );
  }