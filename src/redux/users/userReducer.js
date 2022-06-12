import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes'

const intialState = {
    numberOfCakes:10,
    loading:false,
    data:['ram','shyam','hari'],
    error:''
}

const reducer = (state=intialState,action) =>{

      switch(action.type){
          case FETCH_USERS_SUCCESS:
              return {
                  ...state,
                  data:action.payload,
                  loading:false,
                  error:''
              }

          case FETCH_USERS_REQUEST:
              return {
                  ...state,
                  loading:true,
                  error:null
              }

          case FETCH_USERS_FAILURE:
              return {
                  ...state,
                  error:action.payload,
                  data:[],
                  loading:false
              }

          default:
              return state
      }
}

export default reducer;