export default function About() {
  return (
    <section className="about">
      <p className="tag">About Horizon</p>

      <h2>
        At Horizon, we don’t just play tennis — we live it. Since 2021, our club has been a home for players of all
        levels, from eager beginners to seasoned pros.
      </h2>

      <div className="about-cards">
        <div className="card dark">
          <h3>Professional hard courts</h3>
          <p>Tournament-grade lighting & climate control — play in perfect conditions, in any season.</p>
        </div>

        <div
          className="card image"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517649763962-0c623066013b)',
          }}
        >
          <span>Private & Group Lessons</span>
        </div>

        <div className="card light">
          <h1>100+</h1>
          <p>Pro Coaches</p>
          <small>Certified professionals ready to boost your game.</small>
        </div>
      </div>
    </section>
  );
}
