
const Cadastro = () => {
  return (
    
      <div className="rounded-3xl h-screen flex flex-col items-center justify-center">
            
                    <form action="/" method='post' className="flex flex-col  justify-center mt-4 gap-4">
                      <label htmlFor="" className='text-[#A67B5B] text-2xl'>Cadastro</label>
                      <input type="text" name="nome" id="nome" placeholder="Nome completo..." className="border-2 border-[#6F4F28] rounded-lg w-80 h-12 pl-4 bg-[#E2E2E2] placeholder:text-[#9B5C42] text-[#9B5C42]" />
                      <input type="text" name="email" id="email" placeholder="Email..." className="border-2 border-[#6F4F28] rounded-lg w-80 h-12 pl-4 bg-[#E2E2E2] placeholder:text-[#9B5C42] text-[#9B5C42]" />
                      <input type="password" name="senha" id="senha" placeholder="*********" className="border-2 border-[#6F4F28] rounded-lg w-80 h-12 pl-4 bg-[#E2E2E2] placeholder:text-[#9B5C42] text-[#9B5C42]" />
                      <input type="password" name="confirmar_senha" id="confirmar_senha" placeholder="*********" className="border-2 border-[#6F4F28] rounded-lg w-80 h-12 pl-4 bg-[#E2E2E2] placeholder:text-[#9B5C42] text-[#9B5C42]" />

                      <p className="text-sm text-[#9B5C42] cursor-pointer hover:text-[#7A4530]">Já tem cadastro?</p>
                      <input type="submit" value="Cadastrar" className="bg-[#9B5C42] text-white rounded-xl border-2 border-[#E2E2E2] w-80 h-12 text-xl cursor-pointer hover:bg-[#7A4530]" />
                    
                    </form>
                </div>


  )
}

export default Cadastro