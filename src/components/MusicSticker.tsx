import React from "react";
import { Music } from "lucide-react";

interface MusicStickerProps {
  coverArt: string | null;
  songTitle: string;
  performer: string;
}

const MusicSticker = React.forwardRef<HTMLDivElement, MusicStickerProps>(
  ({ coverArt, songTitle, performer }, ref) => {
    return (
      <div
        ref={ref}
        className="inline-flex items-center gap-3 px-3 py-2 rounded-2xl"
        style={{
          background: "rgba(40, 40, 40, 0.85)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Album Art */}
        <div 
          className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative"
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          {coverArt ? (
            <img
              src={coverArt}
              alt="Album cover"
              className="w-full h-full object-cover"
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
              }}
            >
              <Music className="w-6 h-6 text-white/80" />
            </div>
          )}
        </div>

        {/* Song Info */}
        <div className="flex flex-col min-w-0 pr-2">
          <span 
            className="text-sm font-semibold truncate max-w-[160px]"
            style={{ color: "rgba(255, 255, 255, 0.95)" }}
          >
            {songTitle || "Song Title"}
          </span>
          <span 
            className="text-xs truncate max-w-[160px]"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            {performer || "Artist Name"}
          </span>
        </div>

        {/* Music Icon */}
        <div 
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
          }}
        >
          <Music className="w-4 h-4 text-white" />
        </div>
      </div>
    );
  }
);

MusicSticker.displayName = "MusicSticker";

export default MusicSticker;
