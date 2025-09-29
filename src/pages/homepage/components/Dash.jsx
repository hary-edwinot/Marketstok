const Dash = () => {
    return (
        <section id='dashboard' className='border-amber-50 border-b-2 mt-20 h-[730px] max-sm:px-6 relative bg-[url("./home/686f8135bc1517b5c5f9587f_33c4d8673233a35a952226e20c5d64e4_CTA_Mid_Dark.svg")] bg-no-repeat flex justify-center items-center text-amber-50 flex-col gap-10'>
            <div className='h-1/2 relative md:top-[-120px] text-center'>
                <h2 className='text-6xl mb-6'>Dashboard intelligent</h2>
                <p className='text-2xl md:w-[60%] mx-auto'>Analysez vos ventes, identifiez vos produits les plus rentables et anticipez vos besoins en stock.
                    Notre tableau de bord clair et visuel transforme vos chiffres en véritables leviers de croissance.</p>
            </div>
            <img src="./home/dashboard.png" alt="" srcSet="" className='md:w-full md:max-w-[65%] mx-auto absolute bottom-0' />
            <div
                className="absolute z-[-1] left-1/2 top-2/1 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[400px] rounded-full bg-[rgba(251,66,34,0.5)] blur-[80px] pointer-events-none"
            ></div>
        </section>
    )
}

export default Dash;