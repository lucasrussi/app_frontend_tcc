import React, {useState} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/FontAwesome';


export function PlayAudio({route,navigation}:any){


	const {items} = route.params
	const [data, setSound] = useState(items);
	
	const playSound = async () =>{
		
		const sound = new Sound(`http://localhost:9876/selectAudioFile/${data}`, '', (error) => {
			if (error) {
				console.error(error)
			}
			sound.play();
		});
	}
	return (
		<View style={styles.container}>
			<Image source={require('../../../assets/image/songImg.png')} style={{ width: 400, height: 400 }}/>
			<View style={styles.buttonArea}>
				<Icon.Button size={40} backgroundColor="white" iconStyle={{margin:0,padding:0, borderRadius:10, color:'black'}} name="stop"/>
				<Icon.Button size={40} backgroundColor="white" iconStyle={{margin:0,padding:0, borderRadius:10, color:'black'}} name="play" onPress={()=>{playSound()}}/>
				<Icon.Button size={40} backgroundColor="white" iconStyle={{margin:0,padding:0, borderRadius:10, color:'black'}} name="pause"/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	buttonArea:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		width:'100%'
	}
})