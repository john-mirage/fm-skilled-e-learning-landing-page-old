import Button from "@components/button";
import Illustration from "@components/illustration";
import Logo from "@components/logo";

export default function Header() {
  return (
    <header className="container mb-16 md:mb-24">
      <div className="relative z-50 mb-10 flex justify-between items-center">
        <Logo onDark={false} />
        <Button className="bg-dark-blue" />
      </div>
      <div className="md:flex md:flex-row md:justify-between md:items-center">
        <div className="mb-12 flex flex-col items-start gap-6">
          <h1 className="text-dark-blue text-4xl font-extrabold leading-normal md:max-w-80">Maximize skill, minimize budget</h1>
          <p className="text-gray text-base font-normal leading-7 md:max-w-96">Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
          <Button className="bg-gradient-to-b from-orange to-light-pink" />
        </div>
        <Illustration />
      </div>
    </header>
  );
}