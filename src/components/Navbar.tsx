
import { GraduationCap, Mail, User, Code, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3">
      <ul className="flex items-center gap-6">
        <NavItem icon={User} label="About" onClick={() => scrollToSection('about')} />
        <NavItem icon={GraduationCap} label="Skills" onClick={() => scrollToSection('skills')} />
        <NavItem icon={Code} label="Projects" onClick={() => scrollToSection('projects')} />
        <NavItem icon={Mail} label="Contact" onClick={() => scrollToSection('contact')} />
      </ul>
    </nav>
  );
};

const NavItem = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) => (
  <li>
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
        "hover:bg-purple-500/10 hover:scale-105",
        "focus:outline-none focus:ring-2 focus:ring-purple-500/20"
      )}
    >
      <Icon className="w-4 h-4 text-purple-700" />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </button>
  </li>
);

export default Navbar;
