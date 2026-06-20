import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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

export const metadata: Metadata = {
  title: 'Appartement Paris 15e — 2 pièces lumineux, 38 m²',
  description:
    'Appartement 2 pièces de 38 m² à vendre au 18 Rue Yvart, Paris 15e. Entièrement rénové, cour intérieure, gardien, cave. €445 000.',
  openGraph: {
    title: 'Appartement Paris 15e — 18 Rue Yvart',
    description: 'Appartement lumineux au cœur du 15e — 38 m² · €445 000',
    images: ['/pictures/Paris-15e/living-1.jpeg'],
  },
}

const heroData: PropertyHeroData = {
  region: 'PARIS 15e · ÎLE-DE-FRANCE',
  title: 'Appartement Paris 15e',
  subtitle: '38 m² · 2 pièces · RDC · €445 000',
  backgroundImage: '/pictures/Paris-15e/living-2.jpeg',
  scroll: 'Découvrir',
}

const overviewData: PropertyOverviewData = {
  title: 'Un appartement lumineux au cœur du 15e',
  description:
    'À quelques pas de la Rue de la Convention, et des transports, au coeur du 15e arrondissement, découvrez ce bel appartement 2 pièces de 38 m², situé au RDC d\'une copropriété propre et bien entretenue, ravalée avec ascenseur et gardien. Entièrement rénové avec des prestations de qualité, il propose un espace de vie lumineux ouvrant sur une cour interieure, une cuisine fonctionnelle, 1 chambre lumineuse ainsi qu\'un agencement optimisé. Son environnement calme, sa luminosité et sa vue dégagée offrent un cadre de vie particulièrement agréable. À proximité immédiate des commerces et des établissements scolaires, ainsi que du metro Convention / Vaugirard.',
  features: [
    'Appartement entièrement rénové avec finitions soignées',
    'Séjour lumineux ouvrant sur cour intérieure calme',
    'Cuisine fonctionnelle équipée',
    '1 chambre lumineuse avec rangements intégrés',
    'Immeuble avec ascenseur, gardien et double sécurité',
    'Cave privative — proximité parking',
  ],
  stats: [
    { value: '38 m²', label: 'Surface' },
    { value: '2', label: 'Pièces' },
    { value: '1', label: 'Salle de bain' },
    { value: '1', label: 'Cave' },
  ],
  price: '€445 000',
  mainImage: '/pictures/Paris-15e/living-1.jpeg',
  floatingLabel: 'Paris 15e',
  floatingSize: '38 m²',
  floatingBedrooms: '2 pièces',
}

const galleryData: PropertyGalleryData = {
  images: [
    { src: '/pictures/Paris-15e/building.jpeg',    alt: 'Appartement Paris 15e — façade de l\'immeuble' },
    { src: '/pictures/Paris-15e/entrance-1.jpeg',  alt: 'Appartement Paris 15e — entrée principale' },
    { src: '/pictures/Paris-15e/living-2.jpeg',    alt: 'Appartement Paris 15e — salon lumineux' },
    { src: '/pictures/Paris-15e/living-1.jpeg',    alt: 'Appartement Paris 15e — espace de vie ouvert' },
    { src: '/pictures/Paris-15e/living-3.jpeg',    alt: 'Appartement Paris 15e — salon vue ensemble' },
    { src: '/pictures/Paris-15e/door-2.jpeg',      alt: 'Appartement Paris 15e — double portes sécurisées' },
    { src: '/pictures/Paris-15e/hallway-2.jpeg',   alt: 'Appartement Paris 15e — couloir' },
    { src: '/pictures/Paris-15e/kitchen.jpeg',     alt: 'Appartement Paris 15e — cuisine équipée' },
    { src: '/pictures/Paris-15e/kitchen-3.jpeg',   alt: 'Appartement Paris 15e — cuisine détails' },
    { src: '/pictures/Paris-15e/courtyard-2.jpeg', alt: 'Appartement Paris 15e — cour intérieure' },
    { src: '/pictures/Paris-15e/entrance-2.jpeg',  alt: 'Appartement Paris 15e — hall d\'entrée' },
    { src: '/pictures/Paris-15e/rue-yvart.jpg',    alt: '18 Rue Yvart, Paris 15e' },
  ],
  quote: 'Un appartement lumineux et calme au coeur du 15e arrondissement',
}

