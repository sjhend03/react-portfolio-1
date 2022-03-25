import axios from 'axios'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import './ContactForm.css'

export const ContactForm = () => {
    const formId = '6AxxQYLo'
    const formSparkUrl = 'https://submit-form.com/' + formId
    const recaptchaRef = useRef()
    const recaptchaKey = '6Lf3QAsfAAAAAMnVL7KtAlmqMrDXx2EwT7v53ZdE'
    const [recaptchaToken, setRecaptchaToken] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSubmitting(true)
        await postSubmit()
        setSubmitting(false)
    }

    const [submitting, setSubmitting] = useState(false)

    const postSubmit = async () => {
        const payload = {
            ...formState,
            'g-recaptcha-response': recaptchaToken
        }

        try {
            const result = await axios.post(formSparkUrl, payload)
            console.log(result)
            setFormState(initialFormState)
            recaptchaRef.current.reset()
        } catch(error) {
            console.log(error)
        }
    }

    const initialFormState = {
        email: '',
        name: '',
        topic: '',
        message: ''
    }

    const [formState, setFormState] = useState(initialFormState)

    const updateName = (event) => {
        setFormState({
            email: formState.email,
            name: event.target.value,
            topic: formState.topic,
            message: formState.message
        })
        console.log(formState.name)
    }

    const updateEmail = (event) => {
        setFormState({
            email: event.target.value,
            name: formState.name,
            topic: formState.topic,
            message: formState.message
        })
        console.log(formState.email)
    }

    const updateTopic = (event) => {
        setFormState({
            email: formState.email,
            name: formState.name,
            topic:  event.target.value,
            message: formState.message
        })
        console.log(formState.topic)
    }

    const updateMessage = (event) => {
        setFormState({
            email: formState.email,
            name: formState.name,
            topic: formState.message,
            message:  event.target.value
        })
        console.log(formState.email)
    }

    const updateRecaptchaToken = (token) => {
        setRecaptchaToken(token)
    }
    return (
        <form onSubmit={handleSubmit} className='contactForm'>
                    <label htmlFor='name'>Name: </label>
                    <input type='text'
                        id='name' 
                        value={formState.name}
                        onChange={updateName}
                        placeholder='name'
                        required
                    />
                    <label htmlFor='email'>Email: </label>
                    <input type='email'
                        id='email' 
                        value={formState.email}
                        onChange={updateEmail}
                        placeholder='email@email.com'
                        required
                    />
                    <label htmlFor='topic'>Topic: </label>
                    <input type='text'
                        id='topic' 
                        value={formState.topic}
                        onChange={updateTopic}
                        placeholder='topic'
                        required
                    />
                    <label htmlFor='message'>Write me something!</label>
                    <textarea id='message' required/>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={recaptchaKey}
                        onChange={updateRecaptchaToken}
                    />
                    <input type='submit' disabled={submitting}/>
                </form>
    )
}