import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import m from "./imgs/couple-hiking-nanos-plateau-slovenia-against-blue-sky.jpg"
import n from "./imgs/3917754.png"

function App() {
  return (
    <div className="App">
      <div className='ty'><img src={m}></img>LOGO</div>
        <nav>
  <ul>
     
    <li><Link className='k' to="/">HOME</Link></li>
    <li><Link className='k' to="/statue">ABOUT</Link></li>
    <li><Link className='k' to="/history">GALLARY</Link></li>
    <li><Link className='k' to="/history">CONTACT</Link></li>
    <li><Link className='k' to="/images">PACKAGE</Link></li>
  
    
  </ul>
</nav>
<div className='fg'><img src={n} className="h"></img><input type="text" placeholder='search'></input></div>
<div className='n'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien quis quam sollicitudin pretium. Nullam fringilla urna eu mauris congue, at ultricies ipsum commodo.

</div>
<div className='ui'>
  <div className='flex'>
    <div className='chil'> <div class="kl"> pe omnis rerum, necessitatibus repellat libero deserunt qui!pe omnis rerum, necessitatibus repellat libero deserunt qui!</div>
<input type="checkbox" class="btn"></input></div>
    <div  className='chil'> <div class="kl"> pe omnis rerum, necessitatibus repellat libero deserunt qui!pe omnis rerum, necessitatibus repellat libero deserunt qui!</div>
<input type="checkbox" class="btn"></input></div>
    <div  className='chil'> <div class="kl"> pe omnis rerum, necessitatibus repellat libero deserunt qui! pe omnis rerum, necessitatibus repellat libero deserunt qui!</div>
<input type="checkbox" class="btn"></input></div>

  </div>
</div>
    </div>
  );
}

export default App;
