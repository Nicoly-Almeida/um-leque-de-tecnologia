// URL do deploy do repositório de materiais (repo "nickdeve-aulas").
// Troque pela URL real ao publicar — ex.: um subdomínio "https://aulas.seudominio.com".
const AULAS_BASE = "https://aulas.umlequedetecnologia.com.br";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h9M8.5 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Courses() {
  return (
    <section className="block" id="cursos">
      <div className="head">
        <div className="eyebrow">02 — Cursos &amp; materiais</div>
        <h2>O que eu ensino.</h2>
        <p className="lead">
          Cursos e oficinas com material aberto — slides, guias e projetos pra
          você aprender fazendo. Cada trilha do leque leva a um lugar novo.
        </p>
      </div>

      <div className="courses">
        {/* Curso ativo — materiais no repo separado "nickdeve-aulas". */}
        <a
          className="course"
          href={`${AULAS_BASE}/cursos/frontend-transicao/`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="num">01</span>
          <h3>Frontend — Transição de Carreira</h3>
          <p>
            Do primeiro <span className="mono">&lt;h1&gt;</span> ao seu site no
            ar. HTML, CSS, responsividade e deploy, pra quem está migrando pra
            tech.
          </p>
          <span className="meta">pós-graduação · em andamento</span>
          <span className="go">
            Ver materiais <Arrow />
          </span>
        </a>

        <div className="course soon">
          <span className="num">02</span>
          <h3>React Native</h3>
          <p>
            Apps mobile do zero com React Native — componentes, navegação e
            publicação.
          </p>
          <span className="meta">em breve</span>
          <span className="go">Em breve</span>
        </div>

        <div className="course soon">
          <span className="num">03</span>
          <h3>Projeto de Extensão</h3>
          <p>
            Levar tecnologia pra comunidade — da ideia à entrega, na prática.
          </p>
          <span className="meta">em breve</span>
          <span className="go">Em breve</span>
        </div>
      </div>
    </section>
  );
}
