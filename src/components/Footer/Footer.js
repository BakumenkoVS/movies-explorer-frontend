import './Footer.css'

export default function Footer() {
   return <div className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <a href="https://practicum.yandex.ru/" className='footer__link'>Яндекс.Практикум</a>
      <a href="https://github.com/BakumenkoVS" className='footer__link'>Github</a>
      <a href="https://t.me/BakumenkoVS" className='footer__link'>Telegram</a>
      <p className='footer__year'>&copy;2020</p>
   </div>;
}
