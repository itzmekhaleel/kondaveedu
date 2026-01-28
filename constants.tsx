
import { Viewpoint, TicketType } from './types';

export const VIEWPOINTS: Viewpoint[] = [
  {
    id: '1',
    name: 'Main Fort Gate',
    description: 'The majestic entrance to the hilltop fortress, showcasing Reddy dynasty architecture.',
    imageUrl: 'https://picsum.photos/seed/gate/800/600',
    location: 'Lower Entrance',
    historySnippet: 'Built in the 14th century, this gate served as the primary defense point against invaders.'
  },
  {
    id: '2',
    name: 'Gopinatha Temple',
    description: 'A serene ancient temple dedicated to Lord Krishna, featuring intricate carvings.',
    imageUrl: 'https://picsum.photos/seed/temple/800/600',
    location: 'Temple Complex',
    historySnippet: 'The temple is a testament to the religious harmony and architectural brilliance of the era.'
  },
  {
    id: '3',
    name: 'Sunset Peak',
    description: 'The highest point of the fort offering a 360-degree view of the surrounding hills.',
    imageUrl: 'https://picsum.photos/seed/sunset/800/600',
    location: 'North Ridge',
    historySnippet: 'Historically used as a watchtower to monitor troop movements in the valley below.'
  },
  {
    id: '4',
    name: 'The Hill Road',
    description: 'A scenic 5km winding road that takes you from the base to the fort summit.',
    imageUrl: 'https://picsum.photos/seed/road/800/600',
    location: 'Access Way',
    historySnippet: 'Recently modernized to allow easy access for tourists, following the ancient trail.'
  }
];

export const TICKET_TYPES: TicketType[] = [
  {
    id: 'adult',
    name: 'Adult (Standard)',
    price: 50,
    description: 'Full access to fort grounds and museum.'
  },
  {
    id: 'child',
    name: 'Child (Below 12)',
    price: 25,
    description: 'Discounted entry for children under 12 years.'
  },
  {
    id: 'foreign',
    name: 'Foreign National',
    price: 200,
    description: 'Includes guided tour and museum access.'
  }
];
