import os
from PIL import Image

ASSETS_DIR = 'assets'
MAX_WIDTH_BG = 1920
MAX_WIDTH_OTHER = 800
QUALITY = 80

def optimize_image(filename):
    filepath = os.path.join(ASSETS_DIR, filename)
    name, ext = os.path.splitext(filename)
    
    if ext.lower() not in ['.png', '.jpg', '.jpeg']:
        return

    try:
        with Image.open(filepath) as img:
            # Determine max width based on filename or usage (heuristic)
            if 'bg' in name or 'header' in name or 'texture' in name:
                max_width = MAX_WIDTH_BG
            else:
                max_width = MAX_WIDTH_OTHER

            # Resize if needed
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {filename} to {max_width}x{new_height}")

            # Save as WebP
            webp_filename = f"{name}.webp"
            webp_filepath = os.path.join(ASSETS_DIR, webp_filename)
            img.save(webp_filepath, 'WEBP', quality=QUALITY)
            print(f"Saved {webp_filename}")

    except Exception as e:
        print(f"Failed to optimize {filename}: {e}")

def main():
    if not os.path.exists(ASSETS_DIR):
        print(f"Directory {ASSETS_DIR} not found.")
        return

    for filename in os.listdir(ASSETS_DIR):
        optimize_image(filename)

if __name__ == "__main__":
    main()
