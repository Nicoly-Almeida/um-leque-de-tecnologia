import { HERO_LOGO_SVG } from "@/components/hero-logo-svg";

// Injeta o SVG inline para preservar a classe `.fanblades` (animação `fanfold`
// definida no globals.css). Só o leque anima; o wordmark "NickDev" fica parado.
export default function HeroLogo() {
  return (
    <div className="herostage" aria-hidden="true">
      <span className="glow" />
      <div dangerouslySetInnerHTML={{ __html: HERO_LOGO_SVG }} />
    </div>
  );
}
