"""
Basic image metadata analysis — dimensions, aspect ratio, file size.
Usage: python scripts/analyze_images.py <arts_directory>
"""
from PIL import Image
import os, sys

arts_dir = sys.argv[1] if len(sys.argv) > 1 else 'src/assets/images/arts'

def get_files(directory):
    all_files = []
    for root, _, files in os.walk(directory):
        for f in files:
            if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                all_files.append(os.path.join(root, f))
    return sorted(all_files)

files = get_files(arts_dir)

print(f"{'File':<60} | {'Size':>10} | {'AR':>5} | {'KB':>8}")
print("-" * 95)

for path in files:
    img = Image.open(path)
    w, h = img.size
    ar = round(w / h, 2)
    fsize = round(os.path.getsize(path) / 1024, 1)
    rel = os.path.relpath(path, arts_dir)
    print(f"{rel:<60} | {w:>4}x{h:<4} | {ar:>5} | {fsize:>7}KB")

print(f"\nTotal: {len(files)} images")
