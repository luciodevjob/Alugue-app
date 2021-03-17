import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler' 
import {Feather} from '@expo/vector-icons'
import New from "../components/New";
import { useNavigation } from '@react-navigation/native'
import  House from '../components/House'
import Offer from '../components/Offer'

export default function Home() {
    const navigation = useNavigation();
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#FFF',}}
        >

            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name="search" size={24} color="black"/>
                    <TextInput 
                    placeholder="O que está procurando?"
                    style={styles.input}
                    />

                </View>
            </View>
            <View style ={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
            <New 
            cover={require('../assets/house1.jpg')}
            name="Casa de Praia"
            description="Casa nova uma quadra do mar, lugar seguro e monitorado 24h"
            onPress={() => navigation.navigate('detail')}
            />

            <New 
            cover={require('../assets/house2.jpg')}
            name="Casa de Praia"
            description="Casa nova uma quadra do mar, lugar seguro e monitorado 24h"
            onPress={() => navigation.navigate('detail')}
            />

            <New 
            cover={require('../assets/house3.jpg')}
            name="Casa de Praia"
            description="Casa nova uma quadra do mar, lugar seguro e monitorado 24h"
            onPress={() => navigation.navigate('detail')}
            />
            
            </ScrollView>
            
            <View style={styles.contentNew}>
                <Text style={[styles.title, {paddingTop: 20}]}>Perto de você!</Text>  
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
            <House
            cover={require('../assets/house4.jpg')}
            description = 'Super Casa Cidade'
            price = 'R$ 500'
            />
            <House
            cover={require('../assets/house5.jpg')}
            description = 'Super casa praia'
            price = 'R$ 600'
            />
            <House
            cover={require('../assets/house6.jpg')}
            description = 'Super casa Campo'
            price = 'R$ 700'
            />
            </ScrollView>
            <View style={styles.contentNew}>
                <Text style={[styles.title, {paddingTop: 20}]}> Ofertas do Dia!</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 10}}>
            <Offer 
            source={require('../assets/house1.jpg')}
            tittle= 'Casa Rio De Janeiro'
            description= '25% Off'
            />
            <Offer 
            source={require('../assets/house2.jpg')}
            tittle= 'Casa Duque de Caxias'
            description= '15% Off'
            />
            <Offer 
            source={require('../assets/house3.jpg')}
            tittle= 'Casa Jardim Primavera'
            description= '10% Off'
            />
            </ScrollView>
            </ScrollView>

           
    );
}
const styles = StyleSheet.create({
header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,

},
inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#fff',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
},
input:{
fontFamily: 'Montserrat_500Medium',
paddingHorizontal: 10,
fontSize: 13,
width: '90%',
},
contentNew: {
flexDirection :'row',
width:'100%',
alignItems: 'center'
},
title:{
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
}
})