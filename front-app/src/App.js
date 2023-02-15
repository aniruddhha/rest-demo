import logo from './logo.svg';
import st from './App.module.css';

import { useEffect, useState } from 'react'

function App() {

  const [lgn, setLgn] = useState(0)
  const [creds, setCreds] = useState({userName : '', password : ''})

  const set = name => {
    return ({ target: { value } }) => {
      setCreds(oldValues => ({...oldValues, [name]: value }));
    }
  };

  const saveFormData = async () => {

    console.log(creds)
    const response = await fetch('http://localhost:8989/api', {
      method: 'POST',
      body: JSON.stringify(creds),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`); 
    }
  }

  const onLogin = async (e) => {
    e.preventDefault()

    console.log(creds)

    try {
      await saveFormData();
      alert('Your registration was successfully submitted!');
      setCreds({
        userName: '', password : '' 
      });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  }

  return (
    <main className={`${st.formsignin} text-center`}>
      <form onSubmit={onLogin}>
        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Simple_icon_location.svg/1280px-Simple_icon_location.svg.png" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className={`${st.formFloating} form-floating`}>
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  value={creds.userName} onChange={set('userName')}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className={`${st.formFloating} form-floating`}>
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={creds.password} onChange={set('password')}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
      </main>
  );
}

export default App;
