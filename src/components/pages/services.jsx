import '../pages/services.css' 

const Services = () => {
  return (
    <div className='main'>
      <nav />
      <ul className="services">
        <li className="service-item">
          <span>Frontend Engineering</span>
        </li>
        <li className="service-item">
          <span>Backend Engineering</span>
        </li>
        <li className="service-item">
          <span>Database Design</span>
        </li>
        <li className="service-item">
          <span>UI/UX Design</span>
        </li>
      </ul>
    </div>
  );
}

export default Services;
