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

        <div className="stats">
          <div>
            <div className="num">+1000</div>
            <div className="label">alunos vivendo a TI</div>
          </div>
          <div>
            <div className="num">7</div>
            <div className="label">anos de experiência</div>
          </div>
          <div>
            <div className="num">4</div>
            <div className="label">anos ensinando</div>
          </div>
        </div>
      </div>

      <HeroLogo />
    </section>
  );
}
