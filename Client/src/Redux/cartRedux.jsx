import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct : (state,action)=>{
      console.log(action)
      state.quantity-=1;
      state.products=state.products.filter((item)=>item._id !==action.payload._id);
      state.total -= (action.payload.price * action.payload.quantity)
    }
  },
});

export const { addProduct,deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;