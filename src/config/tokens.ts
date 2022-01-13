import { ChainId, CRONA_ADDRESS, Token, WETH9 } from '@cronaswap/core-sdk'

export const ETHEREUM: { [key: string]: Token } = {
  DAI: new Token(ChainId.CRONOS, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin'),
  USDC: new Token(ChainId.CRONOS, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin'),
  USDT: new Token(ChainId.CRONOS, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD'),
  WBTC: new Token(ChainId.CRONOS, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped Bitcoin'),
}

export const CRONOS: { [key: string]: Token } = {
  DAI: new Token(ChainId.CRONOS, '0xF2001B145b43032AAF5Ee2884e456CCd805F677D', 18, 'DAI', 'Dai Stablecoin'),
  USDC: new Token(ChainId.CRONOS, '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59', 6, 'USDC', 'USD Coin'),
  USDT: new Token(ChainId.CRONOS, '0x66e428c3f67a68878562e79A0234c1F83c208770', 6, 'USDT', 'Tether USD'),
  WBTC: new Token(ChainId.CRONOS, '0x062E66477Faf219F25D27dCED647BF57C3107d52', 8, 'WBTC', 'Wrapped Bitcoin'),
  WETH: new Token(ChainId.CRONOS, '0xe44Fd7fCb2b1581822D0c862B68222998a0c299a', 18, 'WETH', 'Wrapped Ether'),
}

export const DAI = new Token(
  ChainId.ETHEREUM,
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const USDC = new Token(ChainId.ETHEREUM, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')
export const USDT = new Token(ChainId.ETHEREUM, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const XCRONA = new Token(ChainId.CRONOS, '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272', 18, 'xCRONA', 'CronaBar')

type ChainTokenMap = {
  readonly [chainId in ChainId]?: Token
}

// CRONA
export const CRONA: ChainTokenMap = {
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, CRONA_ADDRESS[ChainId.ETHEREUM], 18, 'SUSHI', 'SushiToken'),
  [ChainId.CRONOS]: new Token(ChainId.CRONOS, CRONA_ADDRESS[ChainId.CRONOS], 18, 'CRONA', 'CronaSwap'),
  [ChainId.CRONOS_TESTNET]: new Token(
    ChainId.CRONOS_TESTNET,
    CRONA_ADDRESS[ChainId.CRONOS_TESTNET],
    18,
    'CRONA',
    'CronaSwap'
  ),
}

export const WETH9_EXTENDED: { [chainId: number]: Token } = {
  ...WETH9,
  // [ChainId.ARBITRUM_TESTNET]: new Token(
  //   ChainId.ARBITRUM_TESTNET,
  //   '0x4A5e4A42dC430f669086b417AADf2B128beFEfac',
  //   18,
  //   'WETH9',
  //   'Wrapped Ether'
  // ),
  // [ChainId.ARBITRUM]: new Token(
  //   ChainId.ARBITRUM,
  //   '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  //   18,
  //   'WETH',
  //   'Wrapped Ether'
  // ),
  // [ChainId.FANTOM]: new Token(
  //   ChainId.FANTOM,
  //   '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
  //   18,
  //   'WFTM',
  //   'Wrapped Fantom'
  // ),
}
