import React, { useState } from 'react';
import './CSS/Login.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    if (data.user) {
      alert('Login Successful')
      window.location.href = '/dashboard'
    } else {
      alert('Please check your username and password')
    }
  }

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4">Log In!</h3><br />
                  <form onSubmit={loginUser}>
                    <div className="form-group mb-3">
                      <input id="inputEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div className="form-check custom-checkbox mb-3">
                      <input id="flexCheckDefault" type="checkbox" defaultChecked className="form-check-input" />
                        <label htmlFor="flexCheckDefault" className="form-check-label">Remember password</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" value="Login">Sign in</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
