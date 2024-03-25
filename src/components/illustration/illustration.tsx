import clsx from "clsx";
import IllustrationImageMobile from "@images/image-hero-mobile.webp";
import IllustrationImageTablet from "@images/image-hero-tablet.webp";

interface StatProps {
  name: string;
  value: string;
  classname?: string;
}

function Stat(props: StatProps) {
  return (
    <div className={clsx("relative z-50 px-5 py-4 rounded-xl bg-white shadow-illustration", props.classname)}>
      <p className="text-gray text-sm font-bold leading-7">{props.name}</p>
      <p className="text-dark-blue text-3xl font-extrabold leading-normal">{props.value}</p>
    </div>
  );
}

interface IllustrationProps {
  className?: string;
}

export default function Illustration(props: IllustrationProps) {
  return (
    <div className={clsx("relative flex flex-col h-80 justify-between items-start sm:items-center md:items-start md:w-96 md:h-96", props.className)}>
      <Stat classname="self-end sm:translate-x-32 sm:self-auto md:self-end md:translate-x-0" name="Members" value="29k" />
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-b from-orange to-light-pink rounded-full overflow-hidden md:w-56 md:h-96">
        <picture className="block w-full h-full">
          <source srcSet={IllustrationImageTablet} media="(min-width: 768px)" />
          <img className="w-full h-full object-contain object-bottom" src={IllustrationImageMobile} alt="woman drinking coffee" />
        </picture>
      </div>
      <Stat classname="sm:-translate-x-32 md:translate-x-0" name="Course hours" value="1,451" />
      <div className="hidden md:block md:rounded-full md:absolute md:z-10 md:left-1/2 md:rotate-45 md:origin-bottom-left md:-translate-x-36 md:-translate-y-32 md:bottom-0 md:w-56 md:h-[1000px] md:bg-gradient-to-b md:from-blue md:to-light-pink"></div>
    </div>
  );
}