import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- KOMPONEN HALAMAN ---

// Kita tambahkan style={{ flexGrow: 1 }} pada setiap <article> 
// agar card selalu memanjang mengisi tinggi container kiri.

const Home = () => (
  <article id="Home" className="card flex-column items-center justify-center" style={{ flexGrow: 1 }}>
    <h2>Halo Semua...</h2>
    <h1>Saya <span>Rahman Qolbi</span></h1>
    <h2>Web Developer</h2>
    <p>Masih terus belajar dan terus belajar</p>
  </article>
);

const Portofolio = ({ portfolios }) => (
  <article id="Portofolio" className="card flex-column items-center justify-center" style={{ flexGrow: 1 }}>
    <h1 className="text-center">Portofolio</h1>
    <div className="flex-row" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
      {portfolios.map((item, index) => (
        <div className="card flex-column items-center portofolio-item" key={index}>
          <img className="portofolio-img" src={item.img} alt={item.title} />
          <p>{item.title}</p>
          <div className="flex-row">
            <a href={item.visitLink} target="_blank" rel="noreferrer" className="btn">Visit</a>
            <a href={item.githubLink} target="_blank" rel="noreferrer" className="btn">Github</a>
          </div>
        </div>
      ))}
    </div>
  </article>
);

const Kemampuan = ({ skills }) => (
  <article id="Kemampuan" className="card flex-column items-center justify-center" style={{ flexGrow: 1 }}>
    <h1 className="text-center">Kemampuan</h1>
    <div className="flex-row" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
      {skills.map((skill, index) => (
        <div className="card flex-column items-center skill-item" key={index}>
          <img className="skill-img" src={skill.img} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  </article>
);

// PERBAIKAN PADA HUBUNGI:
// 1. Tambahkan 'flex-column items-center' di className article agar bisa ditengah.
// 2. Tambahkan style={{ flexGrow: 1 }} agar card tinggi penuh.
const Hubungi = ({ contacts }) => (
  <article id="Hubungi" className="card flex-column items-center justify-center" style={{ flexGrow: 1 }}>
    <div className="flex-column items-center" style={{ width: '100%' }}>
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
);

// --- KOMPONEN NAVBAR ---
const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`flex-row navbar items-center justify-space-between container ${isMenuOpen ? 'menu-bg' : ''}`}>
      <Link to="/" className="logo">rhmnq</Link>
      <ul className={`nav-list ${isMenuOpen ? 'menu-toggle' : ''}`}>
        <li className="nav-item"><Link to="/" className={`tab ${isActive('/')}`} onClick={toggleMenu}>Home</Link></li>
        <li className="nav-item"><Link to="/portofolio" className={`tab ${isActive('/portofolio')}`} onClick={toggleMenu}>Portofolio</Link></li>
        <li className="nav-item"><Link to="/kemampuan" className={`tab ${isActive('/kemampuan')}`} onClick={toggleMenu}>Kemampuan</Link></li>
        <li className="nav-item"><Link to="/hubungi" className={`tab ${isActive('/hubungi')}`} onClick={toggleMenu}>Hubungi</Link></li>
      </ul>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
};

// --- APP UTAMA ---

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const portfolios = [
    { title: "Catatanku", img: "img/portfolio/catatanku.jpeg", visitLink: "https://catatanku.vercel.app", githubLink: "https://github.com/rahmanqolbi" },
    { title: "Website Portofolio Tailwind", img: "img/portfolio/portofolio-tailwind.png", visitLink: "https://rahmanqolbi.vercel.app/", githubLink: "https://github.com/rahmanqolbi" },
    { title: "Website Berita Bootstrap", img: "img/portfolio/berita-bootstrap.png", visitLink: "https://whistleable-varieti.000webhostapp.com", githubLink: "https://github.com/rahmanqolbi" },
    { title: "Website Tiket Pesawat", img: "img/portfolio/tiket-pesawat.png", visitLink: "/", githubLink: "/" }
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

  return (
    <Router>
      <div className="App">
        <header>
            <Navbar toggleMenu={() => setIsMenuOpen(prev => !prev)} isMenuOpen={isMenuOpen} />
        </header>

        {/* PERUBAHAN DI CONTAINER UTAMA:
            1. Tidak menggunakan 'items-center' (biarkan stretch ke bawah).
        */}
        <main className="flex-row container">
          
          {/* BAGIAN KIRI: Router Outlet */}
          <div style={{ 
            flex: 5, 
            marginRight: '40px', 
            minWidth: 0, 
            display: 'flex',        
            flexDirection: 'column', 
            // Kita HAPUS justifyContent: 'center' di sini 
            // agar <article> dengan flexGrow: 1 yang mengontrol posisinya (mengisi penuh).
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portofolio" element={<Portofolio portfolios={portfolios} />} />
              <Route path="/kemampuan" element={<Kemampuan skills={skills} />} />
              <Route path="/hubungi" element={<Hubungi contacts={contacts} />} />
            </Routes>
          </div>

          {/* BAGIAN KANAN: Sidebar Biodata */}
          {/* Tambahkan justifyContent: 'center' di sini.
              Karena container ini akan tertarik panjang (stretch),
              kita perlu memaksa isinya tetap di tengah vertikal.
          */}
          <aside 
            id="biodata" 
            className="flex-column items-center card"
            style={{ justifyContent: 'center' }} 
          >
            <img src="img/biodata.png" alt="Foto Profil" className="biodata-img" />
            <h1>Rahman Qolbi</h1>
            <hr className="solid" />
            <h2>Web Developer</h2>
          </aside>

        </main>

        <footer className="text-center">
          <p>Copyright © {currentYear} &mdash; Rahman Qolbi</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;