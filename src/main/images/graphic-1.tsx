const Graphic1 = () => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 1667">
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
          <path d="m2500 1667h-2500v-1667h2500z" />
        </clipPath>
        <linearGradient
          //Left Circle
          id="g2"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(182.132,-66.291,66.301,182.16,610.993,868.626)"
        >
          <stop offset="0.25" stopColor="hsl(var(--secondary))" />
          <stop offset="1" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          //Lower Left Line
          id="g3"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(669.438,-669.438,913.511,913.511,62.831,1300.664)"
        >
          <stop offset="0" stopColor="#000000" stopOpacity="0" />
          <stop offset=".3" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset=".55" stopColor="hsl(var(--accent))" stopOpacity="1" />
          <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          //Middle Line Gradient under Large ball
          id="g4"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(920.091,920.091,-185.429,185.429,1222.756,736.53)"
        >
          <stop offset="0" stopColor="hsl(var(--accent))" stopOpacity="1" />
          <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          //Upper Line Gradient above Small ball
          id="g5"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(566.21,566.21,-114.11,114.11,1519.928,204.141)"
        >
          <stop offset="0" stopColor="hsl(var(--background))" stopOpacity="0" />
          <stop offset="1" stopColor="hsl(var(--secondary))" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          //Main Loop
          id="g6"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,2243.967,-3892.228,0,3234.067,-10.437) rotate(45)"
        >
          <stop offset="0.3" stopColor="hsl(var(--accent))" stopOpacity="0" />
          <stop offset=".6" stopColor="hsl(var(--primary))" />
          <stop offset=".8" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          //Inner Loop
          id="g7"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(826.169,826.169,-121.742,121.742,1483.051,708.235)"
        >
          <stop offset="0" stopColor="hsl(var(--tertiary))" stopOpacity="1" />
          <stop offset=".609" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          //Outer Loop
          id="g8"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(426.89,-426.89,619.129,619.129,1322.042,547.231)"
        >
          <stop offset="0" stopColor="hsl(var(--tertiary))" stopOpacity="1" />
          <stop offset=".5" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          //Large Circle
          id="g9"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,370.674,-370.6,0,1318.921,647.358)"
        >
          <stop
            offset="0"
            stopColor="hsl(from hsl(var(--primary)) h s calc(l * 0.6))"
          />
          <stop offset="1" stopColor="hsl(var(--primary))" />
        </linearGradient>
        <linearGradient
          //Small Circle
          id="g10"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,228.107,-228.062,0,2143.102,713.375)"
        >
          <stop offset="0" stopColor="hsl(var(--accent))" />
          <stop
            offset="1"
            stopColor="hsl(from hsl(var(--accent)) h s calc(l * 0.5))"
          />
        </linearGradient>
      </defs>
      <style>
        {`
          .s0 { fill: hsl(var(--background)); } 
          .s1 { fill: url(#g1); } 
          .s2 { fill: hsl(var(--background)); } 
          .s3 { fill: url(#g2); } 
          .s4 { fill: url(#g3); } 
          .s5 { fill: url(#g4); } 
          .s6 { fill: url(#g5); } 
          .s7 { fill: url(#g6); } 
          .s8 { fill: url(#g7); } 
          .s9 { fill: url(#g8); } 
          .s10 { fill: url(#g9); } 
          .s11 { fill: url(#g10); } 
          .s12 { fill: url(#g11); } 
          .s13 { fill: url(#g12); } 
          .s14 { fill: url(#g13); } 
        `}
      </style>
      <g id="Layer 1">
        <g id="&lt;Clip Group&gt;" clipPath="url(#cp1)">
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m-593.7 183.4c0 385.5 312.4 698 697.9 698 385.4 0 697.9-312.5 697.9-698 0-385.6-312.5-698.1-697.9-698.1-385.5 0-697.9 312.5-697.9 698.1z"
          />
        </g>
        <path
          id="&lt;Path&gt;"
          className="s3"
          d="m683.6 875c-28.4 28.5-28.4 74.6 0 103.1 28.5 28.5 74.7 28.5 103.2 0 28.4-28.5 28.4-74.6 0-103.1-28.5-28.5-74.7-28.5-103.2 0z"
        />
        <path
          id="&lt;Path&gt;"
          className="s4"
          d="m976.3 2269.2l-705.2-705.4c-66.6-66.7-66.3-175.4 0.8-242.5 32-32.1 74.8-49.7 120.5-49.7q0.3 0 0.5 0c45.9 0.1 89 18.1 121.5 50.5l172 172.1c50.8 50.8 133.6 50.8 184.4 0 24.6-24.6 38.2-57.4 38.3-92.2 0.1-34.7-13.2-67.2-37.5-91.4l-260.1-260.2c-32.5-32.5-50.4-75.7-50.4-121.7 0-45.9 17.9-89.2 50.4-121.7 66.6-66.6 175.3-66.2 242.4 0.9l-29.4 29.4c-50.9-50.8-133.2-51.2-183.6-0.8-24.6 24.6-38.2 57.4-38.2 92.2 0 34.8 13.6 67.6 38.2 92.2l260.2 260.2c32.1 32.2 49.8 75.2 49.6 121-0.1 45.9-18 89.1-50.5 121.5-67 67.1-176.2 67.1-243.2 0l-172.1-172c-50.8-50.9-133.2-51.2-183.5-0.9-50.9 50.9-51.2 133.2-0.9 183.6l705.3 705.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s5"
          d="m1957.4 1842.1l-920-920.2 185.4-185.4 919.9 920.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s6"
          d="m1972 884.5l-566.1-566.3 114-114.1 566.2 566.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s7"
          d="m1857.7 2048.5l-969.8-970c-134.6-134.6-133.8-354.3 1.7-489.9 65.6-65.6 152.9-101.8 245.7-101.8 92.8 0 180.1 36.2 245.8 101.8l449.3 449.5c53.8 53.8 125.4 83.4 201.5 83.4 76.1 0 147.7-29.6 201.5-83.4 53.8-53.8 83.5-125.4 83.7-201.5 0.2-75.9-28.9-146.9-81.9-200l-787.7-787.8 44.2-44.2 787.7 787.8c134.5 134.6 133.7 354.3-1.8 489.9-65.6 65.6-152.9 101.8-245.7 101.8-92.8 0-180.1-36.2-245.7-101.8l-449.3-449.4c-53.9-53.9-125.4-83.5-201.6-83.5-76.1 0-147.7 29.6-201.5 83.5-53.8 53.7-83.5 125.3-83.7 201.4-0.2 75.9 28.9 146.9 81.9 200l969.9 970z"
        />
        <path
          id="&lt;Path&gt;"
          className="s8"
          d="m2187.5 1656.1l-705.3-705.4c-66.6-66.6-66.2-175.4 0.9-242.5l29.4 29.5c-50.8 50.8-51.2 133.2-0.8 183.6l705.2 705.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s9"
          d="m2032.5 1003.7c-44.1 0-88.1-16.8-121.6-50.3l-214.9-214.9c-24.5-24.6-57.3-38.2-92.1-38.3q-0.2 0-0.3 0c-34.6 0-66.9 13.3-91.1 37.5l-29.4-29.5c32-32 74.8-49.6 120.5-49.6q0.2 0 0.4 0c45.9 0.1 89.1 18 121.5 50.5l214.8 214.8c24.6 24.6 57.4 38.2 92.2 38.2 34.8 0 67.6-13.6 92.2-38.2 24.6-24.6 38.2-57.3 38.3-92.1 0.1-34.7-13.2-67.2-37.5-91.5l-376.6-376.6c-32.5-32.5-50.4-75.7-50.4-121.7 0-45.9 17.9-89.2 50.4-121.7l29.5 29.5c-24.6 24.6-38.2 57.4-38.2 92.2 0 34.8 13.6 67.6 38.2 92.2l376.6 376.7c32.1 32.2 49.8 75.2 49.6 121-0.1 45.9-18 89.1-50.5 121.5-33.5 33.5-77.5 50.3-121.6 50.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s10"
          d="m1040.9 740c-51.1 51.2-51.1 134.2 0 185.4 51.2 51.2 134.2 51.2 185.3 0 51.2-51.2 51.2-134.2 0-185.4-51.1-51.2-134.1-51.2-185.3 0z"
        />
        <path
          id="&lt;Path&gt;"
          className="s11"
          d="m1972 770.4c-31.5 31.5-31.5 82.6 0 114.1 31.5 31.5 82.6 31.5 114.1 0 31.5-31.5 31.5-82.6 0-114.1-31.5-31.5-82.6-31.5-114.1 0z"
        />
      </g>
    </svg>
  );
};

export default Graphic1;
