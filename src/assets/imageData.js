
// Centralized asset pipeline containing 80+ structural component images across classes
export const imageData = {
  hero: [
    { id: 1, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80", title: "Premium Hardware & Architectural Fittings", subtitle: "Exquisite Craftsmanship for Refined Living Spaces" },
    { id: 2, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80", title: "Luxury Veneers & Structural Plywood", subtitle: "The Indestructible Core of Architectural Masterpieces" },
    { id: 3, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80", title: "Besieged Security & Smart Digital Locks", subtitle: "Where Absolute Sovereignty Meets Sophisticated IoT Automation" },
    { id: 4, img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80", title: "Palatial Custom Teak Wood Doors", subtitle: "Grand Visual Statements Formed From Century-Old Timbers" },
    { id: 5, img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80", title: "State-of-The-Art Modular Kitchen Systems", subtitle: "Culinary Spaces Redefined with High-Performance Ergonomics" }
  ],
categories: [
  {
    name: "Plywood",
    image: "/gallery/plywood/plywood1.jpg",
    items: "10 Products"
  },
  {
    name: "Laminates",
    image: "/gallery/laminates/laminates1.jpg",
    items: "10 Products"
  },
  {
    name: "Doors",
    image: "/gallery/doors/doors1.jpg",
    items: "10 Products"
  },
  {
    name: "Hardware",
    image: "/gallery/locks/locks1.jpg",
    items: "20 Products"
  }
],
  products: [

  // Doors
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Designer Door ${i + 1}`,
    category: "Doors",
    price: `₹${9000 + i * 500}`,
    img: `/gallery/doors/doors${i + 1}.jpg`
  })),

  // Locks
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    name: `Digital Lock ${i + 1}`,
    category: "Hardware",
    price: `₹${3500 + i * 200}`,
    img: `/gallery/locks/locks${i + 1}.jpg`
  })),

  // Plywood
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 21,
    name: `Plywood Sheet ${i + 1}`,
    category: "Plywood",
    price: `₹${2800 + i * 150}`,
    img: `/gallery/plywood/plywood${i + 1}.jpg`
  })),

  // Laminates
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 31,
    name: `Laminate Sheet ${i + 1}`,
    category: "Laminates",
    price: `₹${1200 + i * 100}`,
    img: `/gallery/laminates/laminates${i + 1}.jpg`
  })),

  // Bolts
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 41,
    name: `Bolt ${i + 1}`,
    category: "Hardware",
    price: `₹${250 + i * 25}`,
    img: `/gallery/bolts/bolts${i + 1}.jpg`
  }))

],
gallery: [
  // Doors
  ...Array.from({ length: 1 }, (_, i) => ({
    id: `door-${i + 1}`,
    title: `Designer Door ${i + 1}`,
    img: `/gallery/doors/doors${i + 1}.jpg`
  })),

  // Locks
  ...Array.from({ length: 2 }, (_, i) => ({
    id: `lock-${i + 1}`,
    title: `Digital Lock ${i + 1}`,
    img: `/gallery/locks/locks${i + 1}.jpg`
  })),

  // Laminates
  ...Array.from({ length: 2 }, (_, i) => ({
    id: `laminate-${i + 1}`,
    title: `Laminate ${i + 1}`,
    img: `/gallery/laminates/laminates${i + 1}.jpg`
  })),

  // Plywood
  ...Array.from({ length: 2 }, (_, i) => ({
    id: `plywood-${i + 1}`,
    title: `Plywood ${i + 1}`,
    img: `/gallery/plywood/plywood${i + 1}.jpg`
  })),

  // Bolts
  ...Array.from({ length:2 }, (_, i) => ({
    id: `bolt-${i + 1}`,
    title: `Bolt ${i + 1}`,
    img: `/gallery/bolts/bolts${i + 1}.jpg`
  }))
],
  brands: [
    { name: "Schneider Electric", logo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80" },
    { name: "Hettich", logo: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80" },
    { name: "Dorma", logo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80" },
    { name: "Godrej", logo: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=300&q=80" },
    { name: "Yale", logo: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=300&q=80" }
  ],
  testimonials: [
    {
      name: "Ramesh Kumar",
      role: "Interior Designer",
      profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "Sai & Co's products transformed our designs into premium finished spaces. Exceptional quality and service."
    },
    {
      name: "Anita Sharma",
      role: "Architect",
      profile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
      rating: 4,
      review: "Great product range and on-time delivery. Their hardware fittings are solid and stylish."
    },
    {
      name: "Vikram Singh",
      role: "Builder",
      profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "The gallery of samples helped our clients choose the perfect finishes. Highly recommended." 
    }
  ]
}
  