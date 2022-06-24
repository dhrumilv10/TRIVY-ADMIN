import React, { useState } from 'react';
import './CSS/Register.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json()

    if(data){
      window.location.href = '/login'
    } else {
      alert('Page Under Development')
    }
  }
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>
        <div className="col-md-6 bg-light">
          <div className="register d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4">Register!</h3><br />
                  <form onSubmit={registerUser}>
                    <div className="form-group mb-3">
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" value="Register">Register</button>
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