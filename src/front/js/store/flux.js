import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			auth:true,
			badges:undefined,
			signupStatus:false,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			mercadoPago:{}
		},
		actions: {

			login: async (email, password) => {
				try {
					let data = await axios.post(process.env.BACKEND_URL + '/api/login',{
						"email":email,
						"password":password
					})
					console.log(data);
					localStorage.setItem("id", data.data.user_id)
					localStorage.setItem("name", data.data.user_name)
					localStorage.setItem("lastName", data.data.user_last_name)
					localStorage.setItem("email", data.data.user_email)					
					localStorage.setItem("token", data.data.access_token)
					setStore({auth:true})
					// setStore({loginUserId:data.data.user_id})
					
				
					
					return true;
				} catch (error) {
					console.log(error)
					return false;
				}
			},
			
			SignupUser: async (name, last_name, email, password, is_active) => {			
				try {
					let data = await axios.post(process.env.BACKEND_URL + '/api/signup',{
						name: name, 
						last_name: last_name,
						email: email,
						password: password,
						is_active: is_active
					})
					setStore({ signupStatus: true });
					//localStorage.setItem("token", data.data.access_token); 
				} catch (error) {
					console.log(error);
					setStore({ auth: false });
				}
			},

			logout: () => {
				localStorage.removeItem("token")
				localStorage.removeItem("id")
				localStorage.removeItem("name")
				localStorage.removeItem("lastName")
				localStorage.removeItem("email")				
				setStore({auth:false})
			},

			/* empieza código de cecilia valid-token */
			validToken: async () => {
				let token = localStorage.getItem("token")
				try {
					if (token) {
						let data = await axios.get(process.env.BACKEND_URL +'/valid-token',{
							"headers":{'Authorization': 'Bearer '+token}
						})
						if (data.status === 200) {
							setStore({auth:true})
							return true;
						}
					}else {
						setStore({auth:false})
							return false;
					}
					
				} catch (error) {
					console.log(error)
					if (error.response.status === 401) {
						setStore({auth:false})
					}
					return false;
				}
			},
			
			//mercado Pago 
			pagoMercadoPago:async(precio)=>{
				try{
					let response = await axios.post(process.env.BACKEND_URL + '/api/preference',{
						precio:precio
					})
					console.log(response.data)
					setStore({mercadoPago: response.data})
				} catch(error){
					console.error(error)
				}
			},
			
			// COMPONENTS BY NAME : BADGE
			componentsByName: async () => {
				try{
					const response = await fetch(process.env.BACKEND_URL + "/api/components/" + "badge");
					const data = await response.json();
					setStore({badges:data.results})
				} catch(error){
					console.error(error)
				}
			},

			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
