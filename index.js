
const personForm = document.querySelector('#personForm')


function handleSubmit(ev) {
    
    ev.preventDefault()
    const f = ev.target
    const deatils = document.querySelector('#details')
    const name = f.personName.value + f.personNickname.value
   
    const boldedName = document.createElement('strong')
    boldedName.textContent = name

    details.appendChild(boldedName)
}


personForm.addEventListener('submit', handleSubmit)