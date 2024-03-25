import clsx from "clsx";

interface LogoProps {
  onDark: boolean;
}

export default function Logo(props: LogoProps) {
  return (
    <a href="#" className={clsx(props.onDark ? "text-white" : "text-dark-blue", "text-3xl font-extrabold leading-normal")}>skilled</a>
  );
}