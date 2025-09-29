import { FeaturContainer, Icon, P } from '../style-tailwind/Featurs';
import { ArrowIcon } from './Icons';

const Featurs = () => {
    return (
        <FeaturContainer id='features'>
            <div className='md:w-[45%]'>
                <ul >
                    <li className='mb-9'>
                        <Icon> <ArrowIcon /> Gestion de stock intelligente </Icon>
                        <P>
                            Ajoutez, mettez à jour et suivez vos produits en quelques clics.
                            Recevez des alertes automatiques lorsque les niveaux sont bas pour éviter les ruptures.
                        </P>
                    </li>
                    <li className='mb-9'>
                        <Icon> <ArrowIcon /> Tableau de bord en temps réel </Icon>
                        <P>
                            Visualisez ventes, bénéfices et ruptures sur des graphiques clairs.
                            Filtrez par période ou produit pour prendre des décisions rapides et data-driven.
                        </P>
                    </li>
                    <li className='mb-9'>
                        <Icon><ArrowIcon /> Suivi logistique </Icon>
                        <P>
                            Suivez vos livreurs en temps réel grâce au GPS intégré.
                            Optimisez les tournées et réduisez les délais en assignant automatiquement les courses.
                        </P>
                    </li>
                    <li className='mb-9'>
                        <Icon><ArrowIcon /> Factures & commandes </Icon>
                        <P>
                            Génération automatique des factures à la validation des commandes.
                            Envoi et archivage automatisés pour gagner du temps et limiter les erreurs comptables.
                        </P>
                    </li>
                </ul>
            </div>
            <div className='md:w-[45%] relative'>
                <img className='md:w-[90%]' src="./home/dashboard-navbar.png" alt="" srcSet="" />
                <div
                    className="absolute z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[rgba(251,66,34,0.5)] blur-[80px] pointer-events-none"
                ></div>
            </div>
        </FeaturContainer>
    )
}

export default Featurs;