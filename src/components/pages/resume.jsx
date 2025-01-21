import './resume.css'
import Objective from '../pages/objective'

const Resume = () => {
  return (
    <div className='resume'>
      <li className="resume-item">
        <span>Objective</span>
      </li>
      <li className="resume-item">
        <span>Work Experience</span>
      </li>
      <li className="resume-item">
        <span className='skills-title'>Skills</span>
      </li>
      <li className="resume-item">
        <span className='skills-title'>Education</span>
      </li>
      <li className="resume-item">
        <span className='skills-title'>Hobbies / Avocations</span>
      </li>
    </div>
  );
}

export default Resume;



{/* <nav />
<ul className="resumes">
  <li className="resume-item">
    <span>Objective</span> - 
  </li>
  <li className="resume-item">
    <span>Work Experience</span>
  </li>
  <li className="resume-item">
    <dl className='dl-01'>
      <dt className='skills-title'>Skills</dt>
      <dd>UX Design/Prototyping</dd>
      <dd>UI Builds</dd>
      <dd>database Design</dd>
      <dt className='tech-title'>technology</dt>
      <dd>javascript</dd>
      <dd>HTML</dd>
      <dd>CSS</dd>
      <dd>Node</dd>
      <dd>PostgreSQL</dd>
      <dd>Express</dd>
    </dl>
  </li>
  <li className="resume-item">
    <dl className='dl-02'>
      <dt>Education</dt>
      <dd>LIU</dd>
      <dd>Anderson</dd>
      <dd>Mercy College</dd>
      <dd>Udacity</dd>
      <dd>Pursuit</dd>
    </dl>
  </li>
  <li className="resume-item">
    <dl>
      <dt>Hobbies / Avocations</dt>
      <dd>Guitar Playing - I have been passionate about playing the guitar since the age of fourteen, and have developed into a professional-level performer.</dd>
      <dd>Music Lessons - As side project, I started teaching music 26 years ago and have taught students age 2 to adult.</dd>
      <dd>Dancing - I enjoy ballroom dance, especially Argentine Tango</dd>

    </dl>

  </li>
</ul> */}
