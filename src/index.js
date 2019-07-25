import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [person, setPerson] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://api.github.com/users/ryanboris')
      .then(response => setData(response.data))
  }, [])

  return (
    <>
      <div>{console.log(data)}</div>
      <form
        onSubmit={e => {
          e.preventDefault()
          setPerson([...person, email, name])
          setName('')
          setEmail('')
        }}
      >
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
      <div>
        Name: {name} ----- Email: {email}
      </div>
      {person.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
