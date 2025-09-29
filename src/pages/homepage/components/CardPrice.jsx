import { Card, Pgray, Price, ButtonCTA, H4, DivBlur } from "../style-tailwind/Offer";


const CardItem = ({ item, title, desc, priceDisplay, color, bg }) => {

    return (
        <Card>
            <DivBlur bg={bg}></DivBlur>
            <H4 color={color}>{title}</H4>
            <Pgray>{desc}</Pgray>
            <Price>{priceDisplay[title.toLowerCase()]}</Price>
            <ButtonCTA color={color}>Commencer par l'offre Basic</ButtonCTA>
            <ul className='p-0 text-[13px] mt-6'>
                {
                    item.items.data.map((list, index) => {
                        return <li key={index} className={`${index === item.items.data.length - 1 ? '' : 'pb-4 mb-2 border-b-1 border-[#ffffff40]'}`}>{list}</li>
                    })
                }
            </ul>
        </Card>
    )
}


const ListLoop = ({ abonment, priceDisplay }) => {
    const { list } = abonment
    const color = ['amber', 'fuchsia', 'orange']
    const bg = ['rgba(251,226,34,0.11)', 'rgba(153,34,251,0.24)', 'rgba(251,106,34,0.14)']

    return (
        list.map((item, h) => {
            return <CardItem key={h} item={item} title={item.items.offer} bg={bg[h]} desc={item.description} priceDisplay={priceDisplay} color={color[h]} />
        })
    )
}

export default ListLoop;