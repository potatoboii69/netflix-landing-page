import './App.css'
import { useState } from "react";


export const Faq = (props) => {
    

    const [IsVisible, SetVisible] = useState(false)
    const [Style, SetStyle] = useState('normal')


    function Toggle () {
        SetVisible(!IsVisible)
        if (Style !== 'spin') {
            SetStyle('spin')
        }
        else{
            SetStyle('normal')
        }
        
    }

    return(
        <>
                <div className="container text-left text-white">
                        <>
                            <p className='p-3 faq l' onClick={Toggle}>
                                {props.question}
                                <div className='claret'>
                                    <img className={Style} src={require('./assets/images/claret2.png')} alt=''/>
                                </div>
                            </p>
                            

                            {  IsVisible && 
                            <p className='text-center p-4 faq'>
                                {props.answer}
                            </p>
                            }
                        </>
</div>
        </>
    )
}