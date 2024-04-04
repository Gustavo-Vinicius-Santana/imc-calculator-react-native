import react from "react";
import { View, Text, Keyboard, Pressable, FlatList } from "react-native";

import styles from "./style";

export default function ListaImc({lista}){

    return(
        <View style={styles.boxLista}>
            <Text style={styles.titulo}>LISTA DE IMC</Text>
            <FlatList style={styles.lista} data={lista}
            renderItem={({item}) => {
                return(
                    <View key={item.id} style={styles.listaItem}>
                        <Text style={styles.textoImc}>O IMC de {item.nome} =
                            <Text style={styles.resultImc}>{item.imc}</Text>
                        </Text>
                    </View>

                )
            }}
            keyExtractor={(item, index) => {
                return item.id;
              }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            >
            </FlatList>
        </View>
    )
}