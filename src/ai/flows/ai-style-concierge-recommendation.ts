'use server';
/**
 * @fileOverview An AI-powered styling assistant that provides personalized jewelry recommendations.
 *
 * - aiStyleConciergeRecommendation - A function that handles the jewelry recommendation process.
 * - AIStyleConciergeRecommendationInput - The input type for the aiStyleConciergeRecommendation function.
 * - AIStyleConciergeRecommendationOutput - The return type for the aiStyleConciergeRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendedJewelryItemSchema = z.object({
  name: z.string().describe('The name of the recommended jewelry item.'),
  type: z.string().describe('The type of jewelry (e.g., "necklace", "earrings", "ring", "bracelet").'),
  description: z.string().describe('A brief description of why this jewelry item is suitable for the given occasion/outfit.'),
  imageUrl: z.string().url().describe('A URL to an image of the recommended jewelry item.').default('https://via.placeholder.com/150'), // Default placeholder image
});

const AIStyleConciergeRecommendationInputSchema = z.object({
  occasionOrOutfit: z
    .string()
    .describe(
      'A detailed description of the occasion (e.g., "wedding", "gala dinner", "casual brunch") or the outfit (e.g., "little black dress", "boho chic dress") for which jewelry recommendations are needed.'
    ),
});
export type AIStyleConciergeRecommendationInput = z.infer<
  typeof AIStyleConciergeRecommendationInputSchema
>;

const AIStyleConciergeRecommendationOutputSchema = z.object({
  recommendations: z
    .array(RecommendedJewelryItemSchema)
    .describe('A list of personalized jewelry recommendations.'),
  summary: z
    .string()
    .describe(
      'An elegant summary of the recommendations, offering styling advice and highlighting why these pieces are a perfect match.'
    ),
});
export type AIStyleConciergeRecommendationOutput = z.infer<
  typeof AIStyleConciergeRecommendationOutputSchema
>;

const getJewelryRecommendationsTool = ai.defineTool(
  {
    name: 'getJewelryRecommendations',
    description:
      'Provides a list of recommended jewelry items based on a given occasion or outfit description from the Royal Gems Jewelry catalog. This tool helps the AI find suitable pieces.',
    inputSchema: z.object({
      occasionOrOutfit: z.string().describe('The user\'s occasion or outfit description.'),
    }),
    outputSchema: z.array(RecommendedJewelryItemSchema),
  },
  async input => {
    const {occasionOrOutfit} = input;
    // Simulate fetching recommendations based on keywords in occasionOrOutfit
    if (
      occasionOrOutfit.toLowerCase().includes('wedding') ||
      occasionOrOutfit.toLowerCase().includes('bridal') ||
      occasionOrOutfit.toLowerCase().includes('engagement')
    ) {
      return [
        {
          name: 'Diamond Halo Pendant Necklace',
          type: 'necklace',
          description:
            'A dazzling diamond halo pendant necklace, perfect for a sophisticated bridal or engagement look, adding radiant sparkle.',
          imageUrl: 'https://images.unsplash.com/photo-1601614945417-38435d8d348a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Clustered Diamond Drop Earrings',
          type: 'earrings',
          description:
            'Elegant clustered diamond drop earrings, ideal for complementing an updo and adding a touch of glamour to your special day.',
          imageUrl: 'https://images.unsplash.com/photo-1627917897994-386684784a30?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Pave Diamond Tennis Bracelet',
          type: 'bracelet',
          description:
            'A classic pave diamond tennis bracelet, offering continuous sparkle and a luxurious finish to any formal attire.',
          imageUrl: 'https://images.unsplash.com/photo-1625400262013-0974edc94a5a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
      ];
    } else if (
      occasionOrOutfit.toLowerCase().includes('evening') ||
      occasionOrOutfit.toLowerCase().includes('gala') ||
      occasionOrOutfit.toLowerCase().includes('black tie') ||
      occasionOrOutfit.toLowerCase().includes('formal')
    ) {
      return [
        {
          name: 'Ruby and Diamond Statement Necklace',
          type: 'necklace',
          description:
            'A breathtaking ruby and diamond necklace, designed to make a grand statement at any formal event with its vibrant color and sparkle.',
          imageUrl: 'https://images.unsplash.com/photo-1620245039290-7d7211fb5791?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Art Deco Emerald Dangle Earrings',
          type: 'earrings',
          description:
            'Intricate Art Deco inspired emerald dangle earrings, perfect for adding vintage glamour to an evening gown.',
          imageUrl: 'https://images.unsplash.com/photo-1620703816156-b0728c682705?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Sapphire and Diamond Cocktail Ring',
          type: 'ring',
          description:
            'A bold sapphire and diamond cocktail ring, a perfect conversation starter and a luxurious accessory for a gala.',
          imageUrl: 'https://images.unsplash.com/photo-1626083816654-e4c194e1d746?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
      ];
    } else if (
      occasionOrOutfit.toLowerCase().includes('casual') ||
      occasionOrOutfit.toLowerCase().includes('daily') ||
      occasionOrOutfit.toLowerCase().includes('everyday') ||
      occasionOrOutfit.toLowerCase().includes('brunch')
    ) {
      return [
        {
          name: 'Delicate Gold Layering Necklace',
          type: 'necklace',
          description:
            'A simple yet elegant 18k gold necklace, ideal for everyday wear and perfect for layering with other subtle pieces.',
          imageUrl: 'https://images.unsplash.com/photo-1596700810332-9c98a38a9d0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Small Diamond Stud Earrings',
          type: 'earrings',
          description:
            'Timeless small diamond stud earrings that add a touch of subtle sparkle to any casual or business casual outfit.',
          imageUrl: 'https://images.unsplash.com/photo-1606760635294-b1539265f242?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Minimalist Gold Cuff Bracelet',
          type: 'bracelet',
          description:
            'A sleek and modern minimalist gold cuff bracelet, perfect for adding understated elegance to your daily ensemble.',
          imageUrl: 'https://images.unsplash.com/photo-1612739506697-7c703b44b82d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
      ];
    } else if (occasionOrOutfit.toLowerCase().includes('work') || occasionOrOutfit.toLowerCase().includes('business')) {
      return [
        {
          name: 'Pearl Drop Earrings',
          type: 'earrings',
          description:
            'Elegant pearl drop earrings that offer a professional yet sophisticated look, suitable for business meetings or office wear.',
          imageUrl: 'https://images.unsplash.com/photo-1616854199480-1a1362e316d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Classic Gold Chain Necklace',
          type: 'necklace',
          description:
            'A simple and elegant gold chain necklace, perfect for adding a subtle touch of luxury to your professional attire.',
          imageUrl: 'https://images.unsplash.com/photo-1596700810332-9c98a38a9d0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
      ];
    } else {
      // Default recommendations for general or unclear requests
      return [
        {
          name: 'Timeless Diamond Solitaire Ring',
          type: 'ring',
          description:
            'A classic diamond solitaire ring, versatile enough for any occasion and always a symbol of refined taste.',
          imageUrl: 'https://images.unsplash.com/photo-1624660359736-2342419ec417?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Rose Gold Hoop Earrings',
          type: 'earrings',
          description:
            'Chic rose gold hoop earrings that add a warm, modern touch to any outfit, perfect for everyday elegance or a night out.',
          imageUrl: 'https://images.unsplash.com/photo-1598075306660-f5a04e578a87?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Gold Bangle Bracelet',
          type: 'bracelet',
          description:
            'A sophisticated gold bangle bracelet, ideal for adding a touch of luxury and can be stacked for a bolder look.',
          imageUrl: 'https://images.unsplash.com/photo-1612739506697-7c703b44b82d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
      ];
    }
  }
);

const jewelryRecommendationPrompt = ai.definePrompt({
  name: 'jewelryRecommendationPrompt',
  input: {schema: AIStyleConciergeRecommendationInputSchema},
  output: {schema: AIStyleConciergeRecommendationOutputSchema},
  tools: [getJewelryRecommendationsTool],
  system: `You are an AI Style Concierge for "Royal Gems Jewelry". Your role is to provide personalized and elegant jewelry recommendations based on the user's occasion or outfit description.

First, use the 'getJewelryRecommendations' tool to find suitable pieces from our exclusive collection that match the user's request. Then, compile these recommendations into an elegant and helpful summary. For each recommended item, include its name, type, a brief description of why it's a perfect match for the given context, and its image URL.

Present the recommendations with a refined tone, emphasizing the luxury and craftsmanship of Royal Gems Jewelry. Ensure your summary provides valuable styling advice and highlights the unique appeal of each suggested piece.`,
  prompt: `I am looking for exquisite jewelry recommendations for the following occasion or outfit: "{{{occasionOrOutfit}}}". Please guide me to the perfect pieces.`,
});

const aiStyleConciergeRecommendationFlow = ai.defineFlow(
  {
    name: 'aiStyleConciergeRecommendationFlow',
    inputSchema: AIStyleConciergeRecommendationInputSchema,
    outputSchema: AIStyleConciergeRecommendationOutputSchema,
  },
  async input => {
    const {output} = await jewelryRecommendationPrompt(input);
    return output!;
  }
);

export async function aiStyleConciergeRecommendation(
  input: AIStyleConciergeRecommendationInput
): Promise<AIStyleConciergeRecommendationOutput> {
  return aiStyleConciergeRecommendationFlow(input);
}
