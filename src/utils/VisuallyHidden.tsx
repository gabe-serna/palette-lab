import * as Hidden from "@radix-ui/react-visually-hidden";

interface Props {
  children: React.ReactNode;
}

const VisuallyHidden = ({ children }: Props) => {
  return <Hidden.Root>{children}</Hidden.Root>;
};

export default VisuallyHidden;
