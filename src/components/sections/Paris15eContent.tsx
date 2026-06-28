'use client'

import { useLanguage } from '@/lib/LanguageContext'
import Hero from '@/components/sections/Hero'
import PropertyOverview from '@/components/sections/PropertyOverview'
import Gallery from '@/components/sections/Gallery'
import Features from '@/components/sections/Features'
import Location from '@/components/sections/Location'
import VirtualTour from '@/components/sections/VirtualTour'
import Contact from '@/components/sections/Contact'
import type {
  PropertyHeroData,
  PropertyOverviewData,
  PropertyGalleryData,
  PropertyFeaturesData,
  PropertyLocationData,
  PropertyContactData,
} from '@/lib/propertyTypes'

const GALLERY_IMAGES = [
  { src: '/pictures/Paris-15e/building.jpeg',    alt: "Appartement Paris 15e — façade de l'immeuble" },
  { src: '/pictures/Paris-15e/entrance-1.jpeg',  alt: 'Appartement Paris 15e — entrée principale' },
  { src: '/pictures/Paris-15e/living-2.jpeg',    alt: 'Appartement Paris 15e — salon lumineux' },
  { src: '/pictures/Paris-15e/living-1.jpeg',    alt: 'Appartement Paris 15e — espace de vie ouvert' },
  { src: '/pictures/Paris-15e/living-3.jpeg',    alt: 'Appartement Paris 15e — salon vue ensemble' },
  { src: '/pictures/Paris-15e/door-2.jpeg',      alt: 'Appartement Paris 15e — double portes sécurisées' },
  { src: '/pictures/Paris-15e/hallway-2.jpeg',   alt: 'Appartement Paris 15e — couloir' },
  { src: '/pictures/Paris-15e/kitchen.jpeg',     alt: 'Appartement Paris 15e — cuisine équipée' },
  { src: '/pictures/Paris-15e/kitchen-3.jpeg',   alt: 'Appartement Paris 15e — cuisine détails' },
  { src: '/pictures/Paris-15e/courtyard-2.jpeg', alt: 'Appartement Paris 15e — cour intérieure' },
  { src: '/pictures/Paris-15e/entrance-2.jpeg',  alt: "Appartement Paris 15e — hall d'entrée" },
  { src: '/pictures/Paris-15e/rue-yvart.jpg',    alt: '18 Rue Yvart, Paris 15e' },
]

const LOCATION_DATA: Omit<PropertyLocationData, 'title' | 'description'> = {
  bannerImage: '/pictures/Paris-15e/rue-yvart.jpg',
  bannerLabel: 'Paris 15e, Île-de-France',
  tabKeys: ['restaurants', 'marche', 'culture', 'shopping'],
  tabImages: {
    restaurants: [
      { src: '/pictures/Paris-15e/paris-bistro.jpg',    caption: 'Bistrot parisien du quartier' },
      { src: '/pictures/Paris-15e/paris-bistro-2.png',  caption: 'Café terrasse' },
      { src: '/pictures/Paris-15e/paris-bistro-4.webp', caption: 'Restaurant local' },
      { src: '/pictures/Paris-15e/paris-resto.webp',    caption: 'Gastronomie parisienne' },
    ],
    marche: [
      { src: '/pictures/Paris-15e/paris-marche.jfif',   caption: 'Marché du quartier' },
      { src: '/pictures/Paris-15e/paris-marche-2.jpg',  caption: 'Produits frais et locaux' },
      { src: '/pictures/Paris-15e/paris-marche-3.jpg',  caption: 'Étals de fruits et légumes' },
      { src: '/pictures/Paris-15e/paris-marche-4.jfif', caption: 'Marchés couverts' },
      { src: '/pictures/Paris-15e/paris-marche-5.jpg',  caption: 'Primeurs du 15e' },
    ],
    culture: [
      { src: '/pictures/Paris-15e/mediatheque.jpeg', caption: 'Médiathèque Marguerite Yourcenar' },
      { src: '/pictures/Paris-15e/paris-metro.jpg',  caption: 'Métro Convention et Vaugirard' },
      { src: '/pictures/Paris-15e/canal.jpg',        caption: 'Canal et berges du 15e' },
      { src: '/pictures/Paris-15e/mairie15.jpg',     caption: 'Mairie du 15e arrondissement' },
      { src: '/pictures/Paris-15e/parc.webp',        caption: 'Parc Georges Brassens' },
    ],
    shopping: [
      { src: '/pictures/Paris-15e/beaugrenelle.jpg',   caption: 'Centre commercial Beaugrenelle' },
      { src: '/pictures/Paris-15e/beaugrenelle-2.jpg', caption: 'Beaugrenelle — shopping & restauration' },
      { src: '/pictures/Paris-15e/commerce.webp',      caption: 'Rue du Commerce — artères commerçantes' },
      { src: '/pictures/Paris-15e/marche-livres.jpg',  caption: 'Marché aux livres du 15e' },
    ],
  },
  mapSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=2.2775%2C48.8218%2C2.3275%2C48.8518&layer=mapnik&marker=48.8368%2C2.3025',
  mapLabel: '18 Rue Yvart, Paris 15e',
}

const CONTACT_DATA: PropertyContactData = {
  backgroundImage: '/pictures/Paris-15e/courtyard-2.jpeg',
  agent: { name: 'Annie S.', title: 'Propriétaire', email: 'contact@adresse-privee.fr' },
}

export default function Paris15eContent() {
  const { t } = useLanguage()
  const p = t.paris15e

  const roomsLabel = p.overview.floatingBedrooms.replace(/^\S+\s*/, '')

  const heroData: PropertyHeroData = {
    region: p.hero.region,
    title: p.hero.title,
    subtitle: p.hero.subtitle,
    backgroundImage: '/pictures/Paris-15e/living-2.jpeg',
    scroll: t.hero.scroll,
  }

  const overviewData: PropertyOverviewData = {
    title: p.overview.title,
    description: p.overview.description,
    features: [...p.overview.features],
    stats: [
      { value: '42 m²', label: t.overview.stats.sizeLabel },
      { value: '2', label: roomsLabel },
      { value: '1', label: t.overview.stats.bathroomsLabel },
      { value: '1', label: p.overview.caveLabel },
    ],
    price: '€500 000',
    mainImage: '/pictures/Paris-15e/living-1.jpeg',
    floatingLabel: 'Paris 15e',
    floatingSize: '42 m²',
    floatingBedrooms: p.overview.floatingBedrooms,
  }

  const galleryData: PropertyGalleryData = {
    images: GALLERY_IMAGES,
    quote: p.gallery.quote,
  }

  const featuresData: PropertyFeaturesData = {
    title: p.features.title,
    items: [...p.features.items],
  }

  const locationData: PropertyLocationData = {
    ...LOCATION_DATA,
    title: p.location.title,
    description: p.location.description,
  }

  return (
    <>
      <Hero data={heroData} />
      <PropertyOverview data={overviewData} />
      <Gallery data={galleryData} />
      <Features data={featuresData} />
      <Location data={locationData} />
      <VirtualTour />
      <Contact data={CONTACT_DATA} />
    </>
  )
}
