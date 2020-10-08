export const state = () => ({
    list: [],
  })
  
  export const mutations = {
    set_arr(state, val) {
      console.log("set_arr", val)
      state.drawer = val
    },
    set_arr(state, val) {
      state.list.push(val)
    },
  }
  