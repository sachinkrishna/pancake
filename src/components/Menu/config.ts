import { MenuEntry } from '@pancakeswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://relaxed-hermann-c8696a.netlify.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://relaxed-hermann-c8696a.netlify.app/#/pool',
      },
      {
        label: 'LP Migration',
        href: 'https://relaxed-hermann-c8696a.netlify.app/#/migrate',
      },
      
    ],
  },
  
 
]

export default config
