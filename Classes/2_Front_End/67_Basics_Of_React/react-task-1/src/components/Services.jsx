export default function Services() {
  return (
    <section className="services">
      <div className="services-text">
        <p className="tag">Services</p>
        <h2>Explore our full range of coaching, training, and tennis experiences.</h2>
        <button>Explore More ↗</button>
      </div>

      <div className="services-cards">
        <div
          className="service-card"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf)',
          }}
        >
          <span>Training Programs</span>
        </div>

        <div
          className="service-card"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1502877338535-766e1452684a)',
          }}
        >
          <span>Hourly Court Rental</span>
        </div>
      </div>
    </section>
  );
}
