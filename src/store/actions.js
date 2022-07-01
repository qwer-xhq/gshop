export default {
  addCart(context,payload){
    return new Promise((resolve, reject) => {
      // find方法里的回调函数如果返回为true，find返回回调函数的参数item
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if(oldProduct){
        context.commit('ADDCOUNTER',oldProduct)
        resolve('添加物品数量+1')
      }else{
        payload.count = 1
        payload.checked = true
        context.commit('ADDCART',payload)
        resolve('添加购物车成功')
      }
    })
  },
  checkedChange(context,payload){
    context.commit('CHECKEDCHANGE',payload)
  },
  checkedAllChange(context,payload){
    // let checkedAllState = context.state.cartList.filter(item => item.checked).length<context.state.cartList.length
    context.commit('CHECKEDALLCHANGE',payload)
  }
}