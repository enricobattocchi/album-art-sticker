import { Music2 } from "lucide-react";
import StickerGenerator from "@/components/StickerGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "hsl(330 85% 60%)" }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "hsl(270 80% 65%)" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-12 pb-8 px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
              <Music2 className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
            <span className="gradient-text">Music Sticker</span>
            <span className="text-foreground"> Generator</span>
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Create beautiful Instagram-style music stickers in seconds
          </p>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-16">
          <StickerGenerator />
        </main>

        {/* Footer */}
        <footer className="py-6 text-center">
          <p className="text-xs text-muted-foreground/60">
            Made with ♥ for music lovers
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
