import cartStorage from "./cartStorage.js";

export default function finalizePayment() {
  cartStorage((cart) => {
    console.log(cart)
  })
}