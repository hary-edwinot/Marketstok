import { SectionContainer, HeroContent, H1, P, ButtonPrimary, ButtonSecondary } from "../style-tailwind/Hero";

const Hero = () => {
    return (
        <>
            <SectionContainer>
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-[rgba(251,67,34,0.25)] blur-[80px] z-0 pointer-events-none"
                ></div>
                <HeroContent>
                    <H1>Supervisez vos stocks et vos livraisons.</H1>
                    <P>Gérez vos produits, suivez vos ventes en temps réel, et optimisez vos livraisons grâce à un backoffice intelligent conçu pour les marchands et les logisticiens modernes.</P>
                    <div className='mt-10 mx-auto text-center'>
                        <ButtonPrimary>Essayer gratuitement</ButtonPrimary>
                        <ButtonSecondary>Voir une démo</ButtonSecondary>
                    </div>
                </HeroContent>
            </SectionContainer>
            <img src='./home/home-marchands.png' alt="Marchand" srcSet="" />
        </>
    )
}

export default Hero;