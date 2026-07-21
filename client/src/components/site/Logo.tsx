/* ==================================================================
   Logo BIPETech — a logo original da marca, sem caixa.

   O arquivo de origem tinha 666x375 com o desenho ocupando só 419x144:
   o resto era canvas vazio. Encaixado num contêiner pequeno, a logo
   virava um ponto no meio do nada — daí a "caixinha". Aqui usamos a
   versão aparada, que preenche o próprio espaço.

   O wordmark original é preto, então existe uma variante clara para o
   dark mode. Mesmo desenho, apenas recolorido.
   ================================================================== */

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <>
      <img
        src="/logo-bipetech-lockup.png"
        alt="BIPETech"
        className={`${className} w-auto object-contain dark:hidden`}
      />
      <img
        src="/logo-bipetech-lockup-dark.png"
        alt="BIPETech"
        aria-hidden
        className={`${className} hidden w-auto object-contain dark:block`}
      />
    </>
  );
}
