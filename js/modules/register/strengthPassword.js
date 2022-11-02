export function strengthPassword(input) {
  const passwordBar = document.querySelector('[data-register="password-strength"]');


  input.senha.addEventListener("keydown", passwordStrength);
  function passwordStrength(e) {

    let barValue = input.senha.value.length;

    if(barValue < "4"){
      passwordBar.style.width = "0px"
    }
    
    if(barValue >= 3) {
      passwordBar.style.width = 78 / 3 + "%";
    }
    
    if(barValue >= 5) {
      passwordBar.style.width = 78 / 2 + "%";
    }
    
    if(barValue >= 9) {
      passwordBar.style.width = 78 / 1 + "%";
      
    }
    
  }
}