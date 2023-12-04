import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t',' ','m','e']}
                idx={15}
                />
            </h1>
            <p>
                I am seeking web developing opportunities - please feel free to reach out below.
            </p>
            <div className='contact-text'>
                <ul>
                    <li>
                    <a href="https://hamanncaleb127@gmail.com">hamanncaleb127@gmail.com</a>
                    </li>
                    <li>
                    <a href='tel:number'>520-405-9124</a>
                    </li>
                </ul>
            </div>
            {/* <div className='contact-form'>
            <form>
                <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input 
                        type='email' 
                        name='email' 
                        placeholder='Email' 
                        required />
                    </li>
                    <li>
                        <input 
                        placeholder='Subject' 
                        type='text' 
                        name='subject' 
                        required/>
                    </li>
                    <li>
                        <textarea 
                        placeholder='Message'
                        name='message'
                        required>  
                        </textarea>
                    </li>
                    <li>
                        <input 
                        type='submit'
                        className='flat-button'
                        value='SEND'
                        />
                    </li>
                </ul>
            </form>
            </div> */}
        </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact