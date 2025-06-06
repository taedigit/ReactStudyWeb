import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export function Mermaid({ chart, ...props }: { chart: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ startOnLoad: false, theme: "dark" });
      const id = "mermaid-diagram-" + Math.random().toString(36).slice(2);
      // 타입 오류 없이 직접 innerHTML 할당
      const svgCode = mermaid.render(id, chart);
      ref.current.innerHTML = typeof svgCode === 'string' ? svgCode : '';
      return () => {
        if (ref.current) ref.current.innerHTML = "";
      };
    }
  }, [chart]);

  return <div ref={ref} {...props} />;
} 