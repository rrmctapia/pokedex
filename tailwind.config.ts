import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bug':'#A6B91A',
        'normal' : '#A8A77A',
        'fire' : '#EE8130',
        'water' : '#6390F0',
        'electric' : '#F7D02C',
        'grass' : '#7AC74C',
        'ice' : '#96D9D6',
        'fighting' : '#C22E28',
        'poison' : '#A33EA1',
        'ground' : '#E2BF65',
        'flying' : '#A98FF3',
        'psychic' : '#F95587',
        'rock' : '#B6A136',
        'ghost' : ' #735797',
        'dragon' : '#6F35FC',
        'dark' : '#705746',
        'steel' : '#B7B7CE',
      }
    },
  },
  plugins: [],
  safelist: ['bg-fire', 'bg-water', 'bg-grass', 'bg-bug','bg-normal', 'bg-electric','bg-ice','bg-fighting','bg-poison', 'bg-ground', 'bg-flying','bg-psychic', 'bg-rock', 'bg-ghost','bg-dragon','bg-dark','bg-steel']
}
export default config
