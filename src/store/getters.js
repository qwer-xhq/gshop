export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  checkedAllState(state) {
    if (state.cartList.length === 0) return false
    // filter会遍历完数组，返回满足条件的元素组成的新数组
    // 如果选中商品个数小于总商品个数，全选按钮状态为false
    // return !(state.cartList.filter(item => item.checked).length<state.cartList.length)
    
    // find查找数组第一个满足条件元素的就返回元素值
    // return !state.cartList.find(item => !item.checked)
    
    // some遍历数组找到有一个满足条件的返回true
    // return !state.cartList.some(item => !item.checked)

    // every遍历数组时有一个不满条件的返回false
    return state.cartList.every(item => item.checked)
  },
  checkedLength(state) {
    return state.cartList.filter(item => item.checked).length
  }
}