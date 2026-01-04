import os
from PIL import Image
import glob

# Path to images
image_dir = 'assets/images/prducts'
log_file = 'optimization.log'

def optimize_images():
    with open(log_file, 'w') as log:
        if not os.path.exists(image_dir):
            log.write(f"Directory not found: {image_dir}\n")
            return

        files = glob.glob(os.path.join(image_dir, '*.[jJ][pP][gG]'))
        log.write(f"Found {len(files)} images.\n")

        for file_path in files:
            try:
                img = Image.open(file_path)
                original_size = os.path.getsize(file_path)
                
                # Resize if width > 1200
                if img.width > 1200:
                    ratio = 1200 / img.width
                    new_height = int(img.height * ratio)
                    img = img.resize((1200, new_height), Image.Resampling.LANCZOS)
                
                # Save with optimization
                img.save(file_path, 'JPEG', quality=85, optimize=True)
                
                new_size = os.path.getsize(file_path)
                log.write(f"Optimized {os.path.basename(file_path)}: {original_size/1024:.2f}KB -> {new_size/1024:.2f}KB\n")
                
            except Exception as e:
                log.write(f"Error processing {file_path}: {str(e)}\n")

if __name__ == "__main__":
    optimize_images()
