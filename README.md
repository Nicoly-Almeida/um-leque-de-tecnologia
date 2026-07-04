# Um leque de tecnologia — Site NickDev

Site pessoal do **NickDev** em **Next.js** (App Router + TypeScript). Landing dark
com navbar, hero (logo-leque animada), seção "Sobre" e footer — fiel ao handoff
de identidade visual da marca.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **CSS global** com design tokens (sem framework de UI, pra bater 100% com os
  valores do handoff — muito `clamp()`)
- Fontes **Space Grotesk**, **Newsreader** (itálico) e **JetBrains Mono** via
  Google Fonts (`@import` no `globals.css`)

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Build de produção:

```bash
npm run build
npm start
```

## Estrutura

```
um-leque-de-tecnologia/
├── public/
│   └── logo-nickdeve.svg        # logo oficial (navbar + footer)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # metadata + brilhos ambientes
│   │   ├── page.tsx             # compõe as seções
│   │   └── globals.css          # tokens, animações e estilos
│   └── components/
│       ├── navbar.tsx
│       ├── hero.tsx
│       ├── hero-logo.tsx        # injeta o SVG animado inline
│       ├── hero-logo-svg.ts     # SVG da logo (com o leque animável)
│       ├── about.tsx
│       └── footer.tsx
├── next.config.mjs · tsconfig.json · package.json
```

## O leque que abre e fecha (animação da marca)

O diferencial da marca é o **leque da logo dobrando** como um leque de papel.
Isso vive em `hero-logo-svg.ts`: o grupo das lâminas tem `class="fanblades"` e é
envolvido por três `<g>` (`translate(540 0)` → grupo animado → `translate(-540 0)`),
técnica à prova de Safari (sem `transform-origin`). A animação `fanfold` está no
`globals.css`. Só o leque anima; o wordmark "NickDev" fica parado.

O SVG é injetado **inline** (via `dangerouslySetInnerHTML`) de propósito — é o que
permite a animação CSS agir sobre o grupo interno. Como é conteúdo estático e
próprio, é seguro.

## O que trocar (placeholders sinalizados)

- **Foto do "Sobre"** — `src/components/about.tsx`: troque o bloco `.ph` por
  `<img src="/nick.jpg" alt="NickDev" />` e coloque a imagem em `public/`.
- **Bio** — os 2 parágrafos em `about.tsx` são placeholder.
- **Dados dos cards** (Localização, Experiência, Linguagens, Foco) e **stats do
  hero** (40+ artigos, etc.) — ajuste com os números reais.
- **Links sociais** — em `footer.tsx` (hoje apontam pra `github.com`, etc.).
- **Newsletter / âncoras** — os botões apontam pra `#newsletter`; ligue ao seu
  fluxo real quando existir.

## Deploy

**Vercel (recomendado):** importe o repositório em vercel.com → deploy automático
a cada `git push`. Adicione seu domínio nas configurações do projeto.

## Nota sobre fontes

As fontes são carregadas por `@import` no CSS (simples e sem dependência de build).
Se quiser a otimização do Next (self-host automático, zero layout shift), dá pra
migrar pra [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
depois — o código já usa as variáveis `--font-display`, `--font-serif` e
`--font-mono`, então é só trocar a origem.
