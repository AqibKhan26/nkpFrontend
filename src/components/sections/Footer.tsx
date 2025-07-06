import { motion } from 'framer-motion';

export default function Footer() {
  const platformLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' }
  ];

  const resourceLinks = [
    { name: 'Whitepaper', href: '/whitepaper' },
    { name: 'Market', href: '/marketplace' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Join Telegram', href: 'https://t.me/nonkyotoprotocol' },
    { name: 'Follow on X', href: 'https://x.com/nonkyotoproto' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/nonkyotoprotocol/' }
  ];

  return (
    <>
    <footer class="footer">
      <div class="container">
        <div class="nav-grid">
          <div class="column text-center">
            <h4>Platform</h4>
            <ul>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>
          <div class="column text-center">
            <h4>Resources</h4>
            <ul>
              <li><a href="/whitepaper">Whitepaper</a></li>
              <li><a href="/marketplace">Market</a></li>
            </ul>
          </div>
          <div class="column text-center">
            <h4>Support</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div class="column text-center">
            <h4>Our Socials</h4>
            <ul>
              <li><a href="https://t.me/nonkyotoprotocol" target="_blank" rel="noopener noreferrer">Join Telegram</a></li>
              <li><a href="https://x.com/nonkyotoproto" target="_blank" rel="noopener noreferrer">Follow on X</a></li>
              <li><a href="https://www.linkedin.com/company/nonkyotoprotocol/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div class="office-grid">
          <div class="office usa">
            <h4>USA Office</h4>
            <p class="office-name">Midori Earth, LLC.</p>
            <p>30 N Gould St Ste 12710</p>
            <p>Sheridan, WY 82801, USA</p>
          </div>

          <div class="office center">
            <button onClick="window.location.href='/'" class="logo-button">
              <img
                src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreihzchdvovtotd3hzhlhgk2xrvir2zbuhk5zh2clxqkcaqly66yklu"
                alt="Non Kyoto Protocol"
                class="nkp-logo"
              />
              <p class="web3-text desktop-only">
                Web3 platform of
                <img
                  src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreicdsvego5v5k4ubhnyqrqh3xtliofvrcnln6odjr4iyvxymjs5vaa"
                  alt="Midori Earth"
                  class="midori-logo"
                />
              </p>
              <img
                src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreicdsvego5v5k4ubhnyqrqh3xtliofvrcnln6odjr4iyvxymjs5vaa"
                alt="Midori Earth"
                class="midori-logo mobile-only"
              />
            </button>
          </div>

          <div class="office paraguay">
            <h4>Paraguay Office</h4>
            <p>Quesada 5050, Edificio Atlas Center</p>
            <p>Piso 4, Asuncion, Paraguay</p>
          </div>
        </div>

        <div class="legal">
          <p>© 2025 Non Kyoto Protocol. All rights reserved.</p>
          <div class="legal-links">
            <a href="/terms">Terms of Service</a>
            <span>·</span>
            <a href="/privacy">Privacy Policy</a>
            <span>·</span>
            <a href="/disclaimer">Disclaimer</a>
            <span>·</span>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
    </>
  );
}