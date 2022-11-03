export function ApiGet(type:string,id:string=''){



	if(type == 'selectAudioFile'){
		return fetch(`http://10.0.2.2:9876/${type}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
	}

	if(type == 'selectAllAudioFile'){
		return fetch(`http://10.0.2.2:9876/${type}`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
	}

	if(type == 'deleteAudioFile'){
		return fetch(`http://10.0.2.2:9876/${type}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
	}
}