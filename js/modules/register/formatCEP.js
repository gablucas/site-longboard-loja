export function formatCEP(input) {
  input.endereco_cep.addEventListener("keydown", formatCEP)
  function formatCEP(e) {
    const cep = e.target.value;
    if(e.key !== "Backspace"){
      if(cep.length >= 8) {
        e.preventDefault()
      }
    }
  }
}