import Cadastro from '../components/cadastro.jsx';
import Login from '../components/login.jsx';
import Trigro from '../assets/trigo.png';
import { useState } from 'react';



const autenticacao = () => {

  const [isLogin, setIsLogin] = useState(true);
  return (
    <>

    <div className='w-full h-screen flex flex-col items-center justify-center'>
      
      <button className='bg-red-300 w-20 h-20' onClick={() => setIsLogin(!isLogin)}>teste</button>
         {isLogin ? (
      <div className='grid grid-cols-2 bg-[#664730]'>

        <div className='bg-[#E7DAD1] rounded-r-3xl'>
          <Cadastro />
        </div>

        <div className='bg-[#664730] h-screen flex flex-col items-center justify-center'>
          <img src={Trigro} alt="trigo" />
        </div>

      </div>
    ) : (
      <div className="grid grid-cols-2 bg-[url('/fundo.jpg')] border-2 border-green-500 rounded-3xl">
        <div className='bg-[#E7DAD1] h-screen flex flex-col items-center justify-center'>
          <h1>sexo</h1>
        </div>

        <div className='bg-[#E7DAD1] rounded-l-3xl border-2 '>
          <Login />
        </div>

      </div>
    )}
    </div>

 





    </>
  )

}


export default autenticacao;