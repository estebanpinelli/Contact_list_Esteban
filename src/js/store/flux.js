const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			
		},

		actions: {
		
			
			loadContacts: () => {

				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/The_Agenda")
					.then(response => response.json())
					.then((response)=> {
						console.log(response)
						setStore({ contacts: response });
				})
			},



		}
	};
};

export default getState;
