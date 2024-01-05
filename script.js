const btnEl = document.querySelector('button')
const spanEl = document.querySelector('span')

btnEl.addEventListener('click', () => {
    const yourName = prompt('Jak się nazywasz?')
    spanEl.textContent = yourName
})