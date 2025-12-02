import os
from PIL import Image

SOURCE_IMAGE = 'assets/logo_clean.png'
ASSETS_DIR = 'assets'

def generate_favicons():
    if not os.path.exists(SOURCE_IMAGE):
        print(f"Error: Source image {SOURCE_IMAGE} not found.")
        return

    try:
        img = Image.open(SOURCE_IMAGE)
        
        # Generate favicon.ico (multi-resolution)
        icon_sizes = [(16, 16), (32, 32), (48, 48)]
        img.save('favicon.ico', sizes=icon_sizes)
        print("Generated favicon.ico")

        # Generate Apple Touch Icon (180x180)
        apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
        apple_icon.save(os.path.join(ASSETS_DIR, 'apple-touch-icon.png'))
        print("Generated apple-touch-icon.png")

        # Generate Android Chrome Icon (192x192)
        android_icon = img.resize((192, 192), Image.Resampling.LANCZOS)
        android_icon.save(os.path.join(ASSETS_DIR, 'android-chrome-192x192.png'))
        print("Generated android-chrome-192x192.png")

    except Exception as e:
        print(f"Error generating favicons: {e}")

if __name__ == "__main__":
    generate_favicons()
