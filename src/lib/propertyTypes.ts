export interface PropertyHeroData {
  region: string
  title: string
  subtitle: string
  backgroundImage: string
  scroll?: string
}

export interface PropertyOverviewData {
  title?: string
  description?: string
  features?: string[]
  stats?: { value: string; label: string }[]
  price?: string
  mainImage?: string
  floatingLabel?: string
  floatingSize?: string
  floatingBedrooms?: string
}

export interface PropertyGalleryData {
  images: { src: string; alt: string }[]
  quote?: string
}

export interface PropertyFeaturesData {
  label?: string
  title?: string
  items?: { title: string; desc: string }[]
}

export type LocationTabKey = 'restaurants' | 'marche' | 'culture' | 'shopping' | 'quartier'

export interface PropertyLocationData {
  bannerImage?: string
  bannerLabel?: string
  title?: string
  description?: string
  tabImages?: Partial<Record<LocationTabKey, { src: string; caption: string }[]>>
  tabKeys?: LocationTabKey[]
  mapSrc?: string
  mapLabel?: string
}

export interface PropertyContactData {
  backgroundImage?: string
  agent?: { name: string; title: string; email: string }
  formEndpoint?: string
}
