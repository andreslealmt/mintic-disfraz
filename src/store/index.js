
import { createStore } from 'vuex'

export default createStore({
  state: {
    url:'http://localhost:8080',
    categoria:'',
    arregloCards:[],
    cards:[]
  },
  mutations: {    
    setCategoria(state, payload){
      let arreglo = [];
      if(payload == "todo"){
        state.cards = state.arregloCards;
      }else{
        state.arregloCards.forEach((element) => {
          if(element.category != null){
             element.category.name == payload ? arreglo.push(element): element;          
          }       
        });
        state.cards = arreglo;      
        state.categoria = payload;  
      }
          
    },
    setCards(state, payload){
      state.cards = payload;
      state.arregloCards = payload;
    }
  },
  actions: {
     async cargarCards({commit}){      
        //console.log(this.state.url)
      try {
        const res = await fetch(`${this.state.url}`+'/api/Costume/all');
        const datos = await res.json();
        //console.log(datos)
        commit('setCards',datos);
        
      } catch (error) {
        console.log(error)
      }

    }
  },
  modules: {
  }
})
