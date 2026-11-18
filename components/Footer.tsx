export function Footer() {
 return <footer id="contact" className="section-pad contact-slide">
  <div className="contact-copy">
   <h2>Давайте <br/>обсуждать <br/>искусство!</h2>

  </div>
  <figure className="contact-portrait">
   <svg viewBox="160 340 693 800" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Анастасия Ленская в мастерской">
    <image href="/images/anastasia-studio.jpg" width="853" height="1280"/>
   </svg>
  </figure>
   <div className="contact-links">
    <a href="https://t.me/alenskaya" target="_blank" rel="noopener noreferrer" className="contact-cta">Написать мне в Telegram <span aria-hidden="true">↗</span></a>
    <a href="https://t.me/+6geBESugnlA0N2Ji" target="_blank" rel="noopener noreferrer" className="contact-cta">Группа в Telegram <span aria-hidden="true">↗</span></a>
   </div>
 </footer>;
}
