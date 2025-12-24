import React, { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import MusicSticker from "./MusicSticker";
import ImageUpload from "./ImageUpload";

const StickerGenerator: React.FC = () => {
  const [coverArt, setCoverArt] = useState<string | null>(null);
  const [songTitle, setSongTitle] = useState("");
  const [performer, setPerformer] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const stickerRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!stickerRef.current) return;

    setIsGenerating(true);
    try {
      const dataUrl = await toPng(stickerRef.current, {
        backgroundColor: undefined,
        pixelRatio: 3,
        skipAutoScale: true,
      });

      const link = document.createElement("a");
      link.download = `${songTitle || "music-sticker"}.png`;
      link.href = dataUrl;
      link.click();

      toast.success("Sticker downloaded successfully!");
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate sticker. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Form Section */}
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="cover" className="text-sm font-medium text-foreground/80">
                Cover Art
              </Label>
              <ImageUpload onImageUpload={setCoverArt} currentImage={coverArt} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium text-foreground/80">
                Song Title
              </Label>
              <Input
                id="title"
                placeholder="Enter song title..."
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
                className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="performer" className="text-sm font-medium text-foreground/80">
                Performer
              </Label>
              <Input
                id="performer"
                placeholder="Enter performer name..."
                value={performer}
                onChange={(e) => setPerformer(e.target.value)}
                className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <Button
              onClick={handleDownload}
              disabled={isGenerating}
              className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground font-semibold rounded-xl"
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Generating...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Sticker
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
              Live Preview
            </p>
          </div>

          {/* Sticker Preview Container */}
          <div className="relative">
            {/* Background glow effect */}
            <div 
              className="absolute inset-0 blur-3xl opacity-30 animate-pulse-glow"
              style={{
                background: "radial-gradient(circle, hsl(330 85% 60%) 0%, hsl(270 80% 65%) 50%, transparent 70%)",
                transform: "scale(1.5)",
              }}
            />
            
            {/* The actual sticker */}
            <div className="relative animate-float">
              <MusicSticker
                ref={stickerRef}
                coverArt={coverArt}
                songTitle={songTitle}
                performer={performer}
              />
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-8 text-center max-w-xs">
            Your sticker will be exported as a transparent PNG — perfect for stories!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickerGenerator;
