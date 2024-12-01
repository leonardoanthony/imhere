import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type Props = {
    name: string;
}

export function Participant({name}: Props){

    function handleRemoveParticipant(){
        alert('oi');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}>{name}</Text>

            <TouchableOpacity onPress={handleRemoveParticipant} style={styles.button}>

                <Text style={styles.textButton}>-</Text>

            </TouchableOpacity>

        </View>
    )
}