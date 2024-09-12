import './App.css'
import { content } from './assets/content/content'

export const Section = () => {

    return(
        <>
            <div className='section-container'>
        {
            content.map((item) => {
                return(
                    <>
                    <div className='section'>
                        <div className='section-text'>
                            <h3>{item.heading}</h3>
                            <p>{item.message}</p>

                        </div>
                        <div className='img'>
                            <img src={require('./assets/images/'+item.path)} alt="" />
                        </div>
                    </div>

                    </>
                )
            })
        }
        </div>
        </>
    )
}