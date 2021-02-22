const apptwo = {
    // namespaced : true,
    state :{
        moduleTwoArr : []

    },
    getters: {
        getModuleTwoArr : state => {
            return state.moduleTwoArr
        }
    },
    actions :{
        addAppTwoState(context,payload){
            console.log('addAppTwoState action from apptwo store module working ...')
            context.commit('ADDAPPTWOSTATE',payload)
        },
        delAppTwoState(context,payload){
            console.log('delAppTwoState action from apptwo store module working ...')
            context.commit('DELAPPTWOSTATE',payload)
        },
        updateAPPTWOSTATE(context,payload){
            console.log('updateAPPTWOSTATE action from apptwo store module working ...')
            context.commit('UPDATEAPPTWOSTATE',payload)
        },
        delAllAppTwoState({commit}){
            commit('DELALLAPPTWOSTATE')
       }
    },
    mutations:{
        ADDAPPTWOSTATE(state,payload){
            console.log('ADDAPPTWOSTATE mutation from apptwo store module working ...')
            state.moduleTwoArr.push(payload)
        },
        DELAPPTWOSTATE(state,payload){
            console.log('DELAPPTWOSTATE mutation from apptwo store module working ...')
            return state.moduleTwoArr = state.moduleTwoArr.filter(state => state.id != payload)
        },
        UPDATEAPPTWOSTATE(state,payload){
            console.log('UPDATEAPPTWOSTATE mutation from apptwo store module working ...')
            var obj_index = state.moduleTwoArr.findIndex(obj=> obj.id === payload.id)
            state.moduleTwoArr[obj_index].name = payload.name
        },
        DELALLAPPTWOSTATE(state){
            state.moduleTwoArr = []
        }
    }
}
export default apptwo