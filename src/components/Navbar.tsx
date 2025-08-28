import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="font-bold text-xl text-foreground">Luqman Booso</div>
      <div className="flex items-center gap-6">
        <Link href="#home" className="text-foreground hover:text-primary transition-colors">Home</Link>
        <Link href="#about" className="text-foreground hover:text-primary transition-colors">About</Link>
        <Link href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</Link>
        <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
