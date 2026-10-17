export default function About() {
  return (
    <section className="sec" id="about" aria-labelledby="about-h">
      <div className="sec-h">
        <h2 id="about-h">Who I am</h2>
      </div>
      <div className="about">
        <div className="prose">
          <p>I&apos;m a product designer for mobile and web. I like the moment a tangled problem becomes clear on screen.</p>
          <p>I learned design through a UI/UX course, guided projects and design challenges.</p>
          <p>Outside work I listen to almost everything, from Afrobeats to soul to Latin pop, and I follow a lot of series.</p>
        </div>
        <dl className="facts">
          <dt>Education</dt>
          <dd>
            B.Sc. Computer Science, First Class Honours
            <small>CGPA 4.6/5.0, Adekunle Ajasin University, 2021 to 2025</small>
          </dd>
          <dt>Award</dt>
          <dd>
            1st place, Global AI Design Challenge
            <small>Among 100+ participants, for Triply, an adaptive mobile field-trip planner for schools with real-time coordination and offline support, designed with Moonchild AI.</small>
          </dd>
          <dt>Languages</dt>
          <dd>English (fluent), Yoruba (native), Spanish (beginner)</dd>
        </dl>
      </div>
    </section>
  );
}
