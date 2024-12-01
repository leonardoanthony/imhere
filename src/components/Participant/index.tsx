import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant({name, onRemove}: Props){

    return (
        <View style={styles.container}>

            <Text style={styles.text}>{name}</Text>

            <TouchableOpacity onPress={onRemove} style={styles.button}>

                <Text style={styles.textButton}>-</Text>

            </TouchableOpacity>

        </View>
    )
}