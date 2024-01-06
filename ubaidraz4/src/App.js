import { useState } from 'react';
import './App.css';
import Card from './component/card'
import Navbar from "./component/Navbar+Herrow-section/Navbr"
import Footerer from "./component/Footer/Footer"



function App() {
  const [showdata, setShowdata] = useState(false)
  const [carddata, setCarddata] = useState()
  const data = [

    {
      image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg',
      title: "Chair",
      desc: 'Golden Easy Sport Chair'
    },
    {
      image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg',
      title: "Chair",
      desc: 'Golden Easy Sport Chair'
    },
    {
      image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg',
      title: "Chair",
      desc: 'Golden Easy Sport Chair'
    },


  ]
  return (
    <>
      <Navbar />
      <div className='mt-5'>
        {showdata ? (<div>
          <img src={carddata.image} />
          <h1>{carddata.title}</h1>
          <p>{carddata.desc}</p>
        </div>) : (<div className='container'>
          <div className='row'>
            {data.map((e) => {
              return (
                <div className='col-md-4'>
                  <Card title={e.title} desc={e.desc} image={e.image} onClick={() => {
                    setShowdata(true)
                    setCarddata(e)
                  }} />
                </div>
              )
            })}
          </div>
        </div>)}
      </div>
      <Footerer />

    </>
  );
}

export default App;
