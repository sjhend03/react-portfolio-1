import './Contact.css'
import { Calendar } from '../Calendar/Calendar'
import { ContactForm } from '../ContactForm/ContactForm'

export const Contact = () => {
    return (
        <div className='contact'>
            <ContactForm/>
            <Calendar />
        </div>
    )
}