import { useNavigate } from "react-router-dom";

interface Props {
  theme: string;
  name: string;
}
const ThemeCard = ({ theme, name }: Props) => {
  const navigate = useNavigate();
  const colors = theme.split("-");
  return (
    <figure
      onClick={() => navigate(`/?colors=${theme}`)}
      style={{
        boxShadow: "0px 0px 10px hsl(var(--primary))",
        backgroundColor: `#${colors[0]}`
      }}
      className="grid items-center pb-1 w-52 h-16 grid-rows-[8fr_2fr] rounded-3xl hover:scale-105 transition-transform hover:cursor-pointer"
    >
      <div className="flex justify-around w-full h-full row-start-1 px-10 pt-2 mx-auto overflow-hidden rounded-t-3xl">
        {colors.map((color, index) => {
          if (index < 2) return;
          return (
            <div
              key={color}
              className="rounded-full size-7"
              style={{ backgroundColor: `#${color}` }}
            />
          );
        })}
      </div>
      <figcaption
        style={{ color: `#${colors[1]}` }}
        className="row-start-2 text-sm text-center"
      >
        {name}
      </figcaption>
    </figure>
  );
};

export default ThemeCard;
