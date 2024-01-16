import { View, Image, Button, TextInput, Touchable, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import logoImage from "../../assets/logo.png";
import { theme } from "../../themes";
import {MaterialCommunityIcons} from '@expo/vector-icons';


export function Header() {
  return (
    <View style={styles.headerConteiner}>
      <Image source={logoImage} />
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Adicione uma tarefa . . ."
        placeholderTextColor={theme.colors.base.gray300}/>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="plus-circle-outline" size={24} color={theme.colors.base.gray100}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}