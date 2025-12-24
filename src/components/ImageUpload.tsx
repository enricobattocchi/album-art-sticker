import React, { useCallback } from "react";
import { Upload, ImageIcon } from "lucide-react";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  currentImage: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, currentImage }) => {
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          onImageUpload(result);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageUpload]
  );

  return (
    <div className="relative">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        id="cover-upload"
      />
      <label
        htmlFor="cover-upload"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-border rounded-xl cursor-pointer transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 group overflow-hidden"
      >
        {currentImage ? (
          <div className="relative w-full h-full">
            <img
              src={currentImage}
              alt="Cover preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <Upload className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground/80">Change image</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 p-6">
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ImageIcon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground/80">Upload cover art</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
            </div>
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
