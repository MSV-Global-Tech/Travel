'use server';
/**
 * @fileOverview An AI-powered travel assistant that provides personalized vacation recommendations with pricing in Indian Rupees.
 *
 * - aiTravelRecommendation - A function that handles the travel recommendation process.
 * - AITravelRecommendationInput - The input type for the aiTravelRecommendation function.
 * - AITravelRecommendationOutput - The return type for the aiTravelRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendedPackageSchema = z.object({
  name: z.string().describe('The name of the recommended travel package.'),
  type: z.string().describe('The category of travel (e.g., "Adventure", "Relaxation", "Cultural", "Luxury").'),
  description: z.string().describe('A brief description of why this package is suitable for the user.'),
  price: z.string().describe('The starting price of the package in Indian Rupees (₹).'),
  imageUrl: z.string().url().describe('A URL to an image of the destination.').default('https://picsum.photos/seed/travel/600/400'),
});

const AITravelRecommendationInputSchema = z.object({
  preferenceOrVibe: z
    .string()
    .describe(
      'A description of what the user is looking for (e.g., "somewhere quiet with a beach", "an active mountain trip", "European culture and food").'
    ),
});
export type AITravelRecommendationInput = z.infer<
  typeof AITravelRecommendationInputSchema
>;

const AITravelRecommendationOutputSchema = z.object({
  recommendations: z
    .array(RecommendedPackageSchema)
    .describe('A list of personalized travel recommendations.'),
  summary: z
    .string()
    .describe(
      'A welcoming summary of the suggestions, explaining the inspiration behind the choices.'
    ),
});
export type AITravelRecommendationOutput = z.infer<
  typeof AITravelRecommendationOutputSchema
>;

const getTravelPackagesTool = ai.defineTool(
  {
    name: 'getTravelPackages',
    description:
      'Provides a list of travel packages with prices in INR based on user preferences from the Voyage Elite catalog.',
    inputSchema: z.object({
      preference: z.string().describe('The user\'s travel preference description.'),
    }),
    outputSchema: z.array(RecommendedPackageSchema),
  },
  async input => {
    const {preference} = input;
    const pref = preference.toLowerCase();
    
    if (pref.includes('beach') || pref.includes('relax') || pref.includes('island')) {
      return [
        {
          name: 'Maldives Overwater Sanctuary',
          type: 'Relaxation',
          description: 'Crystal clear waters and private villas. The ultimate escape for peace and quiet.',
          price: '₹2,50,000 per person',
          imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop',
        },
        {
          name: 'Bora Bora Azure Retreat',
          type: 'Luxury',
          description: 'Iconic turquoise lagoons and world-class hospitality in French Polynesia.',
          price: '₹4,80,000 per person',
          imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2076&auto=format&fit=crop',
        }
      ];
    } else if (pref.includes('mountain') || pref.includes('adventure') || pref.includes('hike')) {
      return [
        {
          name: 'Swiss Alps Expedition',
          type: 'Adventure',
          description: 'Breathtaking trails and cozy mountain huts in the heart of Switzerland.',
          price: '₹3,20,000 per person',
          imageUrl: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?q=80&w=1965&auto=format&fit=crop',
        },
        {
          name: 'Patagonia Wilderness Trek',
          type: 'Adventure',
          description: 'Experience the raw beauty of Torres del Paine with our expert guides.',
          price: '₹2,95,000 per person',
          imageUrl: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=1965&auto=format&fit=crop',
        }
      ];
    } else {
      return [
        {
          name: 'Kyoto Cultural Heritage',
          type: 'Cultural',
          description: 'Ancient temples, traditional tea ceremonies, and the beauty of cherry blossoms.',
          price: '₹1,85,000 per person',
          imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
        },
        {
          name: 'Amalfi Coast Splendor',
          type: 'Romantic',
          description: 'Charming coastal towns, exquisite Italian cuisine, and stunning Mediterranean views.',
          price: '₹2,40,000 per person',
          imageUrl: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1965&auto=format&fit=crop',
        }
      ];
    }
  }
);

const travelRecommendationPrompt = ai.definePrompt({
  name: 'travelRecommendationPrompt',
  input: {schema: AITravelRecommendationInputSchema},
  output: {schema: AITravelRecommendationOutputSchema},
  tools: [getTravelPackagesTool],
  system: `You are a Luxury Travel Curator for "Voyage Elite". Your goal is to inspire users with personalized travel suggestions.
  Use the 'getTravelPackages' tool to find options. All prices must be presented in Indian Rupees (₹). Write your summary in an inviting, professional, and evocative tone that makes the user want to pack their bags immediately.`,
  prompt: `I'm dreaming of a trip with this vibe: "{{{preferenceOrVibe}}}". What would you recommend?`,
});

export async function aiTravelRecommendation(
  input: AITravelRecommendationInput
): Promise<AITravelRecommendationOutput> {
  const {output} = await travelRecommendationPrompt(input);
  return output!;
}
