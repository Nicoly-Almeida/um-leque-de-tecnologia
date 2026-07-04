import HeroLogo from "@/components/hero-logo";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <span className="eyebrow">
          <span className="dot" />
          Um leque de tecnologia
        </span>

        <h1>
          Tecnologia aberta em <span className="grad-text">leque</span>.
          <br />
          <span className="serif">Para aprender, ensinar e criar.</span>
        </h1>

        <p className="lead">
          Artigos, materiais de aula e experimentos sobre desenvolvimento, dados
          e educação em tecnologia. Um espaço para desdobrar ideias complexas —
          uma lâmina de cada vez.
        </p>

        <div className="actions">
          <a className="glow-btn" href="#newsletter">
            Receber a newsletter
          </a>
          <a className="ghost-btn" href="#sobre">
            Sobre mim
          </a>
        </div>

        <div className="stats">
          <div>
            <div className="num">40+</div>
            <div className="label">artigos</div>
          </div>
          <div>
            <div className="num">12</div>
            <div className="label">cursos &amp; oficinas</div>
          </div>
          <div>
            <div className="num">6</div>
            <div className="label">anos ensinando</div>
          </div>
        </div>
      </div>

      <HeroLogo />
    </section>
  );
}