const featuresData: PropertyFeaturesData = {
  label: 'Caractéristiques',
  title: 'Ce qui rend cet appartement unique',
  items: [
    { title: 'Conciergerie', desc: 'Gardien présent assurant sécurité et gestion de la résidence 5j/7.' },
    { title: 'Sécurité', desc: 'Double portes sécurisées et interphone pour une tranquillité absolue.' },
    { title: 'Cave Aménagée', desc: 'Cave privative en sous-sol, optimisant le rangement au quotidien.' },
    { title: 'Parking', desc: 'Place de stationnement disponible, un atout rare au cœur du 15e arrondissement.' },
    { title: 'Luminosité', desc: 'Appartement baigné de lumière naturelle, ouvrant sur cour intérieure calme, sans vis-à-vis.' },
    { title: 'Cadre Calme', desc: 'Environnement résidentiel paisible à deux pas de toutes les commodités et des transports.' },
  ],
}

const locationData: PropertyLocationData = {
  bannerImage: '/pictures/Paris-15e/rue-yvart.jpg',
  bannerLabel: 'Paris 15e, Île-de-France',
  title: 'Explorer le 15e arrondissement',
  description:
    'Le 15e arrondissement, le plus grand et le plus peuplé de Paris, est un quartier résidentiel dynamique, à la fois calme et bien desservi. Commerces, écoles, marchés et transports sont tous à portée de main, avec le métro Convention et Vaugirard à proximité immédiate.',
  tabKeys: ['restaurants', 'marche', 'culture', 'shopping'],
  tabImages: {
    restaurants: [
      { src: '/pictures/Paris-15e/paris-bistro.jpg',   caption: 'Bistrot parisien du quartier' },
      { src: '/pictures/Paris-15e/paris-bistro-2.png', caption: 'Café terrasse' },
      { src: '/pictures/Paris-15e/paris-bistro-4.webp',caption: 'Restaurant local' },
      { src: '/pictures/Paris-15e/paris-resto.webp',   caption: 'Gastronomie parisienne' },
    ],
    marche: [
      { src: '/pictures/Paris-15e/paris-marche.jfif',  caption: 'Marché du quartier' },
      { src: '/pictures/Paris-15e/paris-marche-2.jpg', caption: 'Produits frais et locaux' },
      { src: '/pictures/Paris-15e/paris-marche-3.jpg', caption: 'Étals de fruits et légumes' },
      { src: '/pictures/Paris-15e/paris-marche-4.jfif',caption: 'Marchés couverts' },
      { src: '/pictures/Paris-15e/paris-marche-5.jpg', caption: 'Primeurs du 15e' },
    ],
    culture: [
      { src: '/pictures/Paris-15e/mediatheque.jpeg',   caption: 'Médiathèque Marguerite Yourcenar' },
      { src: '/pictures/Paris-15e/paris-metro.jpg',    caption: 'Métro Convention et Vaugirard' },
      { src: '/pictures/Paris-15e/canal.jpg',          caption: 'Canal et berges du 15e' },
      { src: '/pictures/Paris-15e/mairie15.jpg',       caption: 'Mairie du 15e arrondissement' },
      { src: '/pictures/Paris-15e/parc.webp',          caption: 'Parc Georges Brassens' },
    ],
    shopping: [
      { src: '/pictures/Paris-15e/beaugrenelle.jpg',   caption: 'Centre commercial Beaugrenelle' },
      { src: '/pictures/Paris-15e/beaugrenelle-2.jpg', caption: 'Beaugrenelle — shopping & restauration' },
      { src: '/pictures/Paris-15e/commerce.webp',      caption: 'Rue du Commerce — artères commerçantes' },
      { src: '/pictures/Paris-15e/marche-livres.jpg',  caption: 'Marché aux livres du 15e' },
    ],
  },
  mapSrc:
    'https://www.openstreetmap.org/export/embed.html?bbox=2.270%2C48.830%2C2.320%2C48.856&layer=mapnik&marker=48.8384%2C2.2955',
  mapLabel: '18 Rue Yvart, Paris 15e',
}

const contactData: PropertyContactData = {
  backgroundImage: '/pictures/Paris-15e/courtyard-2.jpeg',
  agent: {
    name: 'Annie S.',
    title: 'Propriétaire',
    email: 'contact@adresse-privee.fr',
  },
}

export default function Paris15ePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero data={heroData} />
        <PropertyOverview data={overviewData} />
        <Gallery data={galleryData} />
        <Features data={featuresData} />
        <Location data={locationData} />
        <VirtualTour />
        <Contact data={contactData} />
      </main>
      <Footer />
    </>
  )
}
