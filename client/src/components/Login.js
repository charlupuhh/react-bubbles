
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'


export default function Login(props) {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = () => {
        axios.post('http://localhost:5000/api/login', form)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/bubbles')
        })
        .catch(err => {
            console.error(err)
        })
    }

    const handleChange = e => {
      setForm({...form, [e.target.name]: e.target.value})
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }}>
            <input
                type='text'
                name='username'
                placeholder='Username'
                value={form.name}
                onChange={handleChange}
            />
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={form.password}
                onChange={handleChange}
            />
           <button type='submit'>Login</button>
        </form>
    )
} 