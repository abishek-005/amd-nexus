export const processors = [
  {
    id: 'ryzen-9-7950x',
    name: 'AMD Ryzen 9 7950X',
    tagline: 'The Ultimate Processor for Gaming and Creation',
    specs: {
      cores: 16,
      threads: 32,
      baseClock: '4.5GHz',
      boostClock: '5.7GHz',
      cache: '80MB',
      tdp: '170W'
    },
    scores: {
      raw: 98,
      gaming: 95,
      creation: 100,
      ai: 92,
      value: 85
    },
    price: '$599',
    category: 'Processor',
    useCases: ['Gaming', 'Video Editing', '3D Rendering']
  },
  {
    id: 'ryzen-7-7800x3d',
    name: 'AMD Ryzen 7 7800X3D',
    tagline: 'The Undisputed King of Gaming Processors',
    specs: {
      cores: 8,
      threads: 16,
      baseClock: '4.2GHz',
      boostClock: '5.0GHz',
      cache: '104MB',
      tdp: '120W'
    },
    scores: {
      raw: 88,
      gaming: 100,
      creation: 80,
      ai: 75,
      value: 95
    },
    price: '$449',
    category: 'Processor',
    useCases: ['Gaming', 'Streaming']
  },
  {
    id: 'ryzen-5-7600x',
    name: 'AMD Ryzen 5 7600X',
    tagline: 'Incredible Performance for the Mainstream',
    specs: {
      cores: 6,
      threads: 12,
      baseClock: '4.7GHz',
      boostClock: '5.3GHz',
      cache: '38MB',
      tdp: '105W'
    },
    scores: {
      raw: 75,
      gaming: 85,
      creation: 70,
      ai: 65,
      value: 98
    },
    price: '$249',
    category: 'Processor',
    useCases: ['Gaming', 'Office Work']
  },
  {
    id: 'threadripper-pro-7995wx',
    name: 'Ryzen Threadripper PRO 7995WX',
    tagline: 'Absolute Power for Professionals',
    specs: {
      cores: 96,
      threads: 192,
      baseClock: '2.5GHz',
      boostClock: '5.1GHz',
      cache: '384MB',
      tdp: '350W'
    },
    scores: {
      raw: 100,
      gaming: 80,
      creation: 100,
      ai: 100,
      value: 60
    },
    price: '$9,999',
    category: 'Processor',
    useCases: ['Machine Learning', 'VFX', 'Enterprise']
  }
];
