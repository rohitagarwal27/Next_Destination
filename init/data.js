const sampleListings = [
  {
    title: "Cozy Beachfront Cottage in Goa",
    description:
      "Escape to this charming beachfront cottage in Goa for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1569513745068-7eec28cfd68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Goa",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [73.818000, 15.299300]
    }
  },
  {
    title: "Modern Loft in Mumbai",
    description:
      "Stay in the heart of Mumbai in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1597001353824-cdd8ba4a07b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVtYmFpJTIwc2t5c2NyYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 20000,
    location: "Mumbai",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [72.8777, 19.0760]
    }
  },
  {
    title: "Mountain Retreat in Manali",
    description:
      "Unplug and unwind in this peaceful mountain cabin in Manali. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1536004053756-1b3d96f7f9a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuYWxpJTIwbW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Manali",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [77.1892, 32.2432]
    }
  },
  {
    title: "Historic Villa in Jaipur",
    description:
      "Experience the charm of Jaipur in this beautifully restored villa. Explore the rich heritage and vibrant culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584020517695-90fd48935d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFpcHVyJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 25000,
    location: "Jaipur",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [75.7873, 26.9124]
    }
  },
  {
    title: "Secluded Treehouse Getaway in Kerala",
    description:
      "Live among the treetops in this unique treehouse retreat in Kerala. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhJTIwdHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Wayanad",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [76.1320, 11.6854]
    }
  },
  {
    title: "Beachfront Paradise in Andaman",
    description:
      "Step out of your door onto the sandy beach in Andaman. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600566756067-08a2b9c607fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5kYW1hbiUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 22000,
    location: "Havelock Island",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [92.9908, 11.9696]
    }
  },
  {
    title: "Rustic Cabin by the Lake in Nainital",
    description:
      "Spend your days fishing and kayaking on the serene lake in Nainital. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1610024448669-fc8d1c146a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbml0YWwlMjB2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Nainital",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [79.4636, 29.3919]
    }
  },
  {
    title: "Luxury Penthouse with City Views in Delhi",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment in Delhi.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVsaGklMjBza3lsaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 35000,
    location: "Delhi",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [77.2090, 28.6139]
    }
  },
  {
    title: "Ski-In/Ski-Out Chalet in Gulmarg",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the beautiful Gulmarg.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582018885285-376c359db01c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3VsbWFyZyUyMHNraSUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 30000,
    location: "Gulmarg",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [74.3808, 34.0486]
    }
  },
  {
    title: "Safari Lodge in Ranthambore",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge in Ranthambore. Witness the majestic tigers up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542556069-7c1d4a6ac3a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFuZ2klMjBpbmRpYSUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  },{
    title: "Heritage Haveli in Udaipur",
    description:
      "Stay in a traditional Haveli overlooking Lake Pichola in Udaipur. Enjoy the royal treatment in the City of Lakes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551164250-8d839438f97b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWRhaXB1ciUyMGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 27000,
    location: "Udaipur",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [73.6833, 24.5854]
    }
  },
  {
    title: "Luxury Houseboat in Kerala Backwaters",
    description:
      "Experience the unique charm of staying on a luxury houseboat cruising through the serene backwaters of Kerala.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1574760795555-88d5a1b2b9ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2VyYWxhJTIwaG91c2Vib2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 22000,
    location: "Alleppey",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [76.3388, 9.4981]
    }
  },
  {
    title: "Cultural Homestay in Varanasi",
    description:
      "Immerse yourself in the spiritual heart of India with a stay at this cultural homestay in Varanasi, located on the banks of the Ganges.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1575568234804-207c99d6e6bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 13000,
    location: "Varanasi",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [82.9739, 25.3176]
    }
  },
  {
    title: "Tea Estate Bungalow in Darjeeling",
    description:
      "Relax in a colonial-style bungalow set amidst lush tea gardens in Darjeeling. Perfect for a serene and refreshing retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1543249591-5122c0946313?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyamVlbGluZyUyMHRlYSUyMGdhcmRlblxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 16000,
    location: "Darjeeling",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [88.2636, 27.0360]
    }
  },
  {
    title: "Desert Camp in Jaisalmer",
    description:
      "Experience the magic of the Thar Desert with a stay at this luxurious desert camp in Jaisalmer. Camel rides and starry nights await.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585394424371-2a4a3915f3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFpc2FsbWVyJTIwZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 20000,
    location: "Jaisalmer",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [70.9095, 26.9157]
    }
  },
  {
    title: "Colonial Bungalow in Ooty",
    description:
      "Step back in time with a stay in a colonial-era bungalow in the picturesque hill station of Ooty. Ideal for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549924233-7ae657b4440a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b290eSUyMGJ1bmdhbG93fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 19000,
    location: "Ooty",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [76.6932, 11.4064]
    }
  },
  {
    title: "Forest Resort in Jim Corbett",
    description:
      "Enjoy a wildlife adventure in the heart of Jim Corbett National Park with a stay at this luxurious forest resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570977309601-48e0e3e7552b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amltJTIwY29yYmV0dCUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 21000,
    location: "Ramnagar",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [79.1230, 29.3925]
    }
  },
  {
    title: "Cultural Heritage Stay in Mysore",
    description:
      "Experience the rich cultural heritage of Mysore with a stay in a traditional home close to the royal palace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1608280139641-f137cb156cf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXlzb3JlJTIwcGFsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Mysore",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [76.6394, 12.2958]
    }
  },
  {
    title: "Yoga Retreat in Rishikesh",
    description:
      "Rejuvenate your mind and body at this serene yoga retreat nestled in the foothills of the Himalayas in Rishikesh.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591172775392-5a40d1b8e9b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmlzaGlrZXNoJTIweW9nYSUyMHJldHJlYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 17000,
    location: "Rishikesh",
    country: "India",
    geometry: {
      type: 'Point',
      coordinates: [78.2676, 30.0869]
    }
  },
   
];

module.exports = { data: sampleListings };