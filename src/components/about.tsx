export default function About() {
  return (
    <section className="about" id="sobre">
      {/* Foto da seção Sobre. Arquivo em /public/nicoly-almeida.jpeg */}
      <div className="photo">
        <img src="/nicoly-almeida.jpeg" alt="Nicoly Almeida — NickDev" />
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

        {/* <div className="chips">
          <span className="chip">Python</span>
          <span className="chip">JavaScript</span>
          <span className="chip">Ciência de Dados</span>
          <span className="chip">Ensino</span>
          <span className="chip">Código Aberto</span>
          <span className="chip">IA Aplicada</span>
        </div> */}
      </div>
    </section>
  );
}
