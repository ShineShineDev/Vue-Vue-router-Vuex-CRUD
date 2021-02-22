
const appone = {
    // namespaced : true,
    state: {
        moduleOneArr: [],
        appOneStorageKey : 'Appone'
    },
    getters:{
        getModuleOneArr : state => {
            return state.moduleOneArr
        }

    },
    actions :{
        initLocalStorage(context){
            console.log('localstorage initiliaztion action from appone store module working ...')
            context.commit('INITLOCALSTORAGE')
        },
        addItemTolocalStorage(context){
            context.commit('ADDITEMTOLOCALSTORAGE')
        },
        addAppOneState(context,payload){
            console.log('addAppOneState action from appone store module working ...')
            context.commit('ADDAPPONESTATE',payload)
        },
        delAppOneState(context,payload){
            console.log('delAppOneState action from appone store module working ...')
            context.commit('DELAPPONESTATE',payload)
        },
        updateAppOneState(context,payload){
            console.log('updateAppOneState action from appone store module working ...')
            context.commit('UPDATEAPPONESTATE',payload)
        },
        delAllAppOneState({commit}){
             commit('DELALLAPPONESTATE')
        }
    },
    mutations:{
        ADDAPPONESTATE(state,payload){
            console.log('ADDAPPONESTATE mutation from appone store module working ...')
            state.moduleOneArr.push(payload)
            this.dispatch('addItemTolocalStorage')
        },
        DELAPPONESTATE(state,payload){
            console.log('DELAPPONESTATE mutation from appone store module working ...')
            state.moduleOneArr = state.moduleOneArr.filter(state =>  state.id != payload)
            this.dispatch('addItemTolocalStorage')
        },
        UPDATEAPPONESTATE(state,payload){
            console.log('UPDATEAPPONESTATE mutation from appone store module working ...')
            var obj_index = state.moduleOneArr.findIndex(obj => obj.id === payload.id)
            state.moduleOneArr[obj_index].name = payload.name
            state.moduleOneArr[obj_index].isEdit = false
            this.dispatch('addItemTolocalStorage')
        },
        INITLOCALSTORAGE(state){
            console.log('localstorage initialization mutation from appone store module working ...')
            state.moduleOneArr = JSON.parse(localStorage.getItem(state.appOneStorageKey)) || []
        },
        ADDITEMTOLOCALSTORAGE(state){
            localStorage.setItem(state.appOneStorageKey,JSON.stringify(state.moduleOneArr))
        },
        
        DELALLAPPONESTATE(state){
            state.moduleOneArr = []
            this.dispatch('addItemTolocalStorage')
        },
        
    }
}
export default  appone