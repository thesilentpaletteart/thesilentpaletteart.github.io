import type { Artwork, CategoryTab } from '../types';

/* ===== Import all artwork images ===== */

// Nature & Greenery
import verdantWhisper from '../assets/images/arts/nature/verdant_whisper.jpg';
import emeraldHaze from '../assets/images/arts/nature/emerald_haze.jpg';
import springCanopy from '../assets/images/arts/nature/spring_canopy.jpg';
import forestSerenity from '../assets/images/arts/nature/forest_serenity.jpg';

// Seascapes & Horizons
import coastalCalm from '../assets/images/arts/seascapes/coastal_calm.jpg';
import mistyShore from '../assets/images/arts/seascapes/misty_shore.jpg';
import oceansBreath from '../assets/images/arts/seascapes/oceans_breath.jpg';
import distantWaters from '../assets/images/arts/seascapes/distant_waters.jpg';
import horizonDrift from '../assets/images/arts/seascapes/horizon_drift.jpg';
import deepBlueReverie from '../assets/images/arts/seascapes/deep_blue_reverie.jpg';
import midnightTides from '../assets/images/arts/seascapes/midnight_tides.jpg';
import silverCove from '../assets/images/arts/seascapes/silver_cove.jpg';
import lavenderTide from '../assets/images/arts/seascapes/lavender_tide.jpg';
import quietHarbor from '../assets/images/arts/seascapes/quiet_harbor.jpg';
import stillWaters from '../assets/images/arts/seascapes/still_waters.jpg';
import sapphireDepths from '../assets/images/arts/seascapes/sapphire_depths.jpg';
import azurePassage from '../assets/images/arts/seascapes/azure_passage.jpg';
import peacefulReflections from '../assets/images/arts/seascapes/peaceful_reflections.jpg';
import morningMist from '../assets/images/arts/seascapes/morning_mist.jpg';
import gentleRipples from '../assets/images/arts/seascapes/gentle_ripples.jpg';
import foggyBank from '../assets/images/arts/seascapes/foggy_bank.jpg';
import clearHorizon from '../assets/images/arts/seascapes/clear_horizon.jpg';
import tranquilBay from '../assets/images/arts/seascapes/tranquil_bay.jpg';
import seaGlass from '../assets/images/arts/seascapes/sea_glass.jpg';
import coastalBreeze from '../assets/images/arts/seascapes/coastal_breeze.jpg';
import glassLake from '../assets/images/arts/seascapes/glass_lake.jpg';
import tidalPool from '../assets/images/arts/seascapes/tidal_pool.jpg';
import ceruleanDream from '../assets/images/arts/seascapes/cerulean_dream.jpg';
import adriaticDusk from '../assets/images/arts/seascapes/adriatic_dusk.jpg';
import aegeanLight from '../assets/images/arts/seascapes/aegean_light.jpg';

// Warm Palette & Abstracts
import crimsonTwilight from '../assets/images/arts/warm/crimson_twilight.jpg';
import urbanPalette from '../assets/images/arts/warm/urban_palette.jpg';
import amberGlow from '../assets/images/arts/warm/amber_glow.jpg';
import goldenHour from '../assets/images/arts/warm/golden_hour.jpg';
import violetDusk from '../assets/images/arts/warm/violet_dusk.jpg';
import burntSienna from '../assets/images/arts/warm/burnt_sienna.jpg';
import plumShadow from '../assets/images/arts/warm/plum_shadow.jpg';
import mistyPathway from '../assets/images/arts/warm/misty_pathway.jpg';
import mysticGarden from '../assets/images/arts/warm/mystic_garden.jpg';
import duskReverie from '../assets/images/arts/warm/dusk_reverie.jpg';
import autumnWhisper from '../assets/images/arts/warm/autumn_whisper.jpg';
import sunsetEmber from '../assets/images/arts/warm/sunset_ember.jpg';
import twilightCalm from '../assets/images/arts/warm/twilight_calm.jpg';

/* ===== Category Tabs ===== */

export const categoryTabs: CategoryTab[] = [
  { slug: 'nature', label: 'Nature & Greenery' },
  { slug: 'seascapes', label: 'Seascapes & Horizons' },
  { slug: 'warm', label: 'Warm Palette & Abstracts' },
];

/* ===== Artwork Data ===== */

const natureWorks: Artwork[] = [
  {
    id: 1,
    title: 'Verdant Whisper',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: verdantWhisper,
  },
  {
    id: 2,
    title: 'Emerald Haze',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: emeraldHaze,
  },
  {
    id: 3,
    title: 'Spring Canopy',
    medium: 'Acrylic on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: springCanopy,
  },
  {
    id: 4,
    title: 'Forest Serenity',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: forestSerenity,
  },
];

