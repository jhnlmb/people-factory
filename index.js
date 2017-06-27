
const personForm = document.querySelector('#personForm')


function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const deatils = document.querySelector('#details')
    const name = f.personName.value + f.personNickname.value
    
    details.innerHTML += `<strong>${name}</strong>`

}


personForm.addEventListener('submit', handleSubmit)