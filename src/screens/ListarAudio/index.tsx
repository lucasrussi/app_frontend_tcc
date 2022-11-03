import React, { useState,useEffect } from "react";
import { FlatList, View, Text, StyleSheet} from 'react-native';
import { Container } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiGet } from "../conn/apiGet";


export function ListarAudio({route,navigation}:any){

	const {items} = route.params
	const [data, setData] = useState(items);

	const removeItens = async (id:string) => {
		await ApiGet('deleteAudioFile',id)?.then(async () =>{
			await ApiGet('selectAllAudioFile')?.then(async (resp) =>{
				setData(resp)
				const jsonValue = JSON.stringify(resp);
				await AsyncStorage.setItem('@storage_data',jsonValue);
			})
		})
	}

	const Item = ({ name,descricao,id }:any) => (
		<View style={styles.item}>
			<View>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.descricao}>Descrição:{descricao}</Text>
			</View>
			<View>
				<Icon.Button  
					name="trash"
					size={40} backgroundColor="white"
				  iconStyle={
						{
							margin: 0,
							padding:0,
							color:'black'		
						}
		    	}
					onPress={()=>{removeItens(id)}}
				/>
			</View>
		</View>
	);
	const renderItem = ({ item }:any) => (
    <Item name={item.name} descricao={item.descricao} id={item.id}/>
  );
	
	return(
		<Container>	
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</Container>
	)
}

const styles = StyleSheet.create({
	
	item: {
		flexDirection: 'row',
		justifyContent:'space-between',
		backgroundColor: 'white',
		padding: 5,
		borderRadius:10,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	name: {
		fontSize: 25,
	},
	descricao:{
		fontSize:15,
		whiteSpace: 'nowrap'
	}
});
