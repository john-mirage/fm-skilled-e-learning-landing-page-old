import clsx from "clsx";

type ButtonProps = React.ComponentPropsWithoutRef<"a">;

export default function Button({className, ...props}: ButtonProps) {
  return (
    <a href="#" className={clsx("relative inline-flex rounded-full py-2.5 px-6 text-white text-base font-bold leading-7 group overflow-hidden", className)} {...props}>
      <span className="relative z-50">Get Started</span>
      <span className="absolute z-0 top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity group-hover:opacity-25"></span>
    </a>
  );
}