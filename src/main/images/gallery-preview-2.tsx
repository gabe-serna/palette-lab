import { ColorContext } from "@/ColorProvider";
import { useContext } from "react";

const GalleryPreview2 = () => {
  const context = useContext(ColorContext);
  const { colors } = context!;

  return (
    <div className="w-full rounded-2xl overflow-clip">
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
            <path d="m1200 800h-1200v-800h1200z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
            <path d="m0 300c165.69 0 300-134.31 300-300h-300z" />
          </clipPath>
        </defs>
        <style>{`
		.s0 { fill: hsl(var(--foreground)) } 
		.s1 { fill: hsl(from hsl(var(--primary)) h calc(s * 0.75) calc(l * 0.6)) } 
		.s2 { fill: hsl(var(--secondary)) } 
		.s3 { fill: none;stroke: hsl(var(--foreground));stroke-miterlimit:10;stroke-width: 10 } 
		.s4 { fill: hsl(var(--primary)) } 
		.s5 { fill: none;stroke: hsl(from hsl(var(--foreground)) h s calc(l * 0.85));stroke-miterlimit:10;stroke-width: 10 } 
		.s6 { fill: hsl(var(--accent)) }
    .s7 { fill: hsl(var(--accent-2)) }
    .s8 { fill: hsl(from hsl(var(--secondary)) h calc(s * 0.9) calc(l * 1.1)) }
    .s9 { fill: hsl(from hsl(var(--secondary)) h calc(s * 0.9) calc(l * 1.1)); stroke: hsl(from hsl(var(--secondary)) h calc(s * 1) calc(l * 0.75));stroke-miterlimit:8;stroke-width: 8  }
    .s10 { fill: hsl(var(--foreground)); stroke: hsl(var(--secondary));stroke-miterlimit:8;stroke-width: 8 }
    .s11 { fill: hsl(var(--foreground)); stroke: hsl(from hsl(var(--secondary)) h s calc(l * 0.75));stroke-miterlimit:8;stroke-width: 8  }
  `}</style>
        <g id="Layer 1">
          <g id="&lt;Clip Group&gt;" clip-path="url(#cp1)">
            <g id="Background">
              <path
                id="&lt;Path&gt;"
                className="s0"
                d="m1200 800h-1200v-800h1200z"
              />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <path
                  id="&lt;Path&gt;"
                  className="s1"
                  d="m1200 200c-331.4 0-600 268.6-600 600h600z"
                />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" className="s2" d="m400 800h-400v-800h400z" />
              </g>
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" className="s3" d="m66 800v-800" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" className="s3" d="m96 800v-800" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" className="s3" d="m126 800v-800" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" className="s3" d="m156 800v-800" />
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <path
                  id="&lt;Path&gt;"
                  className="s4"
                  d="m0 300c165.7 0 300-134.3 300-300h-300z"
                />
              </g>
              <g id="&lt;Group&gt;">
                <path
                  id="&lt;Path&gt;"
                  className="s4"
                  d="m800 800c0-220.9-179.1-400-400-400v400z"
                />
              </g>
              <g id="&lt;Clip Group&gt;" clip-path="url(#cp2)">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" className="s5" d="m66 800v-800" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" className="s5" d="m96 800v-800" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" className="s5" d="m126 800v-800" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" className="s5" d="m156 800v-800" />
                  </g>
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <path
                  id="&lt;Path&gt;"
                  className={colors.length < 5 ? "s1" : "s7"}
                  d="m400 621.1c-98.8 0-178.9 80.1-178.9 178.9h178.9z"
                />
              </g>
              <g id="&lt;Group&gt;">
                <path
                  id="&lt;Path&gt;"
                  className={colors.length < 6 ? "s8" : "s6"}
                  d="m1000 800c0-110.5 89.5-204.5 200-204.5 110.5 0 200 94 200 204.5z"
                />
              </g>
              <g id="&lt;Group&gt;">
                <path
                  id="&lt;Path&gt;"
                  className={colors.length < 5 ? "s9" : "s7"}
                  d="m550 400c0 82.8-67.2 150-150 150-82.8 0-150-67.2-150-150 0-82.8 67.2-150 150-150 82.8 0 150 67.2 150 150z"
                />
              </g>
              <g id="&lt;Group&gt;">
                <path
                  id="&lt;Path&gt;"
                  className={colors.length < 5 ? "s10" : "s11"}
                  d="m475 400c0 41.4-33.6 75-75 75-41.4 0-75-33.6-75-75 0-41.4 33.6-75 75-75 41.4 0 75 33.6 75 75z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default GalleryPreview2;
