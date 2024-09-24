interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className = "" }: TypographyProps) => {
  return (
    <h1
      style={{ opacity: "0" }}
      className={
        "3xl:text-[6.5rem] 2xl:text-[4.75rem] xl:text-7xl lg:text-6xl animate " +
        className
      }
    >
      {children}
    </h1>
  );
};

export const Paragraph = ({ children, className = "" }: TypographyProps) => {
  return (
    <p
      style={{ opacity: "0" }}
      className={
        "3xl:text-2xl/9 2xl:text-lg xl:text-base lg:text-sm max-w-[45ch] 3xl:mt-6 mt-4 animate text-pretty text-primary-foreground " +
        className
      }
    >
      {children}
    </p>
  );
};

interface LinkProps extends TypographyProps {
  href: string;
}

export const Link = ({ href, children, className = "" }: LinkProps) => {
  return (
    <a
      href={href}
      style={{ opacity: "0" }}
      className={
        "3xl:text-xl 2xl:text-base xl:text-sm lg:text-xs text-primary animate " +
        className
      }
    >
      {children}
    </a>
  );
};

interface CardProps extends TypographyProps {
  id: string;
}

export const CardBase = ({ id, children }: CardProps) => {
  return (
    <figure
      id={id}
      style={{
        boxShadow: "0px 0px 10px 5px hsl(from hsl(var(--primary)) h s calc(l / 3))",
        transition: "box-shadow ease 0.5s, opacity ease 0.5s"
      }}
      className={
        "3xl:w-[22.5rem] 3xl:h-[30rem] 2xl:w-[19.5rem] 2xl:h-[26rem] xl:w-60 xl:h-80 lg:w-[12.75rem] lg:h-[17rem] " +
        "bg-gradient-to-b from-background to-[hsl(from_hsl(var(--background))_h_calc(s_*_0.75)_calc(l_*_.6))] rounded-2xl grid grid-rows-[10fr_11fr] overflow-hidden"
      }
    >
      {children}
    </figure>
  );
};

export const CardHeading = ({ children, className = "" }: TypographyProps) => {
  return (
    <figcaption
      className={
        "3xl:text-3xl 2xl:text-[1.75rem] xl:text-xl lg:text-lg " +
        "3xl:mt-2 2xl:mt-1 select-none " +
        className
      }
    >
      {children}
    </figcaption>
  );
};

export const CardParagraph = ({ children, className = "" }: TypographyProps) => {
  return (
    <p
      className={
        "3xl:text-[1.375rem] 2xl:text-lg xl:text-sm lg:text-xs " +
        "3xl:mt-8 2xl:mt-6 lg:mt-4 " +
        "relative text-pretty text-primary-foreground select-none " +
        className
      }
    >
      {children}
    </p>
  );
};
