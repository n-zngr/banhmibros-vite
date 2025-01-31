import { useState, useEffect } from 'react';

const Footer: React.FC = () => {
    const [lang, setLang] = useState<'en' | 'de'>('en');
  
    useEffect(() => {
      // Set language based on browser settings
      const browserLang = navigator.language.split('-')[0];
      setLang(browserLang === 'de' ? 'de' : 'en');
  
      // Update content based on language
      const updateContent = () => {
        const elements = document.querySelectorAll<HTMLElement>('[data-en][data-de]');
        elements.forEach((element) => {
          element.textContent = element.dataset[lang] || '';
        });
      };
  
      updateContent();
  
      // Re-run updateContent if lang changes
      window.addEventListener('languagechange', updateContent);
      return () => window.removeEventListener('languagechange', updateContent);
    }, [lang]);
    
    return (
        <section className="relative flex flex-col p-16 bg-black-300 text-white-500">
            <div className="absolute top-0 left-0 h-0.5 w-full bg-gray-500"></div>
            <div className="flex flex-row gap-32">
                <div className="flex flex-col gap-1">
                    <p>Banh Mi Bros</p>
                    <p>Metzgergasse 15</p>
                    <p>9000 St.Gallen</p>
                    <a href="mailto:hello@banh-mi-bros.ch">hello@banh-mi-bros.ch</a>
                    <a href="tel:0784809223">078 480 92 23</a>
                </div>
                <div className="flex flex-col gap-1">
                    <a href="/menu">Menu</a>
                    <a href="/order">Order</a>
                    <a href="/process">Process</a>
                    <a href="/location">Location</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="flex flex-col gap-1">
                    <a href="/menu">Instagram</a>
                    <a href="/order">TikTok</a>
                    <a href="/process">FaceBook</a>
                </div>
                <div>
                    <a href="">Site by <span className="font-medium text-white-500">ZNGR</span></a>
                </div>
            </div>
            <div className="py-16">
                <a href="" data-en="Imprint" data-de="Impressum"></a>
                <a href="" data-en="Privacy Policy" data-de="Datenschutz"></a>
            </div>
        </section>
    )
}

export default Footer;