import { MenuEntry } from '@pancakeswap-libs/uikit'
import { ConfirmationPendingContent } from 'components/TransactionConfirmationModal'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms-coming soon',
    
    icon: 'FarmIcon',
    href: '',
  },
  {
    label: 'Pools-coming soon',
    icon: 'PoolIcon',
    href: '',
  },
 
  {
    label: 'Price Chart-coming soon',
    icon: 'ChartIcon',
    href: ''
  },
 
  
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Our Social',
    icon: 'GroupsIcon',
    items: [
      {
        label: "Telegram",
        href: 'https://t.me/multichainfin/',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/multichainfin'
      }
    ],
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'Pancakeswap-coming soon',
        href: '',
      },
      
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Roadmap',
        href: '',
      },
      {
        label: 'Pre-Sale',
        href: '/',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ],
  },
  {
    label: 'Moress',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/MultiChain97/",
      },
      // {
      //   label: "Docs",
      //   href: "https://goosedefi.gitbook.io/goose-finance/",
      // },
      {
        label: "Blog",
        href: "/",
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
