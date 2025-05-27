import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='title'>
            <h1>Let’s Get in Touch</h1>
            <p>I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, proposal, or just want to say hi — feel free to reach out!</p>
        </div>
        <div className='contactForm'>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label><br/>   
                <label>
                    Email:
                    <input type="email" name="email" />
                </label><br/> 
                <label>
                    Subject:
                    <input type="text" name="suject" />
                </label><br/> 
                <label>
                    Message:
                    <input type="text" name="message" />
                </label><br/> 
                <input type="submit" value="Send Message ✉️" />
            </form>
        </div>
        <div className='contactInfo'> 
            <h1>📞 Direct Contact Info</h1>
            <ul>
                <li>Email: yourname@example.com</li>
                <li>Location: [City, Country] (e.g., Mumbai, India)</li>
            </ul>
        </div>
        <div className='social'>
            <h1>🔗 Social Media </h1>
            <p>Follow Me On</p>
            <p>Let’s connect and grow our networks together!</p>
            <ul>
                <li>[GitHub]</li>
                <li>[LinkedIn]</li>
            </ul>
        </div>
        <div>
            <h1>📄 Resume Download</h1>
            <p>Looking to collaborate or hire me?</p>
            <a href=''>👉 Download My Resume</a>
        </div>
    </div>
  )
}

export default Contact