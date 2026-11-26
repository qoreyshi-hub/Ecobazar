const products = [
  {
    // --- شناسه‌ها ---
    id: 1,
    slug: "Green Apple",
    sku: "2,51,594",

    // --- اطلاعات اصلی ---
    name: "Green Apple",
    category: "Fresh Fruit",
    brand: "Del Monte",
    brandLogo: "assest/images/product-brand-Del-Monte-Company-Logo.webp",
    tags: ["Fruit", "Healthy", "Apple", "Green Apple"],

    // --- قیمت ---
    price: "14.99",
    oldPrice: 20.99,

    // --- تصاویر ---
    image: "assest/data/products/images/green-apple.webp",
    gallery: [
      "assest/data/products/images/green-apple.webp",
      "assest/data/products/images/green-apple.webp",
      "assest/data/products/images/green-apple.webp",
      "assest/data/products/images/green-apple.webp",
    ],

    // --- نظرات ---
    rating: 4.5,
    reviewCount: 4,

    // --- موجودی ---
    inStock: false,
    stockQuantity: 120,

    // --- برچسب‌ها و بخش‌های صفحه اصلی ---
    badge: "Sale 50%",
    isFeatured: true,
    isPopular: true,
    isHotDeal: false,

    // توضیحات (تب‌های Descriptions / Additional Information / Customer Feedback)
    shortDescription:
      "Apple, (Malus domestica), domesticated tree and fruit of the Rose family, one of the most widely cultivated tree fruits.",
    description:
      "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants. If left untrimmed, a tree grown with standard (seedling) rootstock will often reach a height of 9 meters (30 feet) with an equally large crown diameter. The bark is usually brown and scaly. The simple leaves are roughly oval in shape and usually have fine teeth along the margins. Apple flowers are showy with five white petals, often tinged with pink, and numerous stamens. The flowers are pollinated by bees, particularly the blue orchard bee (Osmia lignaria) and honeybees, and other insects, and most varieties require cross-pollination for fertilization.",
    features: [
      "A low-acid snacking apple",
      "Jack of all trades",
      "A citrusy, thin-skinned snacker",
      "The snack apple for crunch seekers",
      "The popular newcomer",
    ],
    details: {
      // تب Additional Information
      weight: "06",
      color: "Green",
      type: "Organic",
      category: "FreshFruit",
      stockStatus: "Available",
    },
    // تب Customers Feedback
    feedBack: [
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
    ],

    // محصولات مرتبط (ایدی محصولات)
    relatedIds: [2, 5, 8, 3],
  },
  {
    // --- شناسه‌ها ---
    id: 2,
    slug: "Fresh Indian Malta",
    sku: "2,326,423",

    // --- اطلاعات اصلی ---
    name: "Fresh Indian Malta",
    category: "Fresh Fruit",
    brand: "Del Monte",
    brandLogo: "assest/images/product-brand-Del-Monte-Company-Logo.webp",
    tags: ["Fruit", "Healthy", "Fresh Indian Malta"],

    // --- قیمت ---
    price: "20.00",
    oldPrice: null,

    // --- تصاویر ---
    image: "assest/data/products/images/fresh-indian-malta.webp",
    gallery: [
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
    ],

    // --- نظرات ---
    rating: 5,
    reviewCount: 24,

    // --- موجودی ---
    inStock: true,
    stockQuantity: 120,

    // --- برچسب‌ها و بخش‌های صفحه اصلی ---
    badge: null,
    isFeatured: true,
    isPopular: true,
    isHotDeal: false,

    // توضیحات (تب‌های Descriptions / Additional Information / Customer Feedback)
    shortDescription:
      "Apple, (Malus domestica), domesticated tree and fruit of the Rose family, one of the most widely cultivated tree fruits.",
    description:
      "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants. If left untrimmed, a tree grown with standard (seedling) rootstock will often reach a height of 9 meters (30 feet) with an equally large crown diameter. The bark is usually brown and scaly. The simple leaves are roughly oval in shape and usually have fine teeth along the margins. Apple flowers are showy with five white petals, often tinged with pink, and numerous stamens. The flowers are pollinated by bees, particularly the blue orchard bee (Osmia lignaria) and honeybees, and other insects, and most varieties require cross-pollination for fertilization.",
    features: [
      "A low-acid snacking apple",
      "Jack of all trades",
      "A citrusy, thin-skinned snacker",
      "The snack apple for crunch seekers",
      "The popular newcomer",
    ],
    details: {
      // تب Additional Information
      weight: "06",
      color: "Green",
      type: "Organic",
      category: "FreshFruit",
      stockStatus: "Available",
    },
    // تب Customers Feedback
    feedBack: [
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
    ],

    // محصولات مرتبط (ایدی محصولات)
    relatedIds: [5, 2, 6, 3],
  },
  {
    // --- شناسه‌ها ---
    id: 3,
    slug: "Chinese cabbage",
    sku: "2,323,643",

    // --- اطلاعات اصلی ---
    name: "Chinese cabbage",
    category: "Fresh Fruit",
    brand: "Seneca",
    brandLogo: "assest/images/product-brand-seneca-company-logo.webp",
    tags: ["Fruit", "Healthy", "Chinese cabbage"],

    // --- قیمت ---
    price: "12.00",
    oldPrice: null,

    // --- تصاویر ---
    image: "assest/data/products/images/chinese-cabbage.webp",
    gallery: [
      "assest/data/products/images/chinese-cabbage.webp",
      "assest/data/products/images/gallaries/chinese-cabbage-2.webp",
      "assest/data/products/images/gallaries/chinese-cabbage-3.webp",
      "assest/data/products/images/gallaries/chinese-cabbage-4.webp",
    ],

    // --- نظرات ---
    rating: 5,
    reviewCount: 24,

    // --- موجودی ---
    inStock: true,
    stockQuantity: 120,

    // --- برچسب‌ها و بخش‌های صفحه اصلی ---
    badge: null,
    isFeatured: true,
    isPopular: true,
    isHotDeal: false,

    // توضیحات (تب‌های Descriptions / Additional Information / Customer Feedback)
    shortDescription:
      "Apple, (Malus domestica), domesticated tree and fruit of the Rose family, one of the most widely cultivated tree fruits.",
    description:
      "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants. If left untrimmed, a tree grown with standard (seedling) rootstock will often reach a height of 9 meters (30 feet) with an equally large crown diameter. The bark is usually brown and scaly. The simple leaves are roughly oval in shape and usually have fine teeth along the margins. Apple flowers are showy with five white petals, often tinged with pink, and numerous stamens. The flowers are pollinated by bees, particularly the blue orchard bee (Osmia lignaria) and honeybees, and other insects, and most varieties require cross-pollination for fertilization.",
    features: [
      "A low-acid snacking apple",
      "Jack of all trades",
      "A citrusy, thin-skinned snacker",
      "The snack apple for crunch seekers",
      "The popular newcomer",
    ],
    details: {
      // تب Additional Information
      weight: "06",
      color: "Green",
      type: "Organic",
      category: "FreshFruit",
      stockStatus: "Available",
    },
    // تب Customers Feedback
    feedBack: [
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
    ],

    // محصولات مرتبط (ایدی محصولات)
    relatedIds: [2, 1, 8, 9],
  },
  {
    // --- شناسه‌ها ---
    id: 4,
    slug: "Green Lettuce",
    sku: "2,323,643",

    // --- اطلاعات اصلی ---
    name: "Green Lettuce",
    category: "Fresh Vegetables",
    brand: "Del Monte",
    brandLogo: "assest/images/product-brand-seneca-Company-Logo.webp",
    tags: ["Vegetables", "Healthy", "Amazing", "Green Lettuce"],

    // --- قیمت ---
    price: "9.00",
    oldPrice: null,

    // --- تصاویر ---
    image: "assest/data/products/images/green-lettuce.webp",
    gallery: [
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
    ],

    // --- نظرات ---
    rating: 5,
    reviewCount: 24,

    // --- موجودی ---
    inStock: true,
    stockQuantity: 120,

    // --- برچسب‌ها و بخش‌های صفحه اصلی ---
    badge: null,
    isFeatured: true,
    isPopular: true,
    isHotDeal: false,

    // توضیحات (تب‌های Descriptions / Additional Information / Customer Feedback)
    shortDescription:
      "Apple, (Malus domestica), domesticated tree and fruit of the Rose family, one of the most widely cultivated tree fruits.",
    description:
      "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants. If left untrimmed, a tree grown with standard (seedling) rootstock will often reach a height of 9 meters (30 feet) with an equally large crown diameter. The bark is usually brown and scaly. The simple leaves are roughly oval in shape and usually have fine teeth along the margins. Apple flowers are showy with five white petals, often tinged with pink, and numerous stamens. The flowers are pollinated by bees, particularly the blue orchard bee (Osmia lignaria) and honeybees, and other insects, and most varieties require cross-pollination for fertilization.",
    features: [
      "A low-acid snacking apple",
      "Jack of all trades",
      "A citrusy, thin-skinned snacker",
      "The snack apple for crunch seekers",
      "The popular newcomer",
    ],
    details: {
      // تب Additional Information
      weight: "06",
      color: "Green",
      type: "Organic",
      category: "FreshFruit",
      stockStatus: "Available",
    },
    // تب Customers Feedback
    feedBack: [
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
    ],

    // محصولات مرتبط (ایدی محصولات)
    relatedIds: [2, 7, 4, 1],
  },
  {
    // --- شناسه‌ها ---
    id: 5,
    slug: "Eggplant",
    sku: "2,323,643",

    // --- اطلاعات اصلی ---
    name: "Eggplant",
    category: "Fresh Vegetables",
    brand: "Seneca",
    brandLogo: "assest/images/product-brand-seneca-Company-Logo.webp",
    tags: ["Vegetables", "Eggplant"],

    // --- قیمت ---
    price: "34.00",
    oldPrice: null,

    // --- تصاویر ---
    image: "assest/data/products/images/eggplant.webp",
    gallery: [
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
    ],

    // --- نظرات ---
    rating: 5,
    reviewCount: 24,

    // --- موجودی ---
    inStock: true,
    stockQuantity: 120,

    // --- برچسب‌ها و بخش‌های صفحه اصلی ---
    badge: null,
    isFeatured: true,
    isPopular: true,
    isHotDeal: false,

    // توضیحات (تب‌های Descriptions / Additional Information / Customer Feedback)
    shortDescription:
      "Apple, (Malus domestica), domesticated tree and fruit of the Rose family, one of the most widely cultivated tree fruits.",
    description:
      "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants. If left untrimmed, a tree grown with standard (seedling) rootstock will often reach a height of 9 meters (30 feet) with an equally large crown diameter. The bark is usually brown and scaly. The simple leaves are roughly oval in shape and usually have fine teeth along the margins. Apple flowers are showy with five white petals, often tinged with pink, and numerous stamens. The flowers are pollinated by bees, particularly the blue orchard bee (Osmia lignaria) and honeybees, and other insects, and most varieties require cross-pollination for fertilization.",
    features: [
      "A low-acid snacking apple",
      "Jack of all trades",
      "A citrusy, thin-skinned snacker",
      "The snack apple for crunch seekers",
      "The popular newcomer",
    ],
    details: {
      // تب Additional Information
      weight: "06",
      color: "Green",
      type: "Organic",
      category: "FreshFruit",
      stockStatus: "Available",
    },
    // تب Customers Feedback
    feedBack: [
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
    ],

    // محصولات مرتبط (ایدی محصولات)
    relatedIds: [8, 2, 2, 1],
  },
  {
    // --- شناسه‌ها ---
    id: 6,
    slug: "Big Potatoes",
    sku: "2,323,643",

    // --- اطلاعات اصلی ---
    name: "Big Potatoes",
    category: "Fresh Vegetables",
    brand: "Seneca",
    brandLogo: "assest/images/product-brand-seneca-Company-Logo.webp",
    tags: ["Vegetables", "Big Potatoes", "Health"],

    // --- قیمت ---
    price: "20.00",
    oldPrice: null,

    // --- تصاویر ---
    image: "assest/data/products/images/potatoes.webp",
    gallery: [
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
    ],

    // --- نظرات ---
    rating: 5,
    reviewCount: 24,

    // --- موجودی ---
    inStock: false,
    stockQuantity: 120,

    // --- برچسب‌ها و بخش‌های صفحه اصلی ---
    badge: null,
    isFeatured: true,
    isPopular: true,
    isHotDeal: false,

    // توضیحات (تب‌های Descriptions / Additional Information / Customer Feedback)
    shortDescription:
      "Apple, (Malus domestica), domesticated tree and fruit of the Rose family, one of the most widely cultivated tree fruits.",
    description:
      "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants. If left untrimmed, a tree grown with standard (seedling) rootstock will often reach a height of 9 meters (30 feet) with an equally large crown diameter. The bark is usually brown and scaly. The simple leaves are roughly oval in shape and usually have fine teeth along the margins. Apple flowers are showy with five white petals, often tinged with pink, and numerous stamens. The flowers are pollinated by bees, particularly the blue orchard bee (Osmia lignaria) and honeybees, and other insects, and most varieties require cross-pollination for fertilization.",
    features: [
      "A low-acid snacking apple",
      "Jack of all trades",
      "A citrusy, thin-skinned snacker",
      "The snack apple for crunch seekers",
      "The popular newcomer",
    ],
    details: {
      // تب Additional Information
      weight: "06",
      color: "Green",
      type: "Organic",
      category: "FreshFruit",
      stockStatus: "Available",
    },
    // تب Customers Feedback
    feedBack: [
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
    ],

    // محصولات مرتبط (ایدی محصولات)
    relatedIds: [2, 5, 4, 7],
  },
  {
    // --- شناسه‌ها ---
    id: 7,
    slug: "Corn",
    sku: "2,323,643",

    // --- اطلاعات اصلی ---
    name: "Corn",
    category: "Fresh Vegetables",
    brand: "Seneca",
    brandLogo: "assest/images/product-brand-seneca-Company-Logo.webp",
    tags: ["Vegetables", "Corn", "Health", "Glowing Skin", "Energy Booster"],

    // --- قیمت ---
    price: "28.00",
    oldPrice: null,

    // --- تصاویر ---
    image: "assest/data/products/images/corn.webp",
    gallery: [
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
    ],

    // --- نظرات ---
    rating: 5,
    reviewCount: 24,

    // --- موجودی ---
    inStock: true,
    stockQuantity: 120,

    // --- برچسب‌ها و بخش‌های صفحه اصلی ---
    badge: null,
    isFeatured: true,
    isPopular: true,
    isHotDeal: false,

    // توضیحات (تب‌های Descriptions / Additional Information / Customer Feedback)
    shortDescription:
      "Apple, (Malus domestica), domesticated tree and fruit of the Rose family, one of the most widely cultivated tree fruits.",
    description:
      "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants. If left untrimmed, a tree grown with standard (seedling) rootstock will often reach a height of 9 meters (30 feet) with an equally large crown diameter. The bark is usually brown and scaly. The simple leaves are roughly oval in shape and usually have fine teeth along the margins. Apple flowers are showy with five white petals, often tinged with pink, and numerous stamens. The flowers are pollinated by bees, particularly the blue orchard bee (Osmia lignaria) and honeybees, and other insects, and most varieties require cross-pollination for fertilization.",
    features: [
      "A low-acid snacking apple",
      "Jack of all trades",
      "A citrusy, thin-skinned snacker",
      "The snack apple for crunch seekers",
      "The popular newcomer",
    ],
    details: {
      // تب Additional Information
      weight: "06",
      color: "Green",
      type: "Organic",
      category: "FreshFruit",
      stockStatus: "Available",
    },
    // تب Customers Feedback
    feedBack: [
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
    ],

    // محصولات مرتبط (ایدی محصولات)
    relatedIds: [1, 5, 2, 4],
  },
  {
    // --- شناسه‌ها ---
    id: 8,
    slug: "Fresh Cauliflower",
    sku: "2,323,643",

    // --- اطلاعات اصلی ---
    name: "Fresh Cauliflower",
    category: "Fresh Vegetables",
    brand: "Seneca",
    brandLogo: "assest/data/products/images/fresh-cauliflower.webp",
    tags: ["Vegetables", "Health", "Glowing Skin", "Energy Booster"],

    // --- قیمت ---
    price: "12.00",
    oldPrice: null,

    // --- تصاویر ---
    image: "assest/data/products/images/corn.webp",
    gallery: [
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
    ],

    // --- نظرات ---
    rating: 5,
    reviewCount: 24,

    // --- موجودی ---
    inStock: true,
    stockQuantity: 120,

    // --- برچسب‌ها و بخش‌های صفحه اصلی ---
    badge: null,
    isFeatured: true,
    isPopular: true,
    isHotDeal: false,

    // توضیحات (تب‌های Descriptions / Additional Information / Customer Feedback)
    shortDescription:
      "Apple, (Malus domestica), domesticated tree and fruit of the Rose family, one of the most widely cultivated tree fruits.",
    description:
      "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants. If left untrimmed, a tree grown with standard (seedling) rootstock will often reach a height of 9 meters (30 feet) with an equally large crown diameter. The bark is usually brown and scaly. The simple leaves are roughly oval in shape and usually have fine teeth along the margins. Apple flowers are showy with five white petals, often tinged with pink, and numerous stamens. The flowers are pollinated by bees, particularly the blue orchard bee (Osmia lignaria) and honeybees, and other insects, and most varieties require cross-pollination for fertilization.",
    features: [
      "A low-acid snacking apple",
      "Jack of all trades",
      "A citrusy, thin-skinned snacker",
      "The snack apple for crunch seekers",
      "The popular newcomer",
    ],
    details: {
      // تب Additional Information
      weight: "06",
      color: "Green",
      type: "Organic",
      category: "FreshFruit",
      stockStatus: "Available",
    },
    // تب Customers Feedback
    feedBack: [
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
    ],

    // محصولات مرتبط (ایدی محصولات)
    relatedIds: [2, 4, 8, 10],
  },
  {
    // --- شناسه‌ها ---
    id: 9,
    slug: "Green Capsicum",
    sku: "2,323,643",

    // --- اطلاعات اصلی ---
    name: "Green Capsicum",
    category: "Fresh Vegetables",
    brand: "Del Monte",
    brandLogo: "assest/data/products/images/fresh-cauliflower.webp",
    tags: ["Vegetables", "Health", "Glowing Skin", "Energy Booster"],

    // --- قیمت ---
    price: "9.00",
    oldPrice: "20.99",

    // --- تصاویر ---
    image: "assest/data/products/images/green-capsicum.webp",
    gallery: [
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
    ],

    // --- نظرات ---
    rating: 5,
    reviewCount: 24,

    // --- موجودی ---
    inStock: true,
    stockQuantity: 120,

    // --- برچسب‌ها و بخش‌های صفحه اصلی ---
    badge: null,
    isFeatured: true,
    isPopular: true,
    isHotDeal: false,

    // توضیحات (تب‌های Descriptions / Additional Information / Customer Feedback)
    shortDescription:
      "Apple, (Malus domestica), domesticated tree and fruit of the Rose family, one of the most widely cultivated tree fruits.",
    description:
      "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants. If left untrimmed, a tree grown with standard (seedling) rootstock will often reach a height of 9 meters (30 feet) with an equally large crown diameter. The bark is usually brown and scaly. The simple leaves are roughly oval in shape and usually have fine teeth along the margins. Apple flowers are showy with five white petals, often tinged with pink, and numerous stamens. The flowers are pollinated by bees, particularly the blue orchard bee (Osmia lignaria) and honeybees, and other insects, and most varieties require cross-pollination for fertilization.",
    features: [
      "A low-acid snacking apple",
      "Jack of all trades",
      "A citrusy, thin-skinned snacker",
      "The snack apple for crunch seekers",
      "The popular newcomer",
    ],
    details: {
      // تب Additional Information
      weight: "06",
      color: "Green",
      type: "Organic",
      category: "FreshFruit",
      stockStatus: "Available",
    },
    // تب Customers Feedback
    feedBack: [
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
    ],

    // محصولات مرتبط (ایدی محصولات)
    relatedIds: [1, 5, 2, 3],
  },
  {
    // --- شناسه‌ها ---
    id: 10,
    slug: "Green Chili",
    sku: "2,323,643",

    // --- اطلاعات اصلی ---
    name: "Green Chili",
    category: "Fresh Vegetables",
    brand: "Seneca",
    brandLogo: "assest/data/products/images/fresh-cauliflower.webp",
    tags: ["Vegetables", "Health", "Glowing Skin", "Energy Booster"],

    // --- قیمت ---
    price: "34.00",
    oldPrice: null,

    // --- تصاویر ---
    image: "assest/data/products/images/green-chili.webp",
    gallery: [
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
      "assest/data/products/images/",
    ],

    // --- نظرات ---
    rating: 5,
    reviewCount: 24,

    // --- موجودی ---
    inStock: false,
    stockQuantity: 120,

    // --- برچسب‌ها و بخش‌های صفحه اصلی ---
    badge: null,
    isFeatured: true,
    isPopular: true,
    isHotDeal: false,

    // توضیحات (تب‌های Descriptions / Additional Information / Customer Feedback)
    shortDescription:
      "Apple, (Malus domestica), domesticated tree and fruit of the Rose family, one of the most widely cultivated tree fruits.",
    description:
      "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants. If left untrimmed, a tree grown with standard (seedling) rootstock will often reach a height of 9 meters (30 feet) with an equally large crown diameter. The bark is usually brown and scaly. The simple leaves are roughly oval in shape and usually have fine teeth along the margins. Apple flowers are showy with five white petals, often tinged with pink, and numerous stamens. The flowers are pollinated by bees, particularly the blue orchard bee (Osmia lignaria) and honeybees, and other insects, and most varieties require cross-pollination for fertilization.",
    features: [
      "A low-acid snacking apple",
      "Jack of all trades",
      "A citrusy, thin-skinned snacker",
      "The snack apple for crunch seekers",
      "The popular newcomer",
    ],
    details: {
      // تب Additional Information
      weight: "06",
      color: "Green",
      type: "Organic",
      category: "FreshFruit",
      stockStatus: "Available",
    },
    // تب Customers Feedback
    feedBack: [
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
      {
        id: 1,
        profile:
          "assest/data/products/images/customers-img/customer-Kristin Watson.webp",
        name: "Kristin Watson",
        rating: 5,
        date: "2 min ago",
        description: "Duis at ullamcorper nulla, eu dictum eros.",
      },
    ],

    // محصولات مرتبط (ایدی محصولات)
    relatedIds: [2, 5, 3, 3],
  },
];
export { products };
