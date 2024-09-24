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
      className={
        "3xl:w-[16.25rem] 3xl:h-[5rem] 2xl:w-52 2xl:h-16 xl:w-44 xl:h-[3.375rem] w-36 h-11 " +
        "grid items-center pb-1 grid-rows-[8fr_2fr] rounded-3xl hover:scale-105 transition-transform hover:cursor-pointer"
      }
    >
      <div className="flex justify-around w-full h-full row-start-1 px-10 pt-[0.375rem] mx-auto overflow-hidden xl:pt-2 rounded-t-3xl">
        {colors.map((color, index) => {
          if (index < 2) return;
          return (
            <div
              key={color}
              className="rounded-full 3xl:size-9 2xl:size-7 xl:size-[1.375rem] size-[1.125rem]"
              style={{ backgroundColor: `#${color}` }}
            />
          );
        })}
      </div>
      <figcaption
        style={{ color: `#${colors[1]}` }}
        className="row-start-2 text-[0.625rem] xl:text-xs text-center 3xl:text-lg 2xl:text-sm "
      >
        {name}
      </figcaption>
    </figure>
  );
};

export default ThemeCard;
