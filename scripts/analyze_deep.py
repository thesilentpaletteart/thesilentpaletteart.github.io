"""
Deep image analysis — color profiling, scene classification, and categorization.
Analyzes: region brightness, hue/saturation, warmth, edge density, texture,
symmetry, gradient direction, and dominant palette.
Usage: python scripts/analyze_deep.py <arts_directory>
"""
from PIL import Image, ImageFilter
import os, sys, colorsys
from collections import defaultdict

arts_dir = sys.argv[1] if len(sys.argv) > 1 else 'src/assets/images/arts'

def get_files(directory):
    all_files = []
    for root, _, files in os.walk(directory):
        for f in files:
            if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                all_files.append(os.path.join(root, f))
    return sorted(all_files)

def extract_features(path):
    img = Image.open(path).convert('RGB')
    w, h = img.size

    # Regions
    top = img.crop((0, 0, w, h // 5))
    upper = img.crop((0, h // 5, w, 2 * h // 5))
    middle = img.crop((0, 2 * h // 5, w, 3 * h // 5))
    lower = img.crop((0, 3 * h // 5, w, 4 * h // 5))
    bottom = img.crop((0, 4 * h // 5, w, h))
    center = img.crop((w // 4, h // 4, 3 * w // 4, 3 * h // 4))

    def region_stats(region):
        r = region.resize((20, 20))
        px = list(r.getdata())
        avg_r = sum(p[0] for p in px) // len(px)
        avg_g = sum(p[1] for p in px) // len(px)
        avg_b = sum(p[2] for p in px) // len(px)
        brightness = (avg_r * 299 + avg_g * 587 + avg_b * 114) // 1000
        h_val, s, v = colorsys.rgb_to_hsv(avg_r / 255, avg_g / 255, avg_b / 255)

        warm = cool = green = neutral = saturated = 0
        for p in px:
            hh, ss, vv = colorsys.rgb_to_hsv(p[0] / 255, p[1] / 255, p[2] / 255)
            if ss > 0.2:
                saturated += 1
                if 0 <= hh <= 0.12 or hh > 0.85:
                    warm += 1
                elif 0.12 < hh <= 0.2:
                    warm += 1
                elif 0.2 < hh <= 0.45:
                    green += 1
                elif 0.45 < hh <= 0.75:
                    cool += 1
                else:
                    neutral += 1
            else:
                neutral += 1

        return {
            'rgb': (avg_r, avg_g, avg_b),
            'brightness': brightness,
            'hue': round(h_val * 360),
            'saturation': round(s * 100),
            'warm': warm, 'cool': cool, 'green': green, 'neutral': neutral,
            'saturated_pct': round(saturated / len(px) * 100),
        }

    regions = {
        'top': region_stats(top),
        'upper': region_stats(upper),
        'middle': region_stats(middle),
        'lower': region_stats(lower),
        'bottom': region_stats(bottom),
        'center': region_stats(center),
    }

    # Edge analysis
    gray = img.convert('L').resize((150, 150))
    edges = gray.filter(ImageFilter.FIND_EDGES)
    edge_px = list(edges.getdata())
    top_edges = sum(edge_px[i] for i in range(0, 150 * 50)) / (150 * 50)
    mid_edges = sum(edge_px[i] for i in range(150 * 50, 150 * 100)) / (150 * 50)
    bot_edges = sum(edge_px[i] for i in range(150 * 100, 150 * 150)) / (150 * 50)

    # Texture (std dev of grayscale)
    gray_px = list(gray.getdata())
    mean_gray = sum(gray_px) / len(gray_px)
    std_gray = (sum((p - mean_gray) ** 2 for p in gray_px) / len(gray_px)) ** 0.5

    # Symmetry (left vs right)
    left = img.crop((0, 0, w // 2, h)).resize((20, 20))
    right = img.crop((w // 2, 0, w, h)).resize((20, 20))
    left_px = list(left.getdata())
    right_px = list(right.getdata())
    symmetry_diff = sum(
        abs(l[0] - r[0]) + abs(l[1] - r[1]) + abs(l[2] - r[2])
        for l, r in zip(left_px, right_px)
    ) / (len(left_px) * 3)

    # Brightness gradient direction
    b_values = [regions[r]['brightness'] for r in ['top', 'upper', 'middle', 'lower', 'bottom']]
    if b_values[0] > b_values[4] + 15:
        gradient_dir = 'top_light'
    elif b_values[4] > b_values[0] + 15:
        gradient_dir = 'bot_light'
    else:
        gradient_dir = 'uniform'

    # Frame detection
    edge_b = (regions['top']['brightness'] + regions['bottom']['brightness']) / 2
    center_b = regions['center']['brightness']
    has_frame = abs(edge_b - center_b) > 25

    # Overall color dominance
    total_warm = sum(regions[r]['warm'] for r in regions)
    total_cool = sum(regions[r]['cool'] for r in regions)
    total_green = sum(regions[r]['green'] for r in regions)

    if total_green > max(total_warm, total_cool):
        dominant = 'GREEN/NATURE'
    elif total_warm > total_cool * 1.5:
        dominant = 'WARM/SUNSET'
    elif total_cool > total_warm * 1.5:
        dominant = 'COOL/WATER'
    else:
        dominant = 'MIXED'

    return {
        'regions': regions,
        'edge_density': {'top': round(top_edges, 1), 'mid': round(mid_edges, 1), 'bot': round(bot_edges, 1)},
        'texture_std': round(std_gray, 1),
        'symmetry_diff': round(symmetry_diff, 1),
        'gradient_dir': gradient_dir,
        'has_frame': has_frame,
        'dominant_palette': dominant,
        'brightness_profile': b_values,
        'center_saturation': regions['center']['saturation'],
    }


# ===== Main =====
files = get_files(arts_dir)
results = []

for path in files:
    feat = extract_features(path)
    rel = os.path.relpath(path, arts_dir)

    center_sat = feat['center_saturation']
    texture = feat['texture_std']
    gradient = feat['gradient_dir']
    dom = feat['dominant_palette']
    edge_mid = feat['edge_density']['mid']
    brightness_range = max(feat['brightness_profile']) - min(feat['brightness_profile'])
    avg_brightness = sum(feat['brightness_profile']) / 5
    symm = feat['symmetry_diff']

    # Classify scene type
    if dom == 'GREEN/NATURE':
        scene = 'NATURE'
    elif dom == 'COOL/WATER':
        scene = 'SEASCAPE' if gradient == 'top_light' else 'WATERSCAPE'
    elif dom == 'WARM/SUNSET':
        scene = 'SUNSET' if gradient == 'top_light' else 'WARM_SCENE'
    else:
        if edge_mid > 25:
            scene = 'DETAILED'
        elif brightness_range > 40:
            scene = 'HIGH_CONTRAST'
        elif texture > 40:
            scene = 'TEXTURED'
        else:
            scene = 'ATMOSPHERIC'

    mid_r = feat['regions']['middle']['rgb']
    center_r = feat['regions']['center']['rgb']

    results.append({
        'file': rel,
        'scene': scene,
        'dominant': dom,
        'gradient': gradient,
        'center_sat': center_sat,
        'texture': texture,
        'brightness_range': brightness_range,
        'avg_brightness': round(avg_brightness),
        'edge_mid': edge_mid,
        'symm': round(symm),
        'mid_rgb': mid_r,
        'center_rgb': center_r,
    })

    print(
        f"{rel:<50} | {scene:12} | {dom:12} | Grad:{gradient:10} "
        f"| CtrSat:{center_sat:2}% | Tex:{texture:4} | BRange:{brightness_range:3} "
        f"| AvgB:{round(avg_brightness):3} | MidEdge:{edge_mid:4} | Sym:{round(symm):3} "
        f"| Mid:({mid_r[0]:3},{mid_r[1]:3},{mid_r[2]:3}) "
        f"| Ctr:({center_r[0]:3},{center_r[1]:3},{center_r[2]:3})"
    )

# Group by scene type
print("\n\n=== GROUPING BY SCENE TYPE ===")
groups = defaultdict(list)
for r in results:
    groups[r['scene']].append(r['file'])

for scene, files_list in sorted(groups.items()):
    print(f"{scene}: ({len(files_list)}) {files_list}")

# Suggested categories
print("\n\n=== SUGGESTED 3 CATEGORIES ===")
nature_list = []
water_list = []
warm_list = []
detailed_list = []
atmospheric_list = []

for r in results:
    if r['dominant'] == 'GREEN/NATURE' or r['scene'] == 'NATURE':
        nature_list.append(r['file'])
    elif r['dominant'] == 'COOL/WATER' or r['scene'] in ('SEASCAPE', 'WATERSCAPE'):
        water_list.append(r['file'])
    elif r['dominant'] == 'WARM/SUNSET' or r['scene'] in ('SUNSET', 'WARM_SCENE'):
        warm_list.append(r['file'])
    elif r['scene'] in ('DETAILED', 'HIGH_CONTRAST', 'TEXTURED'):
        detailed_list.append(r['file'])
    else:
        atmospheric_list.append(r['file'])

print(f"\nNature/Landscape: ({len(nature_list)}) {nature_list}")
print(f"Waterscape/Cool:  ({len(water_list)}) {water_list}")
print(f"Warm/Sunset:      ({len(warm_list)}) {warm_list}")
print(f"Atmospheric:      ({len(atmospheric_list)}) {atmospheric_list}")
print(f"Detailed:         ({len(detailed_list)}) {detailed_list}")
