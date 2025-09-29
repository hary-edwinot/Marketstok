const Automatisations = () => {
    return (
        <section id='automatisation' className="automatisation-section md:h-[900px]  md:flex items-center">
            <div className="md:w-[80%] mx-auto text-amber-50 py-20 md:flex md:justify-between ">
                <div className='md:w-[40%]'>
                    <h2 className='md:text-6xl'>Automatisez vos tâches répétitives et gagnez en productivité</h2>
                    <span className="h-[3px] w-[50%] bg-[#fb4322] inline-block rounded-4xl my-9"></span>
                    <p className="text-4xl">
                        Avec <span className="n8n-highlight">n8n</span> intégré à notre solution, vos opérations s’exécutent automatiquement sans effort supplémentaire.
                    </p>
                </div>
                <div className='md:w-[45%] mt-10 md:mt-0'>
                    <ul className="automatisation-list">
                        <li className='mb-8 text-1xl flex items-start'>
                            <img className='w-8 mr-4' src="./home/67ae88e889240c191622df8b_Icon_80_Orange_StarSquare.png" alt="" srcSet="" />
                            <p><span className="block text-2xl mb-2">Notifications intelligentes</span>  email/SMS/WhatsApp pour ruptures de stock ou commandes livrées.</p>
                        </li>
                        <li className='mb-8 text-1xl flex items-start'>
                            <img className='w-8 mr-4' src="./home/67ae88e889240c191622df8b_Icon_80_Orange_StarSquare.png" alt="" srcSet="" />
                            <p><span className="block text-2xl mb-2">Facturation & paiements</span> génération de factures automatiques et envoi aux clients.</p>
                        </li>
                        <li className='mb-8 text-1xl flex items-start'>
                            <img className='w-8 mr-4' src="./home/67ae88e889240c191622df8b_Icon_80_Orange_StarSquare.png" alt="" srcSet="" />
                            <p>
                                <span className="block text-2xl mb-2">Rapports automatiques</span> envoi quotidien/hebdo de vos ventes et pertes par email ou Google Sheets.
                            </p>
                        </li>
                        <li className='mb-8 text-1xl flex items-start'>
                            <img className='w-8 mr-4' src="./home/67ae88e889240c191622df8b_Icon_80_Orange_StarSquare.png" alt="" srcSet="" />
                            <p>
                                <span className="block text-2xl mb-2">Gestion logistique</span> assignation automatique des livreurs et suivi GPS.
                            </p>
                        </li>
                        <li className='mb-3 text-1xl flex items-start'>
                            <img className='w-8 mr-4' src="./home/67ae88e889240c191622df8b_Icon_80_Orange_StarSquare.png" alt="" srcSet="" />
                            <p>
                                <span className="block text-2xl mb-2">Intégration multi-outils</span>  connectez votre backoffice à vos CRM, Drive, outils de comptabilité ou e-commerce.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Automatisations;