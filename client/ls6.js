const loginForm = document.querySelector("#login-form")



loginForm.addEventListener("click", async function(e) {
    e.preventDefault()
    e.stopPropagation()
    const inputName = document.querySelector("#input-name").value
    const inputPassword = document.querySelector("#input-password").value

    if (!inputName || !inputPassword) {
        alert("Invalid input")
        return;
    }
    const _res = await fetch('http://localhost:3000/auth/login', {
        method: "POST",
        body: JSON.stringify({
            name: inputName,
            password: inputPassword
        }),
        headers: { "Content-Type": "application/json" }
    })
    console.log(_res)
})


// 
const btGetInfo = document.querySelector('#get-my-info')

btGetInfo.addEventListener('click', async(e) => {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjYwNzdmN2NhNzE1NTIxZjIyOGIyZTIiLCJpYXQiOjE3MTc2MDA0MzEsImV4cCI6MTcxNzYwNDAzMX0.F-yD3a8CDc-2LlVKAksTz5mKvteIQdPS7hghW2pxVLw`

    await fetch(`http://localhost:3000/me?token=${token}`, {
        method: "GET",

    })
})