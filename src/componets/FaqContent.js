import './App.css'
import { Faq } from './Faq'
import { Item } from './assets/content/QandA'
export const FaqContent = () => {
    return(
        Item.map((item)=> {
            return(
                <>
                <Faq question={item.question} answer={item.answer}/>
                </>
)}))

}

