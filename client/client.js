const button = document.querySelector("#user-button")
const table = document.querySelector("#user-table")


if (button) {
    button.addEventListener("click", async(_) => {
        const response = await fetch('http://localhost:3000/user')
        const users = await response.json()
        table.innerHTML = JSON.stringify(users)
    })
}


const addButton = document.querySelector("#post-button")
const newTable = document.querySelector("#new-user-table")

if (addButton) {
    addButton.addEventListener("click", async() => {
        //
        const newUser = {
            name: `Student ${Math.round(Math.random()*1000)}`,
            active: true,
            password: '123456'
        }

        await fetch(`http://localhost:3000/user`, {
            body: newUser,
            method: "POST"
        })

        const response = await fetch('http://localhost:3000/user')
        const users = await response.json()
        newTable.innerHTML = JSON.stringify(users)


    })
}