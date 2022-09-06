export function characters(input) {

  let error = false;
    if(input.match(/\D+/g) === null || input.match(/\D+/g)[0] !== input) {
      error =  true;
    }

  return error;
}