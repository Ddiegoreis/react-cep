import React, { useState } from "react"

function App() {
    const [cep, setCep] = useState([])
    const [infoCep, setinfoCep] = useState([])

    /* eslint-disable react-hooks/exhaustive-deps */
    async function searchCep (){
        const response = await fetch(
            `https://viacep.com.br/ws/${cep.numero}/json/`
        )

        const data = await response.json()

        setinfoCep(data)
    }

    function handleChange(e) {
        const numeroCep = e.target.value

        setCep({numero: numeroCep})
    }

    return (
        <div>
            <h1>{ infoCep.cep ? "CEP " + infoCep.cep : "Digite seu CEP"}</h1>

            <p>{ infoCep.logradouro }</p>
            <p>{ infoCep.complemento }</p>
            <p>{ infoCep.bairro }</p>
            <p>{ infoCep.localidade }</p>
            <p>{ infoCep.uf }</p>

            <input name="inputne" type="text" onChange={handleChange}/>
            <button type="submit" onClick={() => searchCep()}>Confirmar</button>
        </div>
    )
}

export default App
