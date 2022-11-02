const accountOptions = document.querySelectorAll('[data-account="options"] li')

export function selectedOption() {

  for(const btn of accountOptions) {
    btn.addEventListener('click', activeOption)
  }

  function activeOption({currentTarget}) {
    for(const btn of accountOptions) {
      btn.classList.remove('active');
      currentTarget.classList.add('active');
    }
  }
}