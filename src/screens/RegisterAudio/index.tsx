import React, { useCallback, useState } from "react";
import { TextInput,StyleSheet,Button, View, Text } from "react-native";
import * as DocumentPicker from 'expo-document-picker';



import { 
	Container,
	Header,
	Title,
	ViewAcess
} from "./styles";

export function RegisterAudio({navigation}:any){


	const [nameData, setNameData] = useState('');
  const [descData, setDescData] = useState('');
	const [mimeType, setMimeType] = useState('');
	const [nameFile, setNameFile] = useState('');
	const [uriFile, setUriFile] = useState('');
	const [showElement, setShowElement] = useState(false)
	const handleDocumentSelection = useCallback(async () => {
    try {
			 await DocumentPicker.getDocumentAsync().then((resp)=>{
				if(resp.type == 'success'){
					setMimeType(resp.mimeType!)
					setNameFile(resp.name)
					setUriFile(resp.uri)
					setShowElement(true)

				}
			 })
			 
    } catch (err) {
      console.warn(err);
    }
  }, []) ;

	const saveItem = async () =>{

		const data = new FormData();
		data.append('file', {
			name: nameFile,
			type: mimeType,
			uri: uriFile
		});

		data.append('name',nameData)
		data.append('descricao',descData)

		fetch('http://localhost:9876/newFile', {
			method: 'POST',
			headers: {
				"Content-Type": "multipart/form-data",
			},
			body: data
			
		})
		.then((response) => response.json())
		.then((response)=>{
			console.log(response)
			navigation.navigate('WriteNfc',{items:response.name})
		}).catch((e)=>{
			console.warn(e)
		});
	}


  return (
		<Container>
			<Header>
				<Title>Cadastro</Title>
			</Header>
			<ViewAcess>
				<TextInput
					style={styles.input}
					placeholder="Nome"
					onChangeText={(newText:any) => setNameData(newText)}
				/>
				<TextInput
					style={styles.input}
					placeholder="Descrição"
					onChangeText={(newText:any) => setDescData(newText)}
				/>
				{showElement ? <Text style={{color:"black", marginTop:30, fontSize:20}}>Arquivo:{nameFile}</Text> : null}
				<View>
					<Button title="Upload de arquivo" color="red" onPress={()=>{handleDocumentSelection()}}/>
				</View>
				
				<Button title="Salvar" color="green" onPress={()=>{saveItem()}}/>	
			</ViewAcess>
		</Container>
  )
}

const styles = StyleSheet.create({
  input: {
		backgroundColor:'white',
		borderRadius:5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

	button:{
		width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 18,
    borderRadius: 10,
	}
});