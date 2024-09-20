const ColorSwirl = () => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595 842">
      <defs>
        <radialGradient
          id="g1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-6.06,9.269,-9.269,-6.06,462.659,464.41)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(27.056,45.558,-45.558,27.056,488.343,539.772)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(43.956,74.015,-74.015,43.956,215.531,519.605)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g4"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-111.669,-95.002,95.002,-111.669,407.763,325.993)"
        >
          <stop
            offset="0"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.6))"
          />
          <stop offset="1" stop-color="hsl(var(--secondary))" />
        </radialGradient>
        <radialGradient
          id="g5"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(138.36,0,0,138.36,433.709,319.727)"
        >
          <stop offset="0" stop-color="hsl(var(--primary-foreground))" />
          <stop offset=".945" stop-color="hsl(var(--foreground))" />
        </radialGradient>
        <radialGradient
          id="g6"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(10.862,13.39,-13.39,10.862,91.845,366.921)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g7"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(15.666,10.794,-10.794,15.666,392.785,314.174)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g8"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.666,8.147,-8.147,3.666,56.424,320.419)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g9"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.812,4.978,-4.978,1.812,38.174,333.785)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g10"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.63,9.973,-9.973,3.63,452.969,336.164)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g11"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.102,4.07,-4.07,3.102,470.508,530.567)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.6))"
          />
        </radialGradient>
        <radialGradient
          id="g12"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.584,4.351,-4.351,1.584,505.863,266.169)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g13"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(4.297,11.804,-11.804,4.297,180.737,352.407)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g14"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.338,9.169,-9.169,3.338,98.088,432.898)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g15"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.113,3.838,-3.838,3.113,193.112,340.686)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g16"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(6.55,8.075,-8.075,6.55,196.51,409.313)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g17"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(64.79,-28.03,28.03,64.79,249.668,546.594)"
        >
          <stop offset="0" stop-color="hsl(var(--primary-foreground))" />
          <stop offset="1" stop-color="hsl(var(--foreground))" />
        </radialGradient>
        <radialGradient
          id="g18"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(46.767,-20.232,20.232,46.767,215.177,531.414)"
        >
          <stop offset="0" stop-color="hsl(var(--primary-foreground))" />
          <stop offset="1" stop-color="hsl(var(--foreground))" />
        </radialGradient>
        <radialGradient
          id="g19"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(30.015,-12.985,12.985,30.015,230.12,496.701)"
        >
          <stop offset="0" stop-color="hsl(var(--primary-foreground))" />
          <stop offset="1" stop-color="hsl(var(--foreground))" />
        </radialGradient>
        <radialGradient
          id="g20"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(48.861,64.111,-64.111,48.861,399.036,311.392)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.6))"
          />
        </radialGradient>
        <radialGradient
          id="g21"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-32.629,-27.759,27.759,-32.629,394.046,292.411)"
        >
          <stop
            offset="0"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.6))"
          />
          <stop offset="1" stop-color="hsl(var(--secondary))" />
        </radialGradient>
        <radialGradient
          id="g22"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-14.184,16.65,-16.65,-14.184,383.309,299.905)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g23"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(121.874,100.981,-100.981,121.874,284.754,482.848)"
        >
          <stop
            offset="0"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.6))"
          />
          <stop offset=".885" stop-color="hsl(var(--secondary))" />
          <stop offset=".906" stop-color="hsl(var(--secondary))" />
        </radialGradient>
        <radialGradient
          id="g24"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-4.239,-3.606,3.606,-4.239,427.769,658.919)"
        >
          <stop
            offset="0"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.6))"
          />
          <stop offset="1" stop-color="hsl(var(--secondary))" />
        </radialGradient>
        <radialGradient
          id="g25"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(64.929,109.329,-109.329,64.929,408.267,505.32)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g26"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(21.013,35.383,-35.383,21.013,431.68,379.733)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g27"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-22.513,-19.153,19.153,-22.513,432.714,386.592)"
        >
          <stop
            offset="0"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.6))"
          />
          <stop offset="1" stop-color="hsl(var(--secondary))" />
        </radialGradient>
        <radialGradient
          //blue
          id="g28"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(34.634,95.145,-95.145,34.634,322.511,370.448)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g29"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(31.69,41.581,-41.581,31.69,262.729,432.787)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.6))"
          />
        </radialGradient>
        <radialGradient
          id="g30"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(42.115,55.26,-55.26,42.115,172.2,313.439)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.6))"
          />
        </radialGradient>
        <radialGradient
          id="g31"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(14.65,19.223,-19.223,14.65,113.342,316.834)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.6))"
          />
        </radialGradient>
        <radialGradient
          id="g32"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.012,.015,-0.015,.012,403.883,436.617)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g33"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.054,.067,-0.067,.054,403.807,436.525)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g34"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(56.996,70.265,-70.265,56.996,395.962,542.446)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g35"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(64.203,84.241,-84.241,64.203,403.632,544.891)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.6))"
          />
        </radialGradient>
        <radialGradient
          id="g36"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(32.164,54.159,-54.159,32.164,255.398,254.556)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g37"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(17.687,23.207,-23.207,17.687,333.305,199.058)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.6))"
          />
        </radialGradient>
        <radialGradient
          id="g38"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(10.555,17.773,-17.773,10.555,327.057,182.425)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g39"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(17.169,47.165,-47.165,17.169,156.209,259.471)"
        >
          <stop offset="0" stop-color="hsl(var(--secondary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g40"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(16.971,28.576,-28.576,16.971,137.397,236.255)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g41"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(12.393,15.279,-15.279,12.393,158.849,226.18)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g42"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.728,4.595,-4.595,3.728,458.791,354.713)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g43"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(10.867,7.488,-7.488,10.867,437.309,315.567)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g44"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(6.952,10.172,-10.172,6.952,444.236,491.771)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g45"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(15.687,19.34,-19.34,15.687,211.553,308.484)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g46"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(17.31,21.34,-21.34,17.31,211.609,301.298)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g47"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(13.439,9.259,-9.259,13.439,353.187,359.265)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g48"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(5.204,4.312,-4.312,5.204,169.202,208.036)"
        >
          <stop
            offset="0"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.6))"
          />
          <stop offset=".885" stop-color="hsl(var(--secondary))" />
          <stop offset=".906" stop-color="hsl(var(--secondary))" />
        </radialGradient>
        <radialGradient
          id="g49"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(14.37,17.716,-17.716,14.37,287.656,334.465)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g50"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-9.926,-8.444,8.444,-9.926,195.933,209.107)"
        >
          <stop
            offset="0"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.6))"
          />
          <stop offset="1" stop-color="hsl(var(--secondary))" />
        </radialGradient>
        <radialGradient
          id="g51"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.643,7.841,-7.841,3.643,174.359,165.855)"
        >
          <stop offset="0" stop-color="hsl(var(--primary-foreground))" />
          <stop offset=".945" stop-color="hsl(var(--foreground))" />
        </radialGradient>
        <radialGradient
          id="g52"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(4.958,6.505,-6.505,4.958,190.502,178.868)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.6))"
          />
        </radialGradient>
        <radialGradient
          id="g53"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(7.634,12.854,-12.854,7.634,125.488,556.168)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g54"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-32.55,-27.692,27.692,-32.55,125.692,487.787)"
        >
          <stop
            offset="0"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.6))"
          />
          <stop offset="1" stop-color="hsl(var(--secondary))" />
        </radialGradient>
        <radialGradient
          id="g55"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(5.447,6.715,-6.715,5.447,112.678,470.407)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g56"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(2.497,4.204,-4.204,2.497,112.461,451.376)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g57"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(57.189,96.296,-96.296,57.189,349.168,509.992)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g58"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(80.448,55.429,-55.429,80.448,308.885,571.879)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--primary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g59"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-33.381,30.695,-30.695,-33.381,494.427,602.738)"
        >
          <stop offset="0" stop-color="hsl(var(--primary-foreground))" />
          <stop offset=".945" stop-color="hsl(var(--foreground))" />
        </radialGradient>
        <radialGradient
          id="g60"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(11.427,9.468,-9.468,11.427,333.997,532.494)"
        >
          <stop
            offset="0"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.6))"
          />
          <stop offset=".885" stop-color="hsl(var(--secondary))" />
          <stop offset=".906" stop-color="hsl(var(--secondary))" />
        </radialGradient>
        <radialGradient
          id="g61"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(2.154,5.919,-5.919,2.154,477.999,547.639)"
        >
          <stop offset="0" stop-color="hsl(var(--primary))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--secondary)) h s calc(l*0.5))"
          />
        </radialGradient>
        <radialGradient
          id="g62"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(9.965,12.285,-12.285,9.965,136.97,315.243)"
        >
          <stop offset="0" stop-color="hsl(var(--accent))" />
          <stop
            offset="1"
            stop-color="hsl(from hsl(var(--accent)) h s calc(l*0.5))"
          />
        </radialGradient>
      </defs>
      <style>
        {`
		.s0 { fill: url(#g1) } 
		.s1 { fill: url(#g2) } 
		.s2 { fill: url(#g3) } 
		.s3 { fill: hsl(var(--accent-2)) } 
		.s4 { fill: url(#g4) } 
		.s5 { fill: url(#g5) } 
		.s6 { fill: url(#g6) } 
		.s7 { fill: url(#g7) } 
		.s8 { fill: url(#g8) } 
		.s9 { fill: url(#g9) } 
		.s10 { fill: hsl(var(--foreground)) } 
		.s11 { fill: url(#g10) } 
		.s12 { fill: url(#g11) } 
		.s13 { fill: url(#g12) } 
		.s14 { fill: url(#g13) } 
		.s15 { fill: url(#g14) } 
		.s16 { fill: url(#g15) } 
		.s17 { fill: url(#g16) } 
		.s18 { fill: url(#g17) } 
		.s19 { fill: url(#g18) } 
		.s20 { fill: url(#g19) } 
		.s21 { fill: url(#g20) } 
		.s22 { fill: url(#g21) } 
		.s23 { fill: url(#g22) } 
		.s24 { fill: url(#g23) } 
		.s25 { fill: url(#g24) } 
		.s26 { fill: url(#g25) } 
		.s27 { fill: url(#g26) } 
		.s28 { fill: url(#g27) } 
		.s29 { fill: url(#g28) } 
		.s30 { fill: url(#g29) } 
		.s31 { fill: url(#g30) } 
		.s32 { fill: url(#g31) } 
		.s33 { fill: url(#g32) } 
		.s34 { fill: url(#g33) } 
		.s35 { fill: url(#g34) } 
		.s36 { fill: url(#g35) } 
		.s37 { fill: url(#g36) } 
		.s38 { fill: url(#g37) } 
		.s39 { fill: url(#g38) } 
		.s40 { fill: hsl(var(--accent-2)) } 
		.s41 { fill: url(#g39) } 
		.s42 { fill: url(#g40) } 
		.s43 { fill: url(#g41) } 
		.s44 { fill: url(#g42) } 
		.s45 { fill: url(#g43) } 
		.s46 { fill: url(#g44) } 
		.s47 { fill: url(#g45) } 
		.s48 { fill: url(#g46) } 
		.s49 { fill: url(#g47) } 
		.s50 { fill: none;stroke: hsl(var(--accent-2));stroke-width: 1.3 } 
		.s51 { fill: url(#g48) } 
		.s52 { fill: url(#g49) } 
		.s53 { fill: url(#g50) } 
		.s54 { fill: url(#g51) } 
		.s55 { fill: url(#g52) } 
		.s56 { fill: url(#g53) } 
		.s57 { fill: url(#g54) } 
		.s58 { fill: url(#g55) } 
		.s59 { fill: url(#g56) } 
		.s60 { fill: url(#g57) } 
		.s61 { fill: url(#g58) } 
		.s62 { fill: url(#g59) } 
		.s63 { fill: url(#g60) } 
		.s64 { fill: url(#g61) } 
		.s65 { fill: url(#g62) } 
	`}
      </style>
      <g id="_Artboards_"></g>
      <g id="Layer 1">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s0"
              d="m462.7 473c-8.3 6.3-14.9-0.4-8.6-8.6-6.3-8.2 0.3-14.9 8.6-8.5 8.2-6.4 14.9 0.3 8.5 8.5 6.3 8.2-0.3 14.9-8.5 8.6z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s1"
              d="m450.2 603.7c5.9-9.5 7.8-19.3 7.8-29.3 0-17-5.5-34.4-5.5-51-0.1-14.7 4.3-28.7 20.5-41 6.3-4.8 13.7-7.2 21.1-7.2 10.5 0 20.9 4.8 27.8 13.8 3.1 4 4.5 8.8 4.5 13.5 0 6.7-3 13.3-8.7 17.7-2.6 1.9-5.6 2.9-8.7 2.9-4.3 0-8.5-1.9-11.3-5.6-1.3-1.7-1.9-3.7-1.9-5.6 0-2.8 1.2-5.5 3.6-7.4 1.1-0.8 2.4-1.2 3.7-1.2 1.8 0 3.6 0.8 4.8 2.4 0.6 0.7 0.8 1.6 0.8 2.4 0 1.2-0.5 2.5-1.6 3.3l-0.7-1c0.7-0.6 1.1-1.4 1.1-2.3 0-0.6-0.2-1.2-0.5-1.7-1-1.2-2.5-1.9-3.9-1.9-1 0-2.1 0.3-2.9 1-2.1 1.6-3.2 4-3.2 6.4 0 1.7 0.5 3.4 1.6 4.9 2.6 3.3 6.5 5.1 10.4 5.1 2.8 0 5.6-0.9 8-2.7 5.4-4.1 8.2-10.4 8.2-16.7 0-4.5-1.4-9-4.3-12.8-6.6-8.7-16.6-13.3-26.8-13.3-7.1 0-14.3 2.3-20.4 6.9-15.9 12.2-20 25.7-20 40.1 0 16.3 5.4 33.8 5.5 51 0 10.1-1.9 20.2-7.9 29.9z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s2"
              d="m188.2 473.9c39.8-4.5 75.3 2.2 100 8.3 24.9 6.4 39.5 12.3 39.5 12.2 0 0.1-15.5-2.8-40.6-5.9-25-2.9-60-6.2-97.4-1.9-36.9 3.8-70.6 19-79 42.2-7.9 23.2 5.5 38.5 4.2 38 0.1-0.1-2.8-2.8-6.3-9.2-3.3-6.2-7.4-17.2-4-30.7 3.1-13.5 14.4-27.1 29.7-36 15.2-9.2 34.1-14.6 53.9-17z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s3"
              d="m490.5 291.7q0 0 0.1-0.1-0.1 0.1-0.1 0.1z"
            />
            <path
              id="&lt;Path&gt;"
              className="s4"
              d="m343.3 444c-45.3-54.4-44-125.6-23.3-190.4 28.7-87.2 142.3-103.8 213.6-56-16.2-15.5-36.3-26.1-58.2-31.9-48.9-13.4-105 4-137.9 41.2-32.3 35.6-49.6 79.7-54.1 119.5-3.9 33.1 0.4 62.8 6.9 85.9 11.2 17.6 23.1 34.8 40 49 14.2 12 29.3 21.6 45 29.5-1.2-5.8-4.1-13.4-9.1-22.6-8.1-7.4-15.8-15.4-22.9-24.2z"
            />
            <path
              id="&lt;Path&gt;"
              className="s5"
              d="m538.9 203q-2.6-2.8-5.3-5.4c-71.3-47.8-184.9-31.2-213.6 56-20.7 64.8-22 136 23.3 190.4 7.1 8.8 14.8 16.8 22.9 24.2-3.5-6.5-8-13.7-13.6-21.8-2.5-4-11-15.5-19.2-35.2-8.2-19.6-15.6-47.9-13.6-81.4 1.8-33.3 14.3-71.6 40.1-103.5 24.1-30.9 68.7-48.3 110.6-39.5 20.6 4 41 14.1 55.6 28.2 14.4 14.2 21.9 34.6 21 54.3-0.7 19.4-10 38.8-23.4 49.9-14 11.1-33.5 12.3-47.8 5.5-15.2-6.1-22.9-21.2-20.1-34.2 2.1-13.1 13-21.9 22.8-20.1 9.8 0.8 15.3 8.6 14.5 13.8-0.2 4.7-2.3 6.9-2.5 7.4 0.3-0.5 2.5-2.5 3-7.3 1.1-5.4-4.2-14.2-14.7-15.8-5.1-0.8-11.3 0.2-16.4 4-5.1 4.1-8.8 10-10.6 17.2-4.4 14.2 4.2 33.4 21 41 15.9 8.8 38.8 9.1 56.7-3.4 17.5-12.9 28.5-33.7 31.1-57 2.5-23.1-4.9-48.5-21.8-67.3z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s6"
              d="m98.3 377.8c2.6-3.2 3.3-7 3.2-11 3.9-0.1 7.4 3.7 8.3 7.4 1.2-7.2-4.2-17.7-9.7-21.1-9.3-5.6-21.1-1.1-25 7.6-6.6 15 11.9 31.2 23.2 17.1z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s7"
              d="m409.1 316.4c3.6 3 4.5 8-0.2 12.5-11.3 10.7-24-4.3-35.5 2.4 5.5-10.3 5.5-22.3 15.7-31.4 9.7-8.7 20.7-3.5 14.5 6.5-1.6 2.6-3.9 4.8-6.1 7.1 4.7-1.4 9 0.7 11.6 2.9z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s3"
              d="m64.4 363.4c-2.8-13.1-5-15.3-18.1-18 13.1-2.7 15.3-4.9 18.1-18 2.7 13.1 4.9 15.3 18 18-13.1 2.7-15.3 4.9-18 18z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s8"
              d="m56.4 329.4c-1.3-6.5-2.4-7.6-8.9-9 6.5-1.3 7.6-2.4 8.9-8.9 1.4 6.5 2.5 7.6 9 8.9-6.5 1.4-7.6 2.5-9 9z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s9"
              d="m38.2 339.2c-0.8-3.9-1.4-4.6-5.2-5.4 3.8-0.8 4.4-1.5 5.2-5.4 0.8 3.9 1.4 4.6 5.1 5.4-3.7 0.8-4.3 1.5-5.1 5.4z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s10"
              d="m460.2 467.8c-0.8-3.9-1.4-4.6-5.1-5.4 3.7-0.8 4.3-1.5 5.1-5.4 0.8 3.9 1.4 4.6 5.2 5.4-3.8 0.8-4.4 1.5-5.2 5.4z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s3"
              d="m506.8 547.6c-1.1-5.6-2-6.6-7.4-7.7 5.4-1.2 6.3-2.1 7.4-7.7 1.1 5.6 2 6.5 7.3 7.7-5.3 1.1-6.2 2.1-7.3 7.7z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s11"
              d="m453 344.4c-7.9 6-14.3-0.4-8.2-8.2-6.1-7.9 0.3-14.3 8.2-8.2 7.9-6.1 14.2 0.3 8.2 8.2 6 7.8-0.3 14.2-8.2 8.2z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s12"
              d="m470.5 534.5c-3.8 3-6.9-0.1-3.9-3.9-3-3.8 0.1-6.9 3.9-4 3.8-2.9 6.9 0.2 4 4 2.9 3.8-0.2 6.9-4 3.9z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s13"
              d="m505.9 269.7c-3.5 2.7-6.3-0.1-3.6-3.5-2.7-3.5 0.1-6.3 3.6-3.6 3.4-2.7 6.2 0.1 3.5 3.6 2.7 3.4-0.1 6.2-3.5 3.5z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s14"
              d="m180.7 362.1c-9.3 7.2-16.9-0.4-9.7-9.7-7.2-9.3 0.4-16.9 9.7-9.7 9.4-7.2 16.9 0.4 9.8 9.7 7.1 9.3-0.4 16.9-9.8 9.7z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s15"
              d="m98.1 440.4c-7.3 5.6-13.1-0.3-7.6-7.5-5.5-7.2 0.3-13.1 7.6-7.5 7.2-5.6 13.1 0.3 7.5 7.5 5.6 7.2-0.3 13.1-7.5 7.5z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s16"
              d="m193.1 344.5c-3.7 2.8-6.6-0.1-3.8-3.8-2.8-3.7 0.1-6.7 3.8-3.8 3.7-2.9 6.7 0.1 3.8 3.8 2.9 3.7-0.1 6.6-3.8 3.8z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s10"
              d="m442.8 295.8c-2.9 2.3-5.3-0.1-3.1-3.1-2.2-2.9 0.2-5.3 3.1-3 2.9-2.3 5.3 0.1 3.1 3 2.2 3-0.2 5.4-3.1 3.1z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s10"
              d="m196.7 380.9c-2.9 2.2-5.3-0.1-3-3.1-2.3-2.9 0.1-5.3 3-3 3-2.3 5.3 0.1 3.1 3 2.2 3-0.1 5.3-3.1 3.1z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s17"
              d="m207.3 412.1c0.5 1.9 1 4.4 0.6 6.3-5.3-8.4-14-3.9-17.9-4.7-6.1-1.2-6.6-7.4-1.5-11.4 7.7-6.2 16.9 2.5 18.8 9.8z"
            />
          </g>
          <path
            id="&lt;Path&gt;"
            className="s10"
            d="m482.1 288.7c0 1.4-1.1 2.5-2.5 2.5-1.4 0-2.6-1.1-2.6-2.5 0-1.4 1.2-2.6 2.6-2.6 1.4 0 2.5 1.2 2.5 2.6z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s18"
              d="m187.8 589.8c4 10.6 5.6 17.3 2.4 19.3-2.7 1.8-9.4-2.3-14.3-15.1-0.8-2.8-7.9-20.1-0.3-42.2 7.4-22.1 31.6-42.3 58.5-53.1 54.7-23.2 93.8-12.5 93.1-12.7 0.8 0-39-7-90.5 18.5-25.5 11.8-46.2 32.2-51 50.6-5.2 18.4 1.3 32.1 2.1 34.7z"
            />
            <path
              id="&lt;Path&gt;"
              className="s19"
              d="m165.9 563.8c-0.8 7.9-1.8 12.1-3.9 12.2-1.8 0.1-4.2-4.5-3.2-13.4 0.2-2 1.4-13.7 9.6-26.5 7.7-13 22.3-25 38.1-32.6 31.7-15.7 65.5-16.4 65.3-16.6 0.3 0.1-33.7 2.8-63.8 19.8-15 8.3-28.2 20.5-34.6 32.8-6.8 12.1-7.3 22.5-7.5 24.3z"
            />
            <path
              id="&lt;Path&gt;"
              className="s20"
              d="m193.2 507.1c-4.1 2.8-6.6 3.5-7.2 2.6-0.7-1.1 1.1-3.5 5.4-6.4 2-1.8 22.3-13 42.9-16.4 20.5-4.3 40.1-3.5 40.1-3.6 0 0.1-19.8 0.4-39.9 5.6-20.2 4.6-39.4 16.5-41.3 18.2z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s21"
              d="m449.7 221.2c13.9 0.5 19.8 7.4 18.9 14.1-1 7.1-7.8 11.4-19.7 11-3 0.1-18.1-2.3-39.1 2.1-20.9 3.5-47.3 20.3-59.5 46.3-25.3 51.6-12.1 107.3-12.7 106.9 1 0-19.9-52.4 1.2-112.1 5.6-14.6 15-28.9 27-39.8 12.1-10.9 26.1-17.8 38.3-21.7 24.8-7.9 42.3-6.7 45.6-6.8z"
            />
            <path
              id="&lt;Path&gt;"
              className="s22"
              d="m428.7 251.9c6.9-0.3 10.4 3.6 10.4 7.6-0.1 4.2-3.3 7.1-9.2 7.3-2.7 0.2-31.5-2.5-52.4 16.6-21.5 18.4-28.4 50.2-28.5 49.5 0.3 0.6 2.6-31.2 22.9-54.5 20.2-24.3 54.1-26.6 56.8-26.5z"
            />
            <path
              id="&lt;Path&gt;"
              className="s23"
              d="m398.1 277.8c2.9-1 5.1 0.2 6 2.3 1 2.1 0.6 4.2-1.9 4.9-1.2 0.5-13.1 3.3-23.2 13.3-10.2 9.5-16.9 24.2-17 24 0.1 0.2 4.6-15 13.6-26.3 8.7-11.8 21.1-17.7 22.5-18.2z"
            />
          </g>
          <path
            id="&lt;Path&gt;"
            className="s24"
            d="m432 608.2c-1.1-24.8-9.4-48.9-24.6-70.3-15.1-21.7-38.7-40.2-68.6-52.9-29.7-13.3-65.6-20.8-104.1-35-17.2-6.5-32.2-14-44.8-23.1-12.9-9.3-23.3-18.5-28.1-29.8-10.7-22.8-3.3-50.5 13.8-64.6 8.5-6.6 20.4-8.9 31.1-5.6 10.7 3.1 20.8 11.6 21 23.5 1 11.1-9.8 25.6-22.8 19.8-6.1-1.9-10-10-5.3-15.7 1.9-2.7 6.2-3.5 8.9-1.2 3.4 1.7 1 8.9-3 6h-0.1 0.1-0.1 0.1c3.9 3 6.8-4.2 3.2-6.2-2.7-2.6-7.4-1.9-9.7 1-5.4 5.7-1.6 15.3 5.1 17.9 6.4 3.3 14.7 2.1 19.9-2.9 5.2-4.7 8.4-11.6 8.8-18.6 0.2-30.8-39.3-45.5-64.8-29.3-24.8 15.9-38.6 50.4-26.2 84.1 3 8.3 7.8 16.2 14.1 23.1 6 6.6 12.3 12.5 19.6 18 14.4 11.1 31.6 20 50.2 27.1 42 15.4 77 21 105.2 31.4 28.4 9.8 50.2 23.3 66.3 41.1 16.2 17.8 26.8 38.7 30.3 62.7 2.1 13.5 2.4 27.6 1.5 42.4 2.6-15.7 4-23.9 3-42.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s25"
            d="m429 651.1c-0.7 4.5-1.6 9.5-2.5 15.6q0.7-0.8 1.4-1.7 0.7-7 1.1-13.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s26"
            d="m454 345.3c14.9 9.6 17.3 22 16.4 28.6-1 7.1-4.9 10.4-7.6 11.2-6 1.7-18.7-5.1-28.8-11.6-1.4-0.7-5.3-3.9-14.4-4.4-8.7-0.6-23.5 2.8-34.5 13.9-11.1 10.6-16.5 29.3-7.7 47.7 8.6 19 28 36.4 45.7 55.5 8.8 9.6 17.8 20.1 23.2 32.5 5.4 11.8 8.9 23.9 10.5 35.9 3.4 23.9 0 46.1-5.3 64-11.4 36-28.4 55.3-27.8 55.4-0.6-0.1 14.5-20.9 22.3-56.6 3.5-17.8 4.8-39.2-0.4-60.9-2.5-10.9-6.7-21.7-12.6-31.8-5.3-9.9-13.8-18.4-23-26.9-18.4-17-40.6-32.7-54.8-56.9-6.9-12-10.4-26.6-8.9-40.2 1.5-13.7 7.4-26.4 15.6-36.1 16.6-19.5 39.8-27.5 57.8-27.9 18.6-0.6 30.9 6.4 34.3 8.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s27"
            d="m474 377.7c1.1 22-17 40.7-40.4 41.8-23.4 1.2-43.2-15.7-44.3-37.7-1-22 17.1-40.7 40.4-41.9 23.4-1.1 43.3 15.8 44.3 37.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s28"
            d="m463.1 385.1c0.8 15.8-12.2 29.3-29 30.1-16.8 0.8-31-11.3-31.8-27.1-0.8-15.8 12.2-29.3 29-30.1 16.8-0.8 31.1 11.3 31.8 27.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s29"
            d="m302.1 245c19.2-10.9 29.7 1.3 29.9 5.8 0.6 5.6-3.5 16.1-12.8 21.8-2.2 1.3-16.6 8.7-26.1 32.5-9.9 23.2-11.8 58.5 1.3 90.1 12.3 31.9 37.2 57.9 55.9 75.9 19.2 18 32.7 29.1 32.6 29.2 0.1-0.1-14.6-9.5-35.8-25.3-20.9-16-49.5-39.2-67.4-73-18.6-33.2-21.8-75.2-12.6-105.6 8-31.5 30.5-49.4 35-51.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s30"
            d="m210.9 391.2c0.2-9.6 9.6-11.8 13.6-11 4.2 0.8 12.7 4.6 12.5 10.3 0.3 1.5-1 9 2.6 19.6 3.3 10.8 12.2 24 23.5 35.5 23 23 51.8 39.7 51.5 39.9 0.1-0.4-30.8-10.5-59.8-29.8-14.3-9.8-27.9-22.8-35.3-36.4-7.7-13.6-8.4-25.9-8.6-28.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s31"
            d="m240.8 301.6c-11.1-15.7-28.9-28.3-47.2-35-18.4-6.7-37.3-7.4-50.7-4.8-27.5 4.7-47.4 26.6-51.8 43.6-0.7 2.5-1.2 4.9-1.6 7.1 4.5 2.3 8.9 5 13.1 7.9 1.4-2.3 2.9-4.8 4.7-7.5 7.5-11.3 20.8-22.6 40.5-26.4 9.7-1.9 24.1-2.9 39.7 0.5 15.6 3.4 31.9 11.2 43.7 22.7 11.8 11.5 18 26.4 19.7 37.8 1.7 11.5 0.5 19 0.8 19-0.3 0 2.5-7 3.1-19.2 0.7-12.1-2.7-29.9-14-45.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s32"
            d="m137.5 316.8c0 13.4-10.8 24.2-24.2 24.2-13.3 0-24.1-10.8-24.1-24.2 0-13.3 10.8-24.1 24.1-24.1 13.4 0 24.2 10.8 24.2 24.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s33"
            d="m403.9 436.6q0 0 0 0 0 0.1 0 0z"
          />
          <path
            id="&lt;Path&gt;"
            className="s34"
            d="m403.9 436.6q-0.1 0-0.2-0.2 0.1 0.2 0.2 0.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s35"
            d="m444.3 600.6c2.6-9 1.3-16.8 1.3-25.9 0-50.5-45.3-69.9-81.5-97.1-14.6-11.2-19.5-35-11.3-52.9-7.8 10.8-8.4 25.9-4.3 37.5 4.1 12.6 11.8 23.1 21.2 31.4 10.6 8.4 18 12.6 25.7 19.6 7.4 6.5 13.8 13.3 18.8 20.2 20.7 27.9 19.6 54 20 59.1 1.1 26-4.7 50.6-10.2 67.7q2.4-3.8 4.8-7.8c9.1-16.8 12.9-33.6 15.5-51.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s36"
            d="m458.2 591.6c-0.4-5.9-1.6-39.1-28.2-70.7-12.2-15.5-32.7-29.4-50-39.8-15.3-11.3-27.9-34.8-16.4-51 5.4-7.6 16.1-14.1 25.1-15 9.6-0.8 19.4 4.3 24.2 12.5 5.2 8 3.9 18.6-1.9 25.2-5.7 6.8-15.2 9.1-22.2 5.2-7-3.5-10.8-11.4-9-17.7 1.4-6.3 7.1-10.4 11.7-10.8 8.9-0.3 11.6 5.7 12.2 6.9-0.5-1.2-2.8-7.6-12.3-7.9-5.1 0.1-11.5 4.1-13.7 11.3-2.5 7.1 1.1 16.7 9.3 21.4 8.1 5.4 20.5 3.3 28.1-4.7 7.8-7.6 10.4-21.6 4.4-32.5-5.5-10.9-17.8-18.8-31.2-18.5-13.6 0.9-25 7-34.1 17.4q-0.7 0.9-1.4 1.8c-8.2 17.9-3.3 41.7 11.3 52.9 36.2 27.2 81.5 46.6 81.5 97.1 0 9.1 1.3 16.9-1.3 25.9-2.6 18.2-6.4 35-15.5 51.8q-2.4 4-4.8 7.8c-4.8 14.9-9.5 24.2-9.4 24.1-0.2 0 11.4-8 23-24.7 11.5-16.3 22.3-42.3 20.6-68z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s37"
              d="m284.7 245.2c-9 5.9-19.6 6.9-28.7 3.9-9.2-3.2-15.2-11.1-17.2-19-2.1-7.8-0.4-16 4.2-21.5 4.5-5.4 10.8-7.9 16.2-8 11.4-0.5 17.6 8.4 17.9 13.2 0.7 5.3-1.2 7.5-1.9 7.5-1.1 0-1-2.9-3.1-6.6-2.1-3.7-7.6-7.4-14.6-5-6.9 2-11.7 11.4-7 20.3 3.9 8.8 17.4 12.1 27.5 5.3 10.3-6.3 12.4-22.2 5.7-33.4-6.4-11.7-21.1-16.6-34.4-13.6-13.4 2.8-24.4 13.2-28.3 25.7-4.1 12.7-1.6 26.2 3.5 37.5 10.9 22.5 24.7 40.8 28.8 56.1 4.8 15.2 3.1 24.6 3.3 24.5-0.2 0.1 0.7-9.5-5-23.8-5.2-14.8-19.6-31.2-32.4-54.3-6.2-11.6-10.1-26.9-6-42.3 4-15.3 17-29 33.8-33.1 16.2-4.6 37.1 1.2 46.5 17.5 9.8 14.9 7.4 38.5-8.8 49.1z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s38"
              d="m353.5 178.2c2.3-0.7 3.3-3.5 3.3-7.3 0-3.6-2.4-6.7-7-5.5-1.1 0.3-6.6 2.4-12.4 7.9-5.9 5.3-11.7 13.8-16.2 22.8-9.2 18-11.6 37.1-11.4 36.9-0.2 0.2 5.6-18.2 17.1-33.5 5.6-7.6 12.2-14.2 17.5-17.4 5.3-3.4 8.5-3.7 9.1-3.9z"
            />
            <path
              id="&lt;Path&gt;"
              className="s39"
              d="m341.2 166.3c2.4-1.7 3-4 2.1-6-0.9-2-3.3-2.7-6.3-0.7-1.8 0.7-12.7 11.4-18 23.3-5.9 11.7-8.6 23.6-8.6 23.5 0 0.1 4.6-11.1 11.8-21.2 6.9-10.5 17.6-18.4 19-18.9z"
            />
            <path
              id="&lt;Path&gt;"
              className="s40"
              d="m321.6 171.9c0.9-1.6 0.7-3-0.2-3.8-0.9-0.8-2.2-0.6-3.3 1-0.5 0.8-4.4 8.3-6.7 15.6-2.5 7.3-3.8 14.3-3.8 14.3 0 0 2.3-6.6 5.7-13.2 3.2-6.7 7.8-13.2 8.3-13.9z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s41"
              d="m103.2 272.1c-3.7 5.9-7.8 8.6-11.5 7.1-3.4-1.3-4.9-7-0.1-14.6 1.2-1.8 7.5-11.6 20.9-18.9 13.2-7.6 33.5-9.9 52-5.5 18.7 4.2 35.2 14.4 45 23.7 10.1 9.3 14.2 17.2 14.4 17.1-0.2 0.1-5.1-7.3-15.7-15.4-10.5-8.2-27.3-16.3-44.9-18.6-17.7-2.4-35 1.6-44.8 8.7-10.1 6.9-14.3 14.9-15.3 16.4z"
            />
            <path
              id="&lt;Path&gt;"
              className="s42"
              d="m101 244.1c-4.1 2.7-7.5 2.6-8.9 0.4-1.6-2.2-0.3-5.9 4.6-8.9 1.9-2.1 26.5-12.5 48.3-8.2 21.9 2.9 38.4 14.4 38.3 14.2 0.2 0.1-17.9-9.1-38.9-9.5-21.3-1.4-41.7 10.3-43.4 12z"
            />
            <path
              id="&lt;Path&gt;"
              className="s43"
              d="m137.1 220.1c-3-0.3-4.4-1.2-4.1-2.4 0.2-1.1 2.1-2 5.2-1.6 1.6 0 15.3 2.5 26.4 8 11.3 5.1 20.2 12.2 20.1 12.2 0.1 0-9.5-6.3-21.1-10.4-11.5-4.5-25-5.7-26.5-5.8z"
            />
          </g>
          <path
            id="&lt;Path&gt;"
            className="s40"
            d="m107.3 413.5c-4.7-10.8-2.2-27.2 10.1-31.8 6.1-2.2 12.7 0.6 15.5 5.2 3.3 5.1 1 11.5-3.2 13.7-4.5 2.4-9.7-0.6-10-4.6-0.5-4 4-6.3 6.1-4.5 2.3 1.7 0.8 4.4-0.4 4.4-1.3 0.1-1.5-0.7-1.5-0.6 0-0.1 0.4 0.6 1.4 0.3 1-0.3 1.6-2.3-0.1-3.1-1.6-0.9-3.8 1-3.2 3.2 0.3 2 3.9 3.4 5.8 1.7 2.2-1.6 2.9-5.3 1-7.6-2-2.6-6-3.7-9.2-2.3-7 3.4-9.2 13.9-5.3 23.6 7.2 20.2 23.9 33.3 37.5 37.5 13.8 4.4 23.3 4.2 23.2 4.5 0.1-0.3-9.1 1.8-24.2-0.9-14.8-2.5-35.3-15.6-43.5-38.7z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s10"
              d="m461.5 407.8c-1.9-9.8-3.5-11.4-12.9-13.5 9.4-2 11-3.7 12.9-13.5 2 9.8 3.6 11.5 12.9 13.5-9.3 2.1-10.9 3.7-12.9 13.5z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s44"
              d="m458.8 360.8c-0.9-4.4-1.6-5.2-5.8-6.1 4.2-0.9 4.9-1.6 5.8-6 0.9 4.4 1.6 5.1 5.8 6-4.2 0.9-4.9 1.7-5.8 6.1z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s45"
              d="m439.3 317.5c3.1 15-6.7 15.1-3.9 0-15 3.1-15.1-6.7 0-3.8-3.2-15 6.6-15.1 3.8-0.1 15-3.1 15.1 6.7 0.1 3.9z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s10"
              d="m496.6 250.9c1.7 8.2-3.6 8.2-2.1 0.1-8.1 1.6-8.1-3.7 0-2.1-1.7-8.2 3.6-8.2 2.1-0.1 8.1-1.6 8.2 3.7 0 2.1z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s46"
              d="m446.1 493.6c2.9 14-6.3 14.1-3.6 0-14.1 2.9-14.1-6.2-0.1-3.6-2.9-14 6.2-14.1 3.6 0 14-3 14.1 6.2 0.1 3.6z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s10"
              d="m483.8 514.9c1.7 8.1-3.6 8.1-2.1 0-8.1 1.7-8.1-3.6 0-2.1-1.7-8.1 3.6-8.2 2.1 0 8.1-1.7 8.2 3.6 0 2.1z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s47"
              d="m180 302.3c-0.6-4.4 4.4-7.8 16.5-9.1 24.8-2.8 37.4 14.6 46.6 30.9-5.6-6.6-15.3-14.5-23.3-17-5.2-1.8-14.3-1.2-21.6-1.7-7.2-0.6-15 2.3-18.2-3.1z"
            />
            <path
              id="&lt;Path&gt;"
              className="s48"
              d="m180.5 283.1c-2.1 5.7 6.6 10.3 14.1 11.6 24.8-0.9 39.2 13.2 48.4 29.5-2.8-8.8-8.7-20.1-14.3-26.2-3.5-4.2-11.4-12.4-19.3-15.5-14.2-5.7-26.1-5.3-28.9 0.6z"
            />
          </g>
          <path
            id="&lt;Path&gt;"
            className="s10"
            d="m204.6 237.9c5 6.5-0.3 11.8-6.7 6.8-6.5 5-11.8-0.3-6.8-6.8-5-6.4 0.3-11.7 6.8-6.7 6.4-5 11.7 0.3 6.7 6.7z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Compound Path&gt;"
              fill-rule="evenodd"
              className="s49"
              d="m338.9 373.5c-1.3-1.3-2-3.2-2-5.4 0-2.6 1-5.7 3.4-8.8-2.4-3.2-3.4-6.2-3.4-8.9 0-2.2 0.7-4 2-5.4 1.4-1.3 3.3-2.1 5.5-2.1 2.6 0 5.6 1.1 8.8 3.4 3.2-2.3 6.2-3.4 8.8-3.4 2.2 0 4.1 0.8 5.4 2.1 1.4 1.4 2.1 3.2 2.1 5.4 0 2.7-1 5.7-3.4 8.9 2.4 3.1 3.4 6.2 3.4 8.8 0 2.2-0.7 4.1-2.1 5.4-1.3 1.3-3.2 2.1-5.4 2.1-2.6 0-5.6-1.1-8.8-3.4-3.2 2.3-6.2 3.4-8.8 3.4-2.2 0-4.1-0.8-5.5-2.1zm-0.7-23.1c0 2.4 1 5.3 3.4 8.5l0.3 0.4-0.3 0.4c-2.4 3.1-3.4 6-3.4 8.4 0 3.8 2.4 6.2 6.2 6.2 2.3 0 5.2-1 8.4-3.4l0.4-0.3 0.4 0.3c3.1 2.4 6.1 3.4 8.4 3.4 3.8-0.1 6.2-2.4 6.2-6.2 0-2.4-1-5.3-3.4-8.4l-0.3-0.4 0.3-0.4c2.4-3.2 3.4-6.1 3.4-8.5 0-3.7-2.4-6.1-6.2-6.2-2.3 0-5.3 1-8.4 3.5l-0.4 0.3-0.4-0.3c-3.2-2.5-6.1-3.5-8.4-3.5-3.8 0.1-6.2 2.5-6.2 6.2z"
            />
          </g>
          <path
            id="&lt;Path&gt;"
            className="s50"
            d="m362.2 393.7c5.2 6.7-0.3 12.2-7.1 7-6.7 5.2-12.2-0.3-7-7-5.2-6.8 0.3-12.3 7-7.1 6.8-5.2 12.3 0.3 7.1 7.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s10"
            d="m313.1 295.9c-2-0.7-4-0.3-5.9 0.4-0.7-1.9 0.5-4.2 2.1-5.3-3.7 0.7-7.9 5.1-8.5 8.4-1.1 5.5 3.2 10.4 8.1 10.8 8.4 0.5 13-11.3 4.2-14.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s51"
            d="m171.8 212.2c1-1.3 1.2-2.8 1.1-4.4 1.6 0 3 1.4 3.4 2.8 0.4-2.8-1.9-6.8-4.1-8.1-3.7-2.1-8.2-0.2-9.6 3.3-2.5 5.9 5 12 9.2 6.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s52"
            d="m280 347.4c5.2 1 10-0.4 14.5-3 2.4 4.5 0.2 10.8-3.4 13.9 8.9-2.8 17.7-15.3 18.2-23.7 0.9-14-11.3-24.8-23.7-24-21 1.4-28.5 32.3-5.6 36.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s53"
            d="m191.6 216.5c2.9 0.6 5.7-0.2 8.3-1.7 1.3 2.5 0.1 6.1-2 7.9 5.1-1.6 10.1-8.7 10.4-13.5 0.5-8-6.5-14.2-13.5-13.7-12.1 0.8-16.3 18.4-3.2 21z"
          />
          <path
            id="&lt;Path&gt;"
            className="s40"
            d="m494.3 284.8c0 6.2-5.1 11.3-11.4 11.3-6.3 0-11.4-5.1-11.4-11.3 0-6.3 5.1-11.4 11.4-11.4 6.3 0 11.4 5.1 11.4 11.4z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s10"
              d="m176.5 355c-0.8-3.9-1.4-4.6-5.2-5.4 3.8-0.8 4.4-1.5 5.2-5.4 0.8 3.9 1.4 4.6 5.2 5.4-3.8 0.8-4.4 1.5-5.2 5.4z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s10"
              d="m200.9 338.3c-0.8-4-1.4-4.6-5.1-5.5 3.7-0.8 4.3-1.4 5.1-5.4 0.8 4 1.4 4.6 5.2 5.4-3.8 0.9-4.4 1.5-5.2 5.5z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s10"
              d="m182.6 338.6c-1.3-6.5-2.3-7.6-8.4-8.9 6.1-1.3 7.1-2.4 8.4-8.8 1.3 6.4 2.3 7.5 8.4 8.8-6.1 1.3-7.1 2.4-8.4 8.9z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s54"
              d="m174.4 174.7c-1.3-6.4-2.4-7.5-8.5-8.8 6.1-1.4 7.2-2.5 8.5-8.9 1.2 6.4 2.3 7.5 8.4 8.9-6.1 1.3-7.2 2.4-8.4 8.8z"
            />
          </g>
          <path
            id="&lt;Path&gt;"
            className="s40"
            d="m208.3 188.4c6.1 4.2 2.8 7.5-1.3 1.3-4.2 6.2-7.5 2.9-1.4-1.3-6.1-4.1-2.8-7.5 1.4-1.3 4.1-6.2 7.4-2.8 1.3 1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s55"
            d="m192.8 178.9c10.7 7.2 4.9 13-2.3 2.3-7.2 10.7-13 4.9-2.3-2.3-10.7-7.2-4.9-13 2.3-2.3 7.2-10.7 13-4.9 2.3 2.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s10"
            d="m210.5 166.3c4.5 3 2.1 5.4-0.9 1-3 4.4-5.5 2-1-1-4.5-3-2-5.4 1-1 3-4.4 5.4-2 0.9 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s10"
            d="m245.6 262.6c6.9 4.6 3.1 8.4-1.5 1.4-4.7 7-8.5 3.2-1.5-1.4-7-4.7-3.2-8.5 1.5-1.5 4.6-7 8.4-3.2 1.5 1.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s56"
            d="m140.4 556.2c0 8.2-6.7 14.9-14.9 14.9-8.3 0-15-6.7-15-14.9 0-8.3 6.7-15 15-15 8.2 0 14.9 6.7 14.9 15z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s57"
              d="m160.6 461.9c-21.2-5-46.6-6.5-67.3 0.9-28.8 10.3-25.9 28.7 4.9 19.8-26.8 14.4-25.3 53.3 2.1 25.6 21.8-22 44.3-40.7 77.8-40.8-5.7-2.3-11.5-4.1-17.5-5.5z"
            />
          </g>
          <path
            id="&lt;Path&gt;"
            className="s10"
            d="m126.4 462.2c3.1 4-0.2 7.3-4.3 4.2-4.1 3.1-7.4-0.2-4.2-4.2-3.2-4.1 0.1-7.4 4.2-4.3 4.1-3.1 7.4 0.2 4.3 4.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s10"
            d="m103.2 430.8c1.7 2.1-0.1 3.9-2.2 2.2-2.2 1.7-4-0.1-2.3-2.2-1.7-2.2 0.1-4 2.3-2.3 2.1-1.7 3.9 0.1 2.2 2.3z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s58"
              d="m112.7 479.3c-1.3-6.5-2.3-7.6-8.5-8.9 6.2-1.3 7.2-2.4 8.5-8.8 1.3 6.4 2.3 7.5 8.4 8.8-6.1 1.3-7.1 2.4-8.4 8.9z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s59"
              d="m112.5 456.4c-0.8-3.7-1.3-4.3-4.8-5 3.5-0.8 4-1.4 4.8-5 0.7 3.6 1.3 4.2 4.7 5-3.4 0.7-4 1.3-4.7 5z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s60"
              d="m303.4 377.1l0.2-0.1h-0.1 0.1l-0.2 0.1c-14.6 4.1-27.2 11.2-34.3 23.1-7.1 11.9-7.5 26.8-3.2 40.6 4.3 13.9 13.3 28 28.3 38.9 14.5 10.6 31.7 18.6 51.1 28.7 34.5 17.7 56.3 33.8 71.4 54.9 14.8 20.9 12.6 79.7 12.6 79.7 0 0 13.8-48.3-0.7-86.3-10.3-26.8-34.7-52-71.7-70.6-20.5-10.7-37.9-17.2-51.1-24.4-12.6-6.7-21.8-15.8-27.9-26-6-10.1-8.9-22-4.7-33.5 4-11.6 15.6-20.8 30.2-25.1z"
            />
          </g>
          <path
            id="&lt;Path&gt;"
            className="s61"
            d="m291.5 612c6.9-11 7.3-24.6-0.1-34-6.9-9.7-19.8-15.8-29.5-14.2-9.3 0.6-15.3 11.7-15.4 20.5 0.2 8.9 7.3 17.1 14.2 17.7 7.6 0.8 13.5-3.8 14.6-10.3 1.5-6.5-1.3-12.2-4.7-13.9-8.8-3-14.1 3.8-15 2.7-1 0.7 0.9-11.2 17.4-9.7 8.1 2.2 13.8 11.9 12.8 22.3 0 10.8-11.7 23.2-26.1 22.2-14.8-0.7-27.3-13.8-28.8-30-0.5-8.6 1.6-16 5.9-23.4 4.3-7.5 12.9-13.6 22.1-15.2 18.4-3.1 36 5.7 47.4 20.3 5.6 7.5 9.3 17.2 9.3 27.3-0.4 9.9-2.6 19.4-8.2 27.9-10.7 17.4-34.7 28.2-59.2 24.4-25.2-3.1-48.1-25.2-53.5-52.4-6-27.2 6.1-57.2 27.9-74.2 21.4-17.5 49-24.4 74.3-23.5 25.7 0.4 49.1 11 66.5 23.8 17.7 12.9 31.1 27.4 41.2 40.4 20.2 26.4 19.6 51.6 20 51.2-0.4 0.4-1.1-24.5-22.2-49.4-10.7-12.1-24.7-25.8-42.3-37.3-17.7-11.5-39.6-20-63.3-19.3-23.5 0.3-48.2 8-65.8 23.9-18 15.4-26.2 40-20.7 61 5.1 20.9 22.6 36.3 40.4 37.9 18.2 2.3 34.5-6 40.8-16.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s10"
            d="m300.9 385.6c2-4.5 7-3.7 8.8-2.5 1.8 1.2 5.1 4.8 3.9 7.5-0.2 0.8-2.3 4.1-2.8 10-0.6 5.8 1 14 4.1 21.9 6.3 15.7 16.8 29.6 16.6 29.7 0.1-0.2-12.7-11.4-22.7-26.6-4.9-7.6-8.8-16.6-9.5-24.7-1-8.1 1.2-14.2 1.6-15.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s50"
            d="m294.1 309.9c0.5 10.2-7.4 18.9-17.6 19.4-10.3 0.5-19-7.4-19.5-17.6-0.5-10.3 7.4-18.9 17.7-19.4 10.2-0.5 18.9 7.3 19.4 17.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s50"
            d="m287.9 290.3c0.3 6.1-4.4 11.2-10.5 11.5-6 0.3-11.2-4.4-11.5-10.4-0.3-6.1 4.4-11.3 10.5-11.6 6-0.3 11.2 4.4 11.5 10.5z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s62"
              d="m529.2 609c-10.5 10.2-28.3 8.5-34.9-1.6-7.3-9.2-4-22.1 3-26.1 6.5-4.3 13.4-2.4 16 0.3 2.7 2.7 2.3 5 1.7 5.3-1.2 1-7.3-5-13.3 2.3-2.5 2.9-1.7 8.8 2.5 12.5 3.9 3.9 11.6 3.3 17-1.6 5.6-4.7 6.8-13.2 3.1-20.8-3.3-7.4-11-12.9-19.3-13.5-8.7-0.4-17.7 2-23.2 8-5.7 6-8.5 14.5-10.7 22.4-3.9 16.1-6.6 30.8-11.3 40.1-4.3 9.4-9.2 13.3-9.1 13.4-0.1-0.1 4.2-4.6 7.4-14.1 3.5-9.5 4.6-23.7 7.2-40.6 1.6-8.4 3.6-18.1 10.4-26.6 7-8.7 18.6-12.7 29.8-12.6 11.9 0.1 23.6 7.5 29.1 18.5 5.9 10.4 4.7 26.3-5.4 34.7z"
            />
          </g>
          <path
            id="&lt;Path&gt;"
            className="s63"
            d="m343.4 535.9c0.1-3.4-1.3-6.4-3.4-9.1 2.6-2 6.9-1.2 9.3 0.8-2.7-5.5-11.7-9.9-17.2-9.4-9.2 0.9-14.9 9.9-13.1 17.8 3 13.5 23.8 15.3 24.4-0.1z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s64"
              d="m478 552.5c-4.7 3.6-8.5-0.2-4.9-4.9-3.6-4.6 0.2-8.4 4.9-4.8 4.7-3.6 8.5 0.2 4.9 4.8 3.6 4.7-0.2 8.5-4.9 4.9z"
            />
          </g>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="s65"
              d="m121.2 316q0-0.4 0-0.8c0-8.4 6.5-15.3 15-15.8q0.4 0 0.8 0c8.4 0 15.4 6.6 15.8 15.1h-0.6-0.5c-0.4-7.9-6.9-14-14.7-14q-0.4 0-0.7 0c-7.9 0.4-14.1 6.9-14.1 14.7q0 0.4 0 0.8c0.4 7.9 6.9 14 14.8 14q0.3 0 0.7 0c7.9-0.4 14-6.9 14-14.7q0-0.4 0-0.8h0.5 0.6q0 0.4 0 0.8c0 8.3-6.6 15.3-15.1 15.7q-0.4 0.1-0.7 0.1c-8.4 0-15.4-6.6-15.8-15.1z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ColorSwirl;
