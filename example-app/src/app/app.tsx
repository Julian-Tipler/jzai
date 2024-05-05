import jsonData from '../assets/data.json'
import ExternalLink from '../components/external-link'
import { Data } from '../types/data'
import './app.scss'

function App() {
  const data: Data = jsonData

  const links = [
    {
      label: 'Email',
      href: `mailto:${data.email}`,
    },
    {
      label: 'LinkedIn',
      href: data.linkedin,
    },
    {
      label: 'Github',
      href: data.github,
    },
  ]

  return (
    <div className='app'>
      <section>
        <div>
          <div>
            <img src='./headshot.jpeg' className='logo mb-20' alt='Profile picture' />
            <h1 className='text-title mv-4'>{data.name}</h1>
            <div className='intro'>
              <p className='text-body text-body--light m-0'>{data.role}</p>{' '}
              <div className='intro-links'>
                {links.map(link => (
                  <ExternalLink key={link.label} className='text-body--small' {...link} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='mt-40'>
          <p className='text-body'>{data.description}</p>
          <br />
          <p>{data.secondaryDescription}</p>
        </div>
      </section>
      <section>
        <h2 className='text-title text-title--small mb-30'>Work Experience</h2>
        {data.workExperience.map(exp => (
          <div key={exp.role} className='work-experience mb-30'>
            <div className='work-experience-period mr-40'>
              <p className='m-0'>{exp.time}</p>
            </div>
            <div className='work-experience-description'>
              <h3 className='text-subtitle mv-1'>
                {exp.role} at{' '}
                {exp.url ? <ExternalLink href={exp.url} label={exp.company} /> : exp.company}
              </h3>
              <p className='mt-4 text-gray'>{exp.location}</p>
              <ul>
                {exp.description.map(desc => (
                  <li key={desc} className='mb-10'>
                    <p className='text-body text-body--light'>{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <section>
        <h2 className='text-title text-title--small mb-30'>Projects</h2>
        <div className='projects'>
          {data.projects.map(project => (
            <div key={project.name} className='project'>
              <div
                className={`project-image mb-20 ${project.img.offset && `project-image--offset`}`}>
                <img src={project.img.src} alt={project.img.alt} />
              </div>
              <ExternalLink className='m-0' href={project.url} label={project.name} />
              <p className='text-body text-body--small m-0'>{project.stack.join(', ')}</p>
              <p className='text-body text-body--small text-gray m-0'>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-title text-title--small mb-30'>Testimonials</h2>
        {data.testimonials.map(test => (
          <div key={test.name} className='mb-30'>
            <p className='text-body text-body--light mb-10'>“ {test.quote} ”</p>
            <p className='text-body text-body--small m-0'>{test.name}</p>
            <p className='text-body text-body--small text-gray m-0'>{test.role}</p>
          </div>
        ))}
      </section>
      <footer>
        <hr />
        <div className='footer'>
          <div>
            <p className='text-body--small text-gray'>2023 &copy; {data.name}</p>
          </div>
          <div className='footer-links'>
            {links.map(link => (
              <ExternalLink key={link.label} className='text-body--small' {...link} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
