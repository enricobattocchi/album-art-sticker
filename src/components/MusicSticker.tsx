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
        className="inline-flex items-center gap-4 px-3 py-3 rounded-lg"
        style={{
          background: "#ffffff",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Album Art with Equalizer Bars */}
        <div 
          className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative"
          style={{
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
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
                background: "linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)",
              }}
            >
              <Music className="w-8 h-8 text-gray-400" />
            </div>
          )}
          
          {/* Equalizer Bars */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
            <div 
              className="w-1.5 rounded-full bg-white"
              style={{ 
                height: "20px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
            <div 
              className="w-1.5 rounded-full bg-white"
              style={{ 
                height: "28px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
            <div 
              className="w-1.5 rounded-full bg-white"
              style={{ 
                height: "16px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>

        {/* Song Info */}
        <div className="flex flex-col min-w-0 pr-4">
          <span 
            className="text-xl font-bold truncate max-w-[200px]"
            style={{ 
              color: "#000000",
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            {songTitle || "Song Title"}
          </span>
          <span 
            className="text-lg truncate max-w-[200px]"
            style={{ 
              color: "#666666",
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            {performer || "Artist Name"}
          </span>
        </div>
      </div>
    );
  }
);

MusicSticker.displayName = "MusicSticker";

export default MusicSticker;
