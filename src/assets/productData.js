export const productData = [

  // DOORS
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `door-${i + 1}`,
    name: `Designer Door ${i + 1}`,
    category: "Doors",
    shortDesc: "Premium designer door.",
    heroImage: `/gallery/doors/doors${i + 1}.jpg`,
    detailedDesc: "Premium quality designer door for modern homes.",
    specifications: {
      Material: "Wood",
      Finish: "Premium"
    },
    originalPrice: 12000,
    price: 9500 + (i * 500)
  })),

  // LOCKS
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `lock-${i + 1}`,
    name: `Digital Lock ${i + 1}`,
    category: "Hardware",
    shortDesc: "Smart security lock.",
    heroImage: `/gallery/locks/locks${i + 1}.jpg`,
    detailedDesc: "Advanced digital locking system.",
    specifications: {
      Type: "Digital",
      Warranty: "2 Years"
    },
    originalPrice: 6000,
    price: 4500 + (i * 300)
  })),

  // PLYWOOD
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `plywood-${i + 1}`,
    name: `Plywood Sheet ${i + 1}`,
    category: "Plywood",
    shortDesc: "Premium plywood board.",
    heroImage: `/gallery/plywood/plywood${i + 1}.jpg`,
    detailedDesc: "High quality plywood sheet.",
    specifications: {
      Thickness: "18mm",
      Grade: "MR"
    },
    originalPrice: 4000,
    price: 2800 + (i * 200)
  })),

  // LAMINATES
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `laminate-${i + 1}`,
    name: `Laminate Sheet ${i + 1}`,
    category: "Laminates",
    shortDesc: "Decorative laminate sheet.",
    heroImage: `/gallery/laminates/laminates${i + 1}.jpg`,
    detailedDesc: "Stylish decorative laminate.",
    specifications: {
      Finish: "Glossy",
      Thickness: "1mm"
    },
    originalPrice: 1800,
    price: 1200 + (i * 100)
  })),

  // BOLTS
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `bolt-${i + 1}`,
    name: `Bolt ${i + 1}`,
    category: "Hardware",
    shortDesc: "Heavy duty hardware bolt.",
    heroImage: `/gallery/bolts/bolts${i + 1}.jpg`,
    detailedDesc: "Premium hardware fitting.",
    specifications: {
      Material: "Steel",
      Finish: "Chrome"
    },
    originalPrice: 500,
    price: 250 + (i * 25)
  }))

];