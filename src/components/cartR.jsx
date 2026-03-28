import { createSlice } from "@reduxjs/toolkit"
const CartSlicer = createSlice({
  name: "cart",
  initialState: {
    list: []
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const item = state.list.find(p => p.id === product.id)
      if (item &&  item.stock >1 ) {
        item.qnty += 1
        item.stock -= 1
      } else {
        state.list.push({ ...product, qnty: 1 })    
           console.log(state.list);    
      }
    },

    increment: (state, action) => {
      const item = state.list.find(p => p.id === action.payload)
      if (item &&  item.stock > 0 ) {
        item.qnty += 1
        item.stock -= 1
      }
    },
    decrement: (state, action) => {
      const item = state.list.find(p => p.id === action.payload)

      if (!item) return

      if (item.qnty > 1) {
        item.qnty -= 1
        item.stock += 1
      } else {
        state.list = state.list.filter(p => p.id !== action.payload)
      }
    },

    removeItem: (state, action) => {
      state.list = state.list.filter(p => p.id !== action.payload)
    },

    clearCart: (state) => {
      state.list = []
    }
  }
})

export const {addToCart,increment,decrement,removeItem,clearCart} = CartSlicer.actions
export default CartSlicer.reducer