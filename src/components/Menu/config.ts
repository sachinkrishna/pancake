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
        href: 'https://swapdogs.herokuapp.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://swapdogs.herokuapp.com/#/pool',
      },
      {
        label: 'LP Migration',
        href: 'https://swapdogs.herokuapp.com/#/migrate',
      },
      
    ],
  },
  
 
]

export default config
