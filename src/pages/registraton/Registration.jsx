import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export const Registration = () => {
  const [value, setValue] = useState({
    first_name: '',

    last_name: '',

    username: '',

    email: '',

    password: '',

    location: '',

    phone: '',
  })

  const zalupa = (e) => {
    e.preventDefault()
    const newItem = value
    console.log(newItem)

    // axios.post(BASE_URL, newItem).then((res) => console.log(res))
  }

  return (
    <div className="wrapper-registr">
      <header className="registr-header">
        <Link className="registr-title" to="/">
          OYNOP-JYRGA
        </Link>
      </header>
      <form className="form-register">
        <h1>Регистрация</h1>
        <div className="input-register">
          <input
            placeholder="FirstName"
            value={value.first_name}
            type="text"
            onChange={(e) => {
              setValue({ ...value, first_name: e.target.value })
            }}
          />
          <input
            placeholder="LastName"
            value={value.last_name}
            type="text"
            onChange={(e) => {
              setValue({ ...value, last_name: e.target.value })
            }}
          />
          <input
            placeholder="UserName"
            value={value.username}
            type="text"
            onChange={(e) => {
              setValue({ ...value, username: e.target.value })
            }}
          />
          <input
            placeholder="Email@...."
            value={value.email}
            type="text"
            onChange={(e) => {
              setValue({ ...value, email: e.target.value })
            }}
          />
          <input
            placeholder="Password..."
            value={value.password}
            type="password"
            onChange={(e) => {
              setValue({ ...value, password: e.target.value })
            }}
          />
          <input
            placeholder="location"
            value={value.location}
            type="text"
            onChange={(e) => {
              setValue({ ...value, location: e.target.value })
            }}
          />
          <input
            placeholder="Tel number"
            value={value.phone}
            type="number"
            onChange={(e) => {
              setValue({ ...value, phone: e.target.value })
            }}
          />
          <button type="submit" onClick={zalupa}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  )
}