const seascapeWorks: Artwork[] = [
  {
    id: 5,
    title: 'Coastal Calm',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: coastalCalm,
  },
  {
    id: 6,
    title: 'Misty Shore',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: mistyShore,
  },
  {
    id: 7,
    title: "Ocean's Breath",
    medium: 'Acrylic on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: oceansBreath,
  },
  {
    id: 8,
    title: 'Distant Waters',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: distantWaters,
  },
  {
    id: 9,
    title: 'Horizon Drift',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: horizonDrift,
  },
  {
    id: 10,
    title: 'Deep Blue Reverie',
    medium: 'Oil on Linen',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: deepBlueReverie,
  },
  {
    id: 11,
    title: 'Midnight Tides',
    medium: 'Acrylic on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: midnightTides,
  },
  {
    id: 12,
    title: 'Silver Cove',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: silverCove,
  },
  {
    id: 13,
    title: 'Lavender Tide',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: lavenderTide,
  },
  {
    id: 14,
    title: 'Quiet Harbor',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: quietHarbor,
  },
  {
    id: 15,
    title: 'Still Waters',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: stillWaters,
  },
  {
    id: 16,
    title: 'Sapphire Depths',
    medium: 'Acrylic on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: sapphireDepths,
  },
  {
    id: 17,
    title: 'Azure Passage',
    medium: 'Oil on Linen',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: azurePassage,
  },
  {
    id: 18,
    title: 'Peaceful Reflections',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: peacefulReflections,
  },
  {
    id: 19,
    title: 'Morning Mist',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: morningMist,
  },
  {
    id: 20,
    title: 'Gentle Ripples',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: gentleRipples,
  },
  {
    id: 21,
    title: 'Foggy Bank',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: foggyBank,
  },
  {
    id: 22,
    title: 'Clear Horizon',
    medium: 'Acrylic on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: clearHorizon,
  },
  {
    id: 23,
    title: 'Tranquil Bay',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: tranquilBay,
  },
  {
    id: 24,
    title: 'Sea Glass',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: seaGlass,
  },
  {
    id: 25,
    title: 'Coastal Breeze',
    medium: 'Oil on Linen',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: coastalBreeze,
  },
  {
    id: 26,
    title: 'Glass Lake',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: glassLake,
  },
  {
    id: 27,
    title: 'Tidal Pool',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: tidalPool,
  },
  {
    id: 28,
    title: 'Cerulean Dream',
    medium: 'Acrylic on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: ceruleanDream,
  },
  {
    id: 29,
    title: 'Adriatic Dusk',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: adriaticDusk,
  },
  {
    id: 30,
    title: 'Aegean Light',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: aegeanLight,
  },
];

const warmWorks: Artwork[] = [
  {
    id: 31,
    title: 'Crimson Twilight',
    medium: 'Oil on Canvas',
    size: "5.83' × 8.27'",
    price: '₹3,999',
    image: crimsonTwilight,
  },
  {
    id: 32,
    title: 'Urban Palette',
    medium: 'Mixed Media',
    size: "5.83' × 8.27'",
    price: '₹3,999',
    image: urbanPalette,
  },
  {
    id: 33,
    title: 'Amber Glow',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: amberGlow,
  },
  {
    id: 34,
    title: 'Golden Hour',
    medium: 'Acrylic on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: goldenHour,
  },
  {
    id: 35,
    title: 'Violet Dusk',
    medium: 'Oil on Linen',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: violetDusk,
  },
  {
    id: 36,
    title: 'Burnt Sienna',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: burntSienna,
  },
  {
    id: 37,
    title: 'Plum Shadow',
    medium: 'Acrylic on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: plumShadow,
  },
  {
    id: 38,
    title: 'Misty Pathway',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: mistyPathway,
  },
  {
    id: 39,
    title: 'Mystic Garden',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: mysticGarden,
  },
  {
    id: 40,
    title: 'Dusk Reverie',
    medium: 'Watercolor',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: duskReverie,
  },
  {
    id: 41,
    title: 'Autumn Whisper',
    medium: 'Oil on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: autumnWhisper,
  },
  {
    id: 42,
    title: 'Sunset Ember',
    medium: 'Oil on Linen',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: sunsetEmber,
  },
  {
    id: 43,
    title: 'Twilight Calm',
    medium: 'Acrylic on Canvas',
    size: "4.1' × 5.8'",
    price: '₹3,999',
    image: twilightCalm,
  },
];

/* ===== Exported Map ===== */

export const artworksByCategory: Record<string, Artwork[]> = {
  'nature': natureWorks,
  'seascapes': seascapeWorks,
  'warm': warmWorks,
};

/* ===== Helper ===== */

export const getFeaturedArtworks = (total: number = 3): Artwork[] => {
  const allWorks: Artwork[] = categoryTabs.flatMap((tab) =>
    artworksByCategory[tab.slug] || []
  );
  return allWorks.slice(0, total);
};
