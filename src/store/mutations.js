export default {
  ADDCOUNTER(state,payload){
    payload.count++
  },
  ADDCART(state,payload){
    state.cartList.push(payload)
  },
  CHECKEDCHANGE(state,payload){
    payload.checked = !payload.checked
  },
  CHECKEDALLCHANGE(state,payload){
    state.cartList.forEach(item => {
      item.checked = !payload
    })
  }
}