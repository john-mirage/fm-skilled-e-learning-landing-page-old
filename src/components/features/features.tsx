import AnimationIcon from "./animation-icon";
import DesignIcon from "./design-icon";
import PhotographyIcon from "./photography-icon";
import CryptoIcon from "./crypto-icon";
import BusinessIcon from "./business-icon";

const features = [
  {
    name: "Animation",
    description: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    icon: AnimationIcon
  },
  {
    name: "Design",
    description: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    icon: DesignIcon,
  },
  {
    name: "Photography",
    description: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    icon: PhotographyIcon,
  },
  {
    name: "Crypto",
    description: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    icon: CryptoIcon,
  },
  {
    name: "Business",
    description: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    icon: BusinessIcon,
  }
]

interface FeatureProps {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>
}

function Feature({ icon: Icon, ...props }: FeatureProps) {
  return (
    <li className="relative bg-white px-7 pt-14 pb-8 rounded-xl shadow-card">
      <Icon className="absolute left-7 top-0 -translate-y-1/2" />
      <h3 className="mb-4 text-xl text-dark-blue font-extrabold leading-normal">{props.name}</h3>
      <p className="mb-6 text-base text-gray font-normal leading-7">{props.description}</p>
      <a className="text-pink text-lg font-bold leading-7 transition-colors hover:text-very-light-pink" href="#">Get Started</a>
    </li>
  );
}

export default function Features() {
  return (
    <main className="pb-20 bg-gradient-to-b from-white to-light-gray">
      <div className="container">
        <ul className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-3 md:gap-y-14 lg:grid-cols-3">
          <li className="bg-pink py-8 px-7 rounded-xl text-white text-2xl font-extrabold leading-8">Check out our most popular courses!</li>
          {features.map((feature) => (
            <Feature key={feature.name} name={feature.name} description={feature.description} icon={feature.icon} />
          ))}
        </ul>
      </div>
    </main>
  );
}