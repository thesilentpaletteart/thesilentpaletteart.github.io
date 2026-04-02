"""
Rename and organize art images into categorized subdirectories.
Edit the rename_map below to define mappings from original filenames to
(category_folder, new_filename, display_title).
Usage: python scripts/rename_images.py
"""
import os, shutil

arts_dir = 'src/assets/images/arts'

# Mapping: original filename (without path) -> (category_folder, new_filename, title)
# Adjust this map based on analyze_deep.py output.
rename_map = {
    # === NATURE & GREENERY ===
    'photo_1_2026-04-02_21-16-00.jpg':  ('nature', 'verdant_whisper.jpg',       'Verdant Whisper'),
    'photo_3_2026-04-02_21-16-00.jpg':  ('nature', 'emerald_haze.jpg',          'Emerald Haze'),
    'photo_4_2026-04-02_21-16-00.jpg':  ('nature', 'spring_canopy.jpg',         'Spring Canopy'),
    'photo_7_2026-04-02_21-16-00.jpg':  ('nature', 'forest_serenity.jpg',       'Forest Serenity'),

    # === SEASCAPES & HORIZONS ===
    'photo_5_2026-04-02_21-16-00.jpg':  ('seascapes', 'coastal_calm.jpg',         'Coastal Calm'),
    'photo_8_2026-04-02_21-16-00.jpg':  ('seascapes', 'misty_shore.jpg',          'Misty Shore'),
    'photo_12_2026-04-02_21-16-00.jpg': ('seascapes', 'oceans_breath.jpg',        "Ocean's Breath"),
    'photo_13_2026-04-02_21-16-00.jpg': ('seascapes', 'distant_waters.jpg',       'Distant Waters'),
    'photo_14_2026-04-02_21-16-00.jpg': ('seascapes', 'horizon_drift.jpg',        'Horizon Drift'),
    'photo_15_2026-04-02_21-16-00.jpg': ('seascapes', 'deep_blue_reverie.jpg',    'Deep Blue Reverie'),
    'photo_16_2026-04-02_21-16-00.jpg': ('seascapes', 'midnight_tides.jpg',       'Midnight Tides'),
    'photo_17_2026-04-02_21-16-00.jpg': ('seascapes', 'silver_cove.jpg',          'Silver Cove'),
    'photo_18_2026-04-02_21-16-00.jpg': ('seascapes', 'lavender_tide.jpg',        'Lavender Tide'),
    'photo_21_2026-04-02_21-16-00.jpg': ('seascapes', 'quiet_harbor.jpg',         'Quiet Harbor'),
    'photo_22_2026-04-02_21-16-00.jpg': ('seascapes', 'still_waters.jpg',         'Still Waters'),
    'photo_23_2026-04-02_21-16-00.jpg': ('seascapes', 'sapphire_depths.jpg',      'Sapphire Depths'),
    'photo_25_2026-04-02_21-16-00.jpg': ('seascapes', 'azure_passage.jpg',        'Azure Passage'),
    'photo_26_2026-04-02_21-16-00.jpg': ('seascapes', 'peaceful_reflections.jpg', 'Peaceful Reflections'),
    'photo_27_2026-04-02_21-16-00.jpg': ('seascapes', 'morning_mist.jpg',         'Morning Mist'),
    'photo_29_2026-04-02_21-16-00.jpg': ('seascapes', 'gentle_ripples.jpg',       'Gentle Ripples'),
    'photo_30_2026-04-02_21-16-00.jpg': ('seascapes', 'foggy_bank.jpg',           'Foggy Bank'),
    'photo_31_2026-04-02_21-16-00.jpg': ('seascapes', 'clear_horizon.jpg',        'Clear Horizon'),
    'photo_32_2026-04-02_21-16-00.jpg': ('seascapes', 'tranquil_bay.jpg',         'Tranquil Bay'),
    'photo_34_2026-04-02_21-16-00.jpg': ('seascapes', 'sea_glass.jpg',            'Sea Glass'),
    'photo_37_2026-04-02_21-16-00.jpg': ('seascapes', 'coastal_breeze.jpg',       'Coastal Breeze'),
    'photo_38_2026-04-02_21-16-00.jpg': ('seascapes', 'glass_lake.jpg',           'Glass Lake'),
    'photo_40_2026-04-02_21-16-00.jpg': ('seascapes', 'tidal_pool.jpg',           'Tidal Pool'),
    'photo_41_2026-04-02_21-16-00.jpg': ('seascapes', 'cerulean_dream.jpg',       'Cerulean Dream'),
    'photo_42_2026-04-02_21-16-00.jpg': ('seascapes', 'adriatic_dusk.jpg',        'Adriatic Dusk'),
    'photo_43_2026-04-02_21-16-00.jpg': ('seascapes', 'aegean_light.jpg',         'Aegean Light'),

    # === WARM PALETTE & ABSTRACTS ===
    'photo_2_2026-04-02_21-16-00.jpg':  ('warm', 'crimson_twilight.jpg',    'Crimson Twilight'),
    'photo_6_2026-04-02_21-16-00.jpg':  ('warm', 'urban_palette.jpg',       'Urban Palette'),
    'photo_9_2026-04-02_21-16-00.jpg':  ('warm', 'amber_glow.jpg',          'Amber Glow'),
    'photo_10_2026-04-02_21-16-00.jpg': ('warm', 'golden_hour.jpg',         'Golden Hour'),
    'photo_11_2026-04-02_21-16-00.jpg': ('warm', 'violet_dusk.jpg',         'Violet Dusk'),
    'photo_19_2026-04-02_21-16-00.jpg': ('warm', 'burnt_sienna.jpg',        'Burnt Sienna'),
    'photo_20_2026-04-02_21-16-00.jpg': ('warm', 'plum_shadow.jpg',         'Plum Shadow'),
    'photo_24_2026-04-02_21-16-00.jpg': ('warm', 'misty_pathway.jpg',       'Misty Pathway'),
    'photo_28_2026-04-02_21-16-00.jpg': ('warm', 'mystic_garden.jpg',       'Mystic Garden'),
    'photo_33_2026-04-02_21-16-00.jpg': ('warm', 'dusk_reverie.jpg',        'Dusk Reverie'),
    'photo_35_2026-04-02_21-16-00.jpg': ('warm', 'autumn_whisper.jpg',      'Autumn Whisper'),
    'photo_36_2026-04-02_21-16-00.jpg': ('warm', 'sunset_ember.jpg',        'Sunset Ember'),
    'photo_39_2026-04-02_21-16-00.jpg': ('warm', 'twilight_calm.jpg',       'Twilight Calm'),
}


def main():
    # Create subdirectories
    categories = set(cat for cat, _, _ in rename_map.values())
    for cat in categories:
        os.makedirs(os.path.join(arts_dir, cat), exist_ok=True)

    # Rename and move files
    moved = 0
    for old_name, (cat, new_name, title) in rename_map.items():
        old_path = os.path.join(arts_dir, old_name)
        new_path = os.path.join(arts_dir, cat, new_name)
        if os.path.exists(old_path):
            shutil.move(old_path, new_path)
            print(f"  {old_name:>45} -> {cat}/{new_name}")
            moved += 1
        else:
            print(f"  WARNING: {old_path} not found!")

    print(f"\nDone! Moved {moved}/{len(rename_map)} files.")

    # Verify
    for cat in sorted(categories):
        cat_dir = os.path.join(arts_dir, cat)
        if os.path.isdir(cat_dir):
            count = len([f for f in os.listdir(cat_dir) if os.path.isfile(os.path.join(cat_dir, f))])
            print(f"  {cat}: {count} files")


if __name__ == '__main__':
    main()
