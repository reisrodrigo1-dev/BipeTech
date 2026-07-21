import { useEffect, useRef, useState } from "react";

/**
 * Dispara uma única vez quando o elemento entra na viewport.
 *
 * Traz rede de segurança deliberada: se o elemento já estiver visível no
 * mount, dispara na hora; e se o IntersectionObserver nunca disparar
 * (viewport atípica, renderer sem suporte real, aba em background),
 * um timeout garante que o conteúdo não fique invisível para sempre.
 */
export function useInViewOnce<T extends HTMLElement>(opts?: {
  threshold?: number;
  rootMargin?: string;
  fallbackMs?: number;
}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const trigger = () => {
      if (done) return;
      done = true;
      setInView(true);
    };

    if (!("IntersectionObserver" in window)) {
      trigger();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && trigger()),
      { threshold: opts?.threshold ?? 0.15, rootMargin: opts?.rootMargin ?? "0px 0px -10% 0px" }
    );
    io.observe(el);

    if (el.getBoundingClientRect().top < window.innerHeight) trigger();
    const fallback = window.setTimeout(trigger, opts?.fallbackMs ?? 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

/** true quando o usuário pediu menos movimento. */
export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
