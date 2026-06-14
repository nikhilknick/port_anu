export default function Footer() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 80
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer bg-bg-card border-t border-[rgba(201,169,110,0.15)] py-16 pb-8 relative z-[1]">
      <div className="container max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
          <div>
            <div className="font-display text-[1.4rem] font-normal mb-4 block text-text-primary">
              Anurag
            </div>
            <p className="text-[0.85rem] text-text-muted leading-[1.8] max-w-[280px]">
              Creating spaces that honour beauty, comfort, and the stories of those who live in them.
            </p>
          </div>

          <div>
            <h4 className="text-[0.75rem] tracking-[0.18em] uppercase text-text-primary mb-5">Navigate</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Expertise', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(`#${item.toLowerCase().replace(' ', '-')}`)}
                    className="text-[0.88rem] text-text-muted transition-elegant hover:text-gold"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.75rem] tracking-[0.18em] uppercase text-text-primary mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                'Full Interior Design',
                'Space Consultancy',
                '3D Visualisation',
                'Furniture Curation',
              ].map((service) => (
                <li key={service} className="text-[0.88rem] text-text-muted flex items-center gap-2">
                  <i className="fas fa-circle-dot text-gold text-[0.4rem]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(201,169,110,0.15)] pt-6 flex justify-between items-center flex-wrap gap-3 text-center md:text-left">
          <p className="text-[0.82rem] text-text-muted">
            &copy; {new Date().getFullYear()} Anurag Interiors. All rights reserved.
          </p>
          <p className="text-[0.82rem] text-text-muted font-display italic">
            <em>"Every detail matters — especially the ones you don't notice."</em>
          </p>
        </div>
      </div>
    </footer>
  )
}
