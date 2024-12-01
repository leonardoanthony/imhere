import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import { Participant } from "@/src/components/Participant";

export function Home() {

    const participants = ['Andreia', 'Gabriel', 'Tiago', 'Luan', 'Leo', 'Aldo', 'David', 'Edgard', 'Rivantonio', 'Denis', 'Andreia', 'Gabriel', 'Tiago', 'Luan', 'Leo', 'Aldo', 'David', 'Edgard', 'Rivantonio', 'Denis'];

    function handleParticipantAdd(){
      
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
            <Participant name={item} />
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