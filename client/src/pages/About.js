import React from 'react'

const About = () => {
  return (
    <div>
        <div className='anoutMe'>
            <h1>👋 About Me</h1>
            <p>Hi, I’m Jainil, a passionate and dedicated Full-Stack Developer with a strong interest in building dynamic and user-friendly web applications. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and love turning ideas into reality through clean, efficient code.</p>
        </div>
        <div className='journey'>
            <h1>💡 My Journey</h1>
            <p>My coding journey began with a curiosity for how websites work. What started as a hobby soon became a passion, leading me to dive deep into JavaScript and modern web technologies. Over time, I’ve worked on several personal and collaborative projects, learning something new with each line of code.</p>
        </div>
        <div className='WhatIDo'>
            <h1>🛠️ What I Do</h1>
            <p>I build full-stack web applications that are fast, responsive, and intuitive. Whether it’s crafting beautiful frontend interfaces with React or developing powerful backend APIs with Node.js, I enjoy every step of the development process.</p>
            <p>My main areas of focus:</p>
            <ul>
                <li>Frontend development with React.js</li>
                <li>Backend APIs using Express.js & Node.js</li>
                <li>MongoDB database integration</li>
                <li>RESTful API design</li>
                <li>Clean, scalable code and reusable components</li>
            </ul>
        </div>
        <div className='skills'>
            <h1>🧠 Skills & Technologies</h1>
            <p>Frontend: React.js, HTML5, CSS3, JavaScript, SCSS, Tailwind CSS</p>
            <p>Backend: Node.js, Express.js, REST API</p>
            <p>Database: MongoDB, Mongoose</p>
            <p>Tools & Platforms: Git, GitHub, VS Code, Postman, Vercel, Render</p>
            <p>Other: Axios, React Router, Nodemailer, Multer</p>
        </div>
        <div>
            <h1>🎓 Education & Certifications</h1>
            <p>📘 B.Tech in Computer Science – [Your University Name] (20XX – 20XX)</p>
        </div>
        <div className='intrests'>
            <h1>🎯 Interests</h1>
            <p>When I’m not coding, you’ll find me:</p>
            <ul>
                <li>Exploring new tech tools</li>
                <li>Watching tech talks and developer conferences</li>
                <li>Gaming or creating game mods</li>
                <li>Reading about startups and entrepreneurship</li>
            </ul>
        </div>
        <div className='achivments'>
            <h1>🏆 Achievements</h1>
            <p>Built a portfolio site with blog and contact integration</p>
            <p>Contributed to open-source projects on GitHub</p>
            <p>Consistently ranked among top contributors in online coding challenges</p>
        </div>
        <div>
            <h1 className='connect'>🤝 Let’s Connect</h1>
            <p>I’m always open to new opportunities, collaborations, or just a friendly chat.
Check out my [Contact Page] to get in touch or [Download Resume] to learn more about my background.</p>
        </div>
    </div>
  )
}

export default About