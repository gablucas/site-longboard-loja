export function characters(input) {
  return input.match(/\D+/g)[0] === input;
}