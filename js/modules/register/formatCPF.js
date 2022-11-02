export function formatCPF(input) {
  
  // Validar CPF
  input.cpf.addEventListener('keydown', validateCPF);
  function validateCPF(e) {
    const cpf = e.target.value
    const numeros = ["0","1","2","3","4","5","6","7","8","9"];

    if(e.key !== "Backspace") {
      if(cpf.length === 3 || cpf.length === 7) {
        e.target.value = cpf.concat(".")
      }else if(cpf.length === 11) {
        e.target.value = cpf.concat("-")
      }
      
      if(!numeros.some((numero => e.key === numero))) {
        e.preventDefault();
      }
    }
  }
}