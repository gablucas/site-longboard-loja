export function cpf(input) {
  return input.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

export function date(input) {
  return input.value.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$3/$2/$1');
}