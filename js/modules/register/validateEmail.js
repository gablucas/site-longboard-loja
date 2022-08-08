import errorDescription from "../errorDescription.js";

export default function validateEmail(input) {
  let error = false;
  
  const email = input.email.value.toLowerCase();

  if(!email.includes("@") && !!email) {
    errorDescription(input.email, 'Está faltando o "@" no email')
    error = true;
  } else if(!email.includes(".") && input.email.value) {
    errorDescription(input.email, 'Está faltando o "." no email')
    error = true;
  }

  return error;
}