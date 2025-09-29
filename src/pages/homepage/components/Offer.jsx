import { useContext } from "react";
import { OfferSection, H2, Button, CardContainer } from "../style-tailwind/Offer";
import ListLoop from "./CardPrice";
import HomeContext from "../../../context/HomeContext";

const Offer = () => {
    const { abonment, handleAbonmentChange, priceDisplay } = useContext(HomeContext);
    return (
        <OfferSection>
            <div className='text-amber-50'>
                <H2>Choisissez l’offre qui vous convient</H2>
                <p className='text-center text-2xl md:w-[75%] mx-auto'>Comparez nos formules et choisissez celle qui correspond le mieux à vos besoins, avec la possibilité de payer en Euro ou en Ariary pour plus de flexibilité.</p>
                <div>
                    <div className='mt-6 w-[220px] mx-auto border-2  border-amber-50 text-amber-50 p-[4px]   rounded-[15px]  flex items-center justify-between'>
                        <Button
                            onClick={() => handleAbonmentChange('month')}
                            $abonmentSelected={abonment.type === 'month'}>
                            Mois
                        </Button>
                        <Button
                            onClick={() => handleAbonmentChange('year')}
                            $abonmentSelected={abonment.type === 'year'}>
                            Année
                            <span className='ml-1 bg-orange-400 text-amber-50 p-1 font-bold rounded-[5px] '>-10%</span>
                        </Button>
                    </div>
                    <CardContainer>
                        <ListLoop abonment={abonment} priceDisplay={priceDisplay} />
                    </CardContainer>
                </div>
            </div>
        </OfferSection>
    )
}

export default Offer;