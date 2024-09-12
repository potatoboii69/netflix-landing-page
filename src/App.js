import { Header } from './componets/Header';
import { Section } from './componets/Section';
import { Footer } from './componets/Footer';
import { FaqContent } from './componets/FaqContent';
import { Email } from './componets/Email';
function App() {
  return (
    <>
    <div className='bg-black'>
    <Header/>
    <Section/>
    <h2 className='text-center text-white my-5'>Frequently Asked Questions</h2>
    <FaqContent/>
    <h4 className='my-5 text-center text-white'>Ready to watch? Enter your email to create or restart your membership.</h4>
    <Footer/>
    </div>

    </>
  );
}

export default App;
