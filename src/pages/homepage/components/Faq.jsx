import { useContext } from "react";
import HomeContext from "../../../context/HomeContext";

const Faq = () => {

    const {faqData, activeFaq, setActiveFaq} = useContext(HomeContext);

    return (
        <section id='faq' className='relative'>

            <div className='md:w-[80%] mx-auto text-amber-50  '>
                <h2 className='md:text-6xl text-center mb-10'>Questions fréquentes</h2>
                <ul className="faq-list md:w-[90%] m-auto">
                    {faqData.map((item, idx) => (
                        <li key={idx} className="faq-item" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                            <div className='faq-item-content cursor-pointer border-b-2 py-10'>
                                <div className='flex items-center cursor-pointer '>
                                    <span className='text-2xl mr-6'>0{idx + 1}</span>
                                    <button className={`faq-question text-3xl cursor-pointer ${activeFaq === idx ? 'FaqActive' : ''}`} >
                                        {item.question}
                                    </button>
                                </div>
                                {activeFaq === idx && (
                                    <div className="faq-answer mt-3 text-[19px]">{item.answer}</div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Faq;