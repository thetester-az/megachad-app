export const recipes = [
  {
    id: 1,
    title: "Saffron Infused Chicken Biryani",
    category: "Traditional",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    creator: {
      name: "Chef Amir",
      avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=200&auto=format&fit=crop",
    },
    price: 3.99,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Pomegranate Glazed Salmon",
    category: "Restaurant-Grade",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    creator: {
      name: "Lena Cooks",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    price: 4.49,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Earthy Green Herb Salad",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    creator: {
      name: "FitBites",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop",
    },
    price: 2.99,
    rating: 4.7,
  }
];

export const deliveryMenu = [
  {
    id: 1,
    title: "Homemade Lamb Mansaf",
    kitchen: "Sittis Kitchen",
    portion: "Serves 2",
    eta: "45 mins",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Fresh Falafel Wrap Platter",
    kitchen: "Beirut Bites",
    portion: "Serves 1",
    eta: "25 mins",
    price: 12.50,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Stuffed Grape Leaves (Warak Enab)",
    kitchen: "Aunties Delights",
    portion: "Serves 4",
    eta: "60 mins",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop"
  }
];

export const ingredients = [
  {
    id: 1,
    title: "Premium Saffron Threads",
    origin: "Sourced from Quba",
    options: "5g Jar",
    organic: true,
    price: 45.00,
    image: "https://images.unsplash.com/photo-1621236873551-7ef3fcd10738?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Cold-Pressed Olive Oil",
    origin: "Lebanese Mountains",
    options: "500ml Bottle",
    organic: true,
    price: 18.50,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Organic Pomegranate Molasses",
    origin: "Local Orchards",
    options: "250ml",
    organic: false,
    price: 12.00,
    image: "https://images.unsplash.com/photo-1615486171448-4fdcb74ab626?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Fresh Za'atar Blend",
    origin: "Jerusalem",
    options: "150g Bag",
    organic: true,
    price: 8.99,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop"
  }
];

export const communityPosts = [
  {
    id: 1,
    author: {
      name: "Tariq V.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    text: "Tried the new Mansaf recipe from Chef Amir. Absolutely blown away by the flavors! Highly recommend gathering the family for this one.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
    likes: 124,
    comments: 18
  },
  {
    id: 2,
    author: {
      name: "Nadia K.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    text: "Does anyone have a good substitute for pomegranate molasses? Need it for tonight's dinner!",
    likes: 32,
    comments: 45
  }
];
