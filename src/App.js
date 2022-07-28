
import { useEffect, useState } from 'react';
import {getBnbBalance, getTokenBalance, getContract, getTokenTransfers} from './services/BscScanService';
import SearchSelect from './components/SearchSelect';
import TokenSelect from './components/TokenSelect';
import './App.css';



function App() {
 
  const BNB = "0x12Eb9ef44dE5fbea1b2F5Ff7A9a375cAe9bFB2eb";
  
  const [search, setSearch] = useState({
    type: '1',
    token: BNB,
    address: ''
  });

  function onInputChange(event){
    setSearch(prevState => setSearch({...prevState, [event.target.id]: event.target.value}));
  }

  function onSubmit(event){
    event.preventDefault();
    console.log(search);
  }
  

  return (
   <div className='wrapper'>
     <header className='header'>
      <div>
        <img width="160" src="https://bscscan.com/images/logo-bscscan.svg?v=0.0.3"></img>
      </div>
     </header>
     <main role="main">
       <section className='bg-dark'>
         <div className='search'>
           <h1 className='title'>BNB Smart Chain Explorer</h1>
           <form onSubmit={onSubmit}>
             <div className='input-group'>
               <SearchSelect type={search.type} onChange={onInputChange}></SearchSelect>
               <TokenSelect default={BNB} onChange={onInputChange} />
               <input type="text" id="address" className="form-control w-50" placeholder="address" onChange={onInputChange} />
               <button type="submit" className="btn btn-primary submit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                  </svg>
               </button>
             </div>
           </form>
         </div>
       </section>
     Hellow word!
     </main>
   </div>
  );
}

export default App;
