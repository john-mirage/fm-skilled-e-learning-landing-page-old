import Button from "@components/button";
import Logo from "@components/logo";

export default function Footer() {
  return (
    <footer className="bg-dark-blue">
      <div className="container h-32 flex justify-between items-center">
        <Logo onDark={true} />
        <Button className="bg-gradient-to-b from-blue to-light-pink" />
      </div>
    </footer>
  );
}