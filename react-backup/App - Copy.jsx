import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'Portofolio', 'Kemampuan', 'Hubungi'];

  const portfolios = [
    {
      title: "Catatanku",
      img: "img/portfolio/catatanku.jpeg",
      visitLink: "https://catatanku.vercel.app",
      githubLink: "https://github.com/rahmanqolbi"
    },
    {
      title: "Website Portofolio Tailwind",
      img: "img/portfolio/portofolio-tailwind.png",
      visitLink: "https://rahmanqolbi.vercel.app/",
      githubLink: "https://github.com/rahmanqolbi"
    },
    {
      title: "Website Berita Bootstrap",
      img: "img/portfolio/berita-bootstrap.png",
      visitLink: "https://whistleable-varieti.000webhostapp.com",
      githubLink: "https://github.com/rahmanqolbi"
    },
    {
      title: "Website Tiket Pesawat",
      img: "img/portfolio/tiket-pesawat.png",
      visitLink: "/",
      githubLink: "/"
    }
  ];

  const skills = [
    { name: "HTML", img: "img/skills/html.png" },
    { name: "CSS", img: "img/skills/css.png" },
    { name: "Javascript", img: "img/skills/javascript.png" },
    { name: "Bootstrap", img: "img/skills/bootstrap.png" },
    { name: "Tailwind", img: "img/skills/tailwind.png" },
    { name: "Flutter", img: "img/skills/flutter.png" }
  ];

  const contacts = [
    { platform: "Email", value: "rahmanqolbi@gmail.com", img: "img/contact/email.png" },
    { platform: "Facebook", value: "Rahman Qolbi", img: "img/contact/facebook.png" },
    { platform: "Instagram", value: "@rahmanqolbi", img: "img/contact/instagram.png" }
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const getSectionClass = (sectionName) => {
    const baseClass = "card items-center justify-center flex-grow";
    return activeTab === sectionName 
      ? `${baseClass} flex-column` 
      : `${baseClass} hidden`;
  };

  return (
    <div className="App">
      <header className='flex-row navbar items-center justify-space-between'>
        <a href="/" className="logo">rhmnq</a>
        <nav className={` ${isMenuOpen ? 'menu-bg' : ''}`}>
          <ul className={`nav-list ${isMenuOpen ? 'menu-toggle' : ''}`}>
            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  href={`#${item}`} 
                  className={`tab ${activeTab === item ? 'active' : ''}`} 
                  onClick={(e) => {
                    e.preventDefault(); 
                    handleTabClick(item);
                  }}
                  style={{ textAlign: 'center' }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="menu" onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </nav>
      </header>

      <main className="flex-row container">
        
        {/* === SECTION HOME === */}
        <article id="Home" className={getSectionClass('Home')}>
          <h2>Halo Semua...</h2>
          <h1>Saya <span>Rahman Qolbi</span></h1>
          <h2>Web Developer</h2>
          <p>Masih terus belajar dan terus belajar</p>
        </article>

        {/* === SECTION PORTOFOLIO === */}
        <article id="Portofolio" className={getSectionClass('Portofolio')}>
          <h1 className="text-center">Portofolio</h1>
          
          <div className="flex-row" style={{flexWrap: 'wrap', justifyContent: 'center'}}> 
            {portfolios.map((portfolio, index) => (
              <div className="card flex-column items-center portofolio-item" key={index}>
                <img className="portofolio-img" src={portfolio.img} alt={portfolio.title} />
                <p>{portfolio.title}</p>
                <div className="flex-row">
                  <a href={portfolio.visitLink} target="_blank" rel="noreferrer" className="btn">Visit</a>
                  <a href={portfolio.githubLink} target="_blank" rel="noreferrer" className="btn">Github</a>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* === SECTION KEMAMPUAN === */}
        <article id="Kemampuan" className={getSectionClass('Kemampuan')}>
          <h1 className="text-center">Kemampuan</h1>
          <div className="flex-row" style={{flexWrap: 'wrap', justifyContent: 'center'}}>
             {skills.map((skill, index) => (
                <div className="card flex-column items-center skill-item" key={index}>
                    <img className="skill-img" src={skill.img} alt={skill.name} />
                    <p>{skill.name}</p>
                </div>
             ))}
          </div>
        </article>

        {/* === SECTION HUBUNGI === */}
        <article id="Hubungi" className={`card justify-center ${activeTab === 'Hubungi' ? '' : 'hidden'}`}>
           <div className={activeTab === 'Hubungi' ? 'flex-column items-center w-full' : 'hidden'}>
              <h1 className="text-center">Hubungi Saya</h1>
              {contacts.map((contact, index) => (
                <div className="card flex-row contact-item" key={index}>
                    <img className="contact-img" src={contact.img} alt={contact.platform} />
                    <div className="flex-column contact-text justify-center">
                        <p className="bold">{contact.platform}</p>
                        <p>{contact.value}</p>
                    </div>
                </div>
              ))}
           </div>
        </article>

        {/* === ASIDE BIODATA === */}
        <aside id="biodata" className="flex-column items-center card">
          <img src="img/biodata.png" alt="Foto Profil" className="biodata-img" />
          <h1>Rahman Qolbi</h1>
          <hr className="solid" />
          <h2>Web Developer</h2>
        </aside>

      </main>

      <footer className="text-center">
        <p>Copyright © 2022 &mdash; Rahman Qolbi</p>
      </footer>
    </div>
  );
}

export default App;