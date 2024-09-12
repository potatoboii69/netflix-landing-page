import './App.css'
import { Email } from './Email.js'

export const Header = () => {
    return(
        <>
        <div className="container-fluid pt-5">
        <div className='d-flex flex-row justify-content-center align-items-center my-5'>
        <h1 className='netflix mx-5 me-auto'>NETFLIX</h1>
        <button className='p-3 mx-5 ms-auto button text-white'>Sign In</button>
      </div>
        <div className='container pt-5 py-5 text-white text-center'>
          <div>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
        <div className='input pt-5'>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        </div>
          </div>
        </div>   
        <Email/>
      </div>
</>
    )
}