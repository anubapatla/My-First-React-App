//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Welcome  from './Welcome';
import AmazingButton from './Button';
import { Hello ,HelloWithoutJSX} from './Hello';
import { Card } from './Card';
import { Product } from './Product';
import { Greeting } from './Greeting';
import { CardWrapper } from './CardWrapper';
import './App.css'
import { UserCard } from './UserCard';
import { UserDeails } from './UserDetails';
import { ProductList } from './ProductList';
import { NameList } from './NameList';
import { Alert } from './Alert';
import { NewButton } from './NewButton';

function Save(){
 return<h3>save this</h3>
}

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <NewButton/>
      <Alert> your changes have been saved!</Alert>
      <Alert type ="error">something went wrong </Alert>
      <NameList/>
      <ProductList/>
      <UserDeails name="shivayya" isOnline={true} 
      isPremium={true} isNewUser={true} role ="admin" />
       <UserDeails name="ganeshaa" isOnline={true}
        hideOffline={true} role="vip" />

      <CardWrapper title="User Profile">
        <p>Bruce Wayne </p>
        <p> batman@jl.com</p>
        <button> Edit profile</button>
      </CardWrapper>
       <h2>react course</h2>
       <Product title="gaming laptop" price={1299.99} 
       inStock={true} 
       categories={["Electronics","Computers","Gaming"]}/>
       <HelloWithoutJSX/>
       <Hello/>
       <Greeting name="neil" message="good morning"/>
       <Greeting name="cnuu" message="good night"/>
       <Greeting name="anuu" message="good day"/>
       <Welcome name="SRINU"/>
       <Save/>
       <UserCard/>
       <AmazingButton/>
       <Card/>
    </div>
  );
}
   /* <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

export default App;
