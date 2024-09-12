import './App.css'
import { Email } from './Email.js'

export const Footer = () => {

    const ListOne = [
        {   id: 1, name: 'Questions? Contact us.', url: ''   },
        {   id: 2, name: 'Contact us.', url: ''   },
        {   id: 3, name: 'FAQ', url: ''   },
        {   id: 4, name: 'Investor Relations', url: ''   },
        {   id: 5, name: 'Privacy', url: ''   },
        {   id: 6, name: 'Speed Test', url: ''   }
]

    const ListTwo = [
        {   id: 1, name: 'Help Center', url: ''   },
        {   id: 2, name: 'Jobs', url: ''   },
        {   id: 3, name: 'Cookie Preferences', url: ''   },
        {   id: 4, name: 'Legal Notices', url: ''   },
    ]

    const ListThree = [
        {   id: 1, name: 'Account', url: ''   },
        {   id: 2, name: 'Ways to Watch', url: ''   },
        {   id: 3, name: 'Corporate Information', url: ''   },
        {   id: 4, name: 'Only on Netflix', url: ''   }
    ]

    const ListFour = [
        {   id: 1, name: 'Media Center', url: ''   },
        {   id: 2, name: 'Terms of Use', url: ''   },
        {   id: 3, name: 'Contact Us', url: ''   }
    ]
    return(
        <>
        <Email/>
        <div className='container-fluid pt-5' id='grid-div'>
            <div className='list'>
        {
            ListOne.map((item) => {
                return(
                <ul className=''>
                    <li key={item.id}><a href={item.url}>{item.name}</a></li>
                </ul>
)})}
            </div>
        <div className='list'>
        { ListTwo.map((item) => {
                return(
                <ul className=''>
                    <li key={item.id}><a href={item.url}>{item.name}</a></li>
                </ul>
)})}
        </div>
        <div className='list'>
        { ListThree.map((item) => {
                return(
                <ul className=''>
                    <li key={item.id}><a href={item.url}>{item.name}</a></li>
                </ul>
)})}
        </div>
        <div className='list'>
        { ListFour.map((item) => {
                return(
                <ul className=''>
                    <li key={item.id}><a href={item.url}>{item.name}</a></li>
                </ul>
)})}
        </div>

        </div>
        </>
)}