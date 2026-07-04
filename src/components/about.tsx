export default function About() {
  return (
    <section className="about" id="sobre">
      {/* Foto — placeholder. Troque o bloco .ph por: <img src="/nick.jpg" alt="NickDev" />
          (coloque a imagem em /public). */}
      <div className="photo">
        <div className="ph">
          <span>＋</span>
          Sua foto aqui
        </div>
        {/* <img src="/nick.jpg" alt="NickDev" /> */}
      </div>

      <div className="about-text">
        <div className="eyebrow">01 — Sobre</div>
        <h2>
          Hey, eu sou a <span className="grad-text">NickDev</span>.
        </h2>

        {/* Bio — conteúdo placeholder, substituir pelo texto real. */}
        <p className="bio">
          Minha jornada na tecnologia começou aos 14 anos, quando me apaixonei por programação e dados. Desde então, transformei a curiosidade por tecnologia em uma carreira construída entre engenharia de software, experiência do usuário e educação.
        </p>
        <p className="bio">
          Ao longo dos anos tive a oportunidade de atuar em empresas como Picpay, Serasa Experian, Santander, dentre outras, desenvolvendo soluções para os setores financeiro, imobiliário e de tecnologia. Trabalhei principalmente com aplicações web de grande escala, arquitetura frontend e experiências digitais voltadas para milhões de usuários.
        </p>
        <p className="bio">
          Hoje continuo estudando e compartilhando conhecimento como mestranda em Tecnologia da Informação, professora de pós-graduação, palestrante, organizadora do Google Developer Groups João Pessoa e vice-presidente do Mulher Tech Sim Senhor, acreditando que tecnologia também é comunidade, troca de conhecimento e impacto nas pessoas.
        </p>

        <div className="info">
          <div className="card">
            <div className="top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" stroke="#E88BB8" strokeWidth="1.7" />
                <circle cx="12" cy="10" r="2.5" stroke="#E88BB8" strokeWidth="1.7" />
              </svg>
              <span className="label">Localização</span>
            </div>
            <span className="value">Brasil</span>
          </div>

          <div className="card">
            <div className="top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="9" stroke="#A98CE0" strokeWidth="1.7" />
                <path d="M12 7v5l3 3" stroke="#A98CE0" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <span className="label">Experiência</span>
            </div>
            <span className="value">6+ anos</span>
          </div>

          <div className="card">
            <div className="top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" stroke="#E88BB8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="label">Linguagens</span>
            </div>
            <span className="value">Python • JS • Dart</span>
          </div>

          <div className="card">
            <div className="top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="8.5" stroke="#A98CE0" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="4" stroke="#A98CE0" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="1" fill="#A98CE0" />
              </svg>
              <span className="label">Foco</span>
            </div>
            <span className="value">Educação em tech</span>
          </div>
        </div>

        <div className="chips">
          <span className="chip">Python</span>
          <span className="chip">JavaScript</span>
          <span className="chip">Ciência de Dados</span>
          <span className="chip">Ensino</span>
          <span className="chip">Código Aberto</span>
          <span className="chip">IA Aplicada</span>
        </div>
      </div>
    </section>
  );
}
