

const Login = (props) => {

          
          console.log(props);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here

        

    }

    return (
        <section className="h-[100vh] flex items-center justify-center  text-gray-100 login-bg" onSubmit={handleSubmit}>
            <div className="shadow-md w-full max-w-md py-8 border border-[#605d5b] p-4 rounded-2xl">
                <h1 className="text-4xl font-bold mb-6">Se connecter</h1>
                <div className="flex flex-row gap-4">
                    <button className="text-amber-50 mb-4 cursor-pointer rounded-[8px] bg-[#22201f] p-3 w-[100%] text-[14px]" type="submit">Se connecter avec google</button>
                    <button className="text-amber-50 cursor-pointer rounded-[8px] bg-[#22201f] p-3 w-[100%] mb-4 text-[14px]" type="submit">Se connecter facebook</button>
                </div>
                <p className="text-center text-gray-400 mt-4 flex items-center justify-center mb-5"><span className="inline-block h-[1px] w-[40%] bg-gray-600 mr-1"></span>Ou <span className="ml-1 line-block h-[1px] w-[40%] bg-gray-600"></span> </p>
                <form className="">
                    <div className="mb-4">
                        <label className="block mb-2 text-[15px]" htmlFor="email">Email</label>
                        <input className="border border-[#605d5b] p-3 w-full rounded-[8px]" type="email" id="email" />
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <label className="block mb-2 text-[15px]" htmlFor="password">Mot de passe</label>
                            <p className="text-[15px]">mot de passe oublié?</p>
                        </div>
                        <input className="border border-[#605d5b] p-3 w-full rounded-[8px]" type="password" id="password" />
                    </div>
                    <button className="text-amber-50 cursor-pointer rounded-[8px] bg-[#fb4322] p-3 w-[100%]" type="submit">Se connecter</button>
                    <p className="text-center text-gray-400 mt-4">Vous n'avez pas de compte? <a href="#" className="text-amber-50">Inscrivez-vous</a></p>
                </form>
            </div>
        </section>
    )
}

export default Login