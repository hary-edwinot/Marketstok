import { SolutionContainer, SolutionContent, H2, H3, P } from "../style-tailwind/Solutions";

const Solutions = () => {
    return (
        <SolutionContainer id='solutions' >
            <SolutionContent>
                <div className='md:w-[50%]'>
                    <H2>Fini les pertes de temps et les erreurs de gestion.</H2>
                </div>
                <div className='solution-image md:w-[45%]'>
                    <H3>Vous jonglez entre les stocks, les commandes et les livraisons ?</H3>
                    <span className='h-[3px] w-[50%] bg-[#fb4322] inline-block rounded-4xl my-9'></span>
                    <P>
                        Notre application centralise toutes vos opérations dans une seule plateforme claire et intuitive.
                        Moins de stress, plus de contrôle.
                    </P>
                </div>
            </SolutionContent>
        </SolutionContainer>
    )
}

export default Solutions;