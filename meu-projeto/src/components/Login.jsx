import Logo from '../assets/logo.png'

const Login = () => {
  return (
    <>
        

          <div className="rounded-3xl h-screen flex flex-col items-center justify-center">

            <div className="bg-[#E2E2E2] border border-[#9B5C42] rounded-full w-32 h-32 ">
              <img src={Logo} alt="Logo" />
            </div>

            <h1 className="ml-4 text-[#9B5C42]">Que bom ter você de volta!</h1>
            <h1 className="ml-4 text-[#9B5C42]">O <span className="font-bold">café</span> já está pronto, falta só você!</h1>

            
              <form action="/" method='post' className="flex flex-col  justify-center mt-4">
                <label htmlFor="" className='text-[#A67B5B] text-2xl'>Login</label>
                <input type="text" placeholder="Email" className="border-2 border-[#6F4F28] rounded-xl w-80 h-12 mt-2 pl-4 bg-[#E2E2E2]" />

                <label htmlFor="" className='text-[#A67B5B] text-2xl'>Senha</label>
                <input type="password" placeholder="*********" className="border-2 border-[#6F4F28] rounded-xl w-80 h-12 mt-2 pl-4 bg-[#E2E2E2]" />

                <input type="submit" value="Logar" className="bg-[#9B5C42] text-white rounded-xl border-[#E2E2E2] w-80 h-12 mt-4" />
                <input type="submit" value="Criar Conta" className="text-[#9B5C42] bg-[#E2E2E2] rounded-xl w-80 h-12 border border-[#9B5C42] mt-4" />

              </form>
            

          </div>

       
    </>
  )
}   

export default Login