import React from 'react'
import Hero from '../components/Hero'
const Home = () => {
  return (
    <div>
        <Hero/>
        <div className='briefIntor'>
            <h1>👋 Brief Introduction</h1>
            <p>I'm a full stack developer with a love for building sleek, performance-driven web apps. With a foundation in JavaScript, React.js, Node.js, and MongoDB, I bring ideas to life — from concept to launch. I’m currently focusing on building scalable applications and deepening my knowledge in cloud and DevOps technologies.</p>
            <p>When I’m not coding, you’ll find me exploring tech blogs, working on side projects, or gaming 🎮.</p>
        </div>
        <div className='skills'>
            <h1>🛠️ Skills Snapshot</h1>
            <ul>
                <li>Frontend: React.js, HTML5, CSS3, JavaScript, Redux, Tailwind CSS</li>
                <li>Backend: Node.js, Express.js, REST APIs</li>
                <li>Database: MongoDB, Mongoose</li>
                <li>Tools & Platforms: Git, GitHub, Vercel, Netlify, Postman</li>
                <li>Soft Skills: Problem-solving, Communication, Team Collaboration</li>
            </ul>
        </div>
        <div className='projects'>
            <h1>💼 Featured Projects</h1>
            <p>work progress...</p>
        </div>
        <div>
            <h1>Ready to bring your ideas to life?</h1>
            <p>Let’s build something amazing together. Whether it’s freelance work, collaboration, or just a chat — I’m open to opportunities.</p>
            <button>Let’s Connect</button>
        </div>
        <div className='social'>
            <h1>🌐 Social Media Links</h1>
            <ul>
                <li>GitHub: github.com/yourusername</li>
                <li>LinkedIn: linkedin.com/in/yourusername</li>
                <li>Email: your.email@example.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Home