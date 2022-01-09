import { ChainId, Ether, CRONA_ADDRESS, Token, WETH9, WNATIVE } from '@cronaswap/core-sdk'

export const CRONOS: { [key: string]: Token } = {
  DAI: new Token(ChainId.CRONOS, '0xF2001B145b43032AAF5Ee2884e456CCd805F677D', 18, 'DAI', 'Dai Stablecoin'),
  USDC: new Token(ChainId.CRONOS, '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59', 18, 'USDC', 'USD Coin'),
  USDT: new Token(ChainId.CRONOS, '0x66e428c3f67a68878562e79A0234c1F83c208770', 18, 'USDT', 'Tether USD'),
  WBTC: new Token(ChainId.CRONOS, '0x062E66477Faf219F25D27dCED647BF57C3107d52', 18, 'WBTC', 'Wrapped Bitcoin'),
  WETH: new Token(ChainId.CRONOS, '0xe44Fd7fCb2b1581822D0c862B68222998a0c299a', 18, 'WETH', 'Wrapped Ether'),
}

// Default Ethereum chain tokens
export const ALPHA = new Token(
  ChainId.ETHEREUM,
  '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',
  18,
  'ALPHA',
  'AlphaToken'
)
export const AMPL = new Token(ChainId.ETHEREUM, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')
export const BAB = new Token(ChainId.ETHEREUM, '0xC36824905dfF2eAAEE7EcC09fCC63abc0af5Abc5', 18, 'BAB', 'BAB')
export const BAC = new Token(ChainId.ETHEREUM, '0x3449FC1Cd036255BA1EB19d65fF4BA2b8903A69a', 18, 'BAC', 'Basis Cash')
export const CREAM = new Token(ChainId.ETHEREUM, '0x2ba592F78dB6436527729929AAf6c908497cB200', 18, 'CREAM', 'Cream')
export const DAI = new Token(
  ChainId.ETHEREUM,
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const DOUGH = new Token(
  ChainId.ETHEREUM,
  '0xad32A8e6220741182940c5aBF610bDE99E737b2D',
  18,
  'DOUGH',
  'PieDAO Dough v2'
)
export const DUCK = new Token(ChainId.ETHEREUM, '0x92E187a03B6CD19CB6AF293ba17F2745Fd2357D5', 18, 'DUCK', 'DUCK')
export const ETH2X_FLI = new Token(
  ChainId.ETHEREUM,
  '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD',
  18,
  'ETH2x-FLI',
  'ETH 2x Flexible Leverage Index'
)
export const FEI = new Token(ChainId.ETHEREUM, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD')
export const FRAX = new Token(ChainId.ETHEREUM, '0x853d955aCEf822Db058eb8505911ED77F175b99e', 18, 'FRAX', 'FRAX')
export const FXS = new Token(ChainId.ETHEREUM, '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0', 18, 'FXS', 'Frax Share')
export const HBTC = new Token(ChainId.ETHEREUM, '0x0316EB71485b0Ab14103307bf65a021042c6d380', 18, 'HBTC', 'Huobi BTC')
export const IBETH = new Token(
  ChainId.ETHEREUM,
  '0xeEa3311250FE4c3268F8E684f7C87A82fF183Ec1',
  8,
  'ibETHv2',
  'Interest Bearing Ether v2'
)
export const MEOW = new Token(ChainId.ETHEREUM, '0x650F44eD6F1FE0E1417cb4b3115d52494B4D9b6D', 18, 'MEOW', 'Meowshi')
export const MIR = new Token(ChainId.ETHEREUM, '0x09a3EcAFa817268f77BE1283176B946C4ff2E608', 18, 'MIR', 'Wrapped MIR')
export const NFTX = new Token(ChainId.ETHEREUM, '0x87d73E916D7057945c9BcD8cdd94e42A6F47f776', 18, 'NFTX', 'NFTX')
export const PLAY = new Token(
  ChainId.ETHEREUM,
  '0x33e18a092a93ff21aD04746c7Da12e35D34DC7C4',
  18,
  'PLAY',
  'Metaverse NFT Index'
)
export const PONT = new Token(
  ChainId.ETHEREUM,
  '0xcb46C550539ac3DB72dc7aF7c89B11c306C727c2',
  9,
  'pONT',
  'Poly Ontology Token'
)
export const PWING = new Token(
  ChainId.ETHEREUM,
  '0xDb0f18081b505A7DE20B18ac41856BCB4Ba86A1a',
  9,
  'pWING',
  'Poly Ontology Wing Token'
)
export const RENBTC = new Token(ChainId.ETHEREUM, '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D', 8, 'renBTC', 'renBTC')
export const RUNE = new Token(ChainId.ETHEREUM, '0x3155BA85D5F96b2d030a4966AF206230e46849cb', 18, 'RUNE', 'RUNE.ETH')
export const STETH = new Token(ChainId.ETHEREUM, '0xDFe66B14D37C77F4E9b180cEb433d1b164f0281D', 18, 'stETH', 'stakedETH')
export const TRIBE = new Token(ChainId.ETHEREUM, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', 18, 'TRIBE', 'Tribe')
export const UMA = new Token(ChainId.ETHEREUM, '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828', 18, 'UMA', 'UMA')
export const UMA_CALL = new Token(
  ChainId.ETHEREUM,
  '0x1062aD0E59fa67fa0b27369113098cC941Dd0D5F',
  18,
  'UMA',
  'UMA 35 Call [30 Apr 2021]'
)
export const USDC = new Token(ChainId.ETHEREUM, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')
export const USDP = new Token(
  ChainId.ETHEREUM,
  '0x1456688345527bE1f37E9e627DA0837D6f08C925',
  18,
  'USDP',
  'USDP Stablecoin'
)
export const USDT = new Token(ChainId.ETHEREUM, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const UST = new Token(ChainId.ETHEREUM, '0xa47c8bf37f92aBed4A126BDA807A7b7498661acD', 18, 'UST', 'Wrapped UST')
export const XSUSHI_CALL = new Token(
  ChainId.ETHEREUM,
  '0xada279f9301C01A4eF914127a6C2a493Ad733924',
  18,
  'XSUc25-0531',
  'XSUSHI 25 Call [31 May 2021]'
)
export const WBTC = new Token(ChainId.ETHEREUM, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC')

export const XSUSHI = new Token(
  ChainId.ETHEREUM,
  '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  18,
  'xSUSHI',
  'SushiBar'
)

export const LIFT = new Token(ChainId.ETHEREUM, '0xf9209d900f7ad1DC45376a2caA61c78f6dEA53B6', 18, 'LIFT', 'LiftKitchen')
export const LFBTC = new Token(
  ChainId.ETHEREUM,
  '0xafcE9B78D409bF74980CACF610AFB851BF02F257',
  18,
  'LFBTC',
  'LiftKitchen BTC'
)
export const CVXCRV = new Token(ChainId.ETHEREUM, '0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7', 18, 'cvxCRV', 'cvxCRV')
export const CRV = new Token(ChainId.ETHEREUM, '0xD533a949740bb3306d119CC777fa900bA034cd52', 18, 'CRV', 'Curve')

export const CRXSUSHI = new Token(
  ChainId.ETHEREUM,
  '0x228619CCa194Fbe3Ebeb2f835eC1eA5080DaFbb2',
  8,
  'crXSUSHI',
  'Cream SushiBar'
)
export const AXSUSHI = new Token(
  ChainId.ETHEREUM,
  '0xF256CC7847E919FAc9B808cC216cAc87CCF2f47a',
  18,
  'aXSUSHI',
  'Aave interest bearing XSUSHI'
)

export const DPI = new Token(ChainId.ETHEREUM, '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b', 18, 'DefiPulse', 'DPI')
export const RAI = new Token(
  ChainId.ETHEREUM,
  '0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919',
  18,
  'Rai Reflex Index',
  'RAI'
)
export const YFI = new Token(ChainId.ETHEREUM, '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', 18, 'YFI', 'YFI')
export const WOOFY = new Token(ChainId.ETHEREUM, '0xD0660cD418a64a1d44E9214ad8e459324D8157f1', 12, 'Woofy', 'WOOFY')
export const SPANK = new Token(ChainId.ETHEREUM, '0x42d6622deCe394b54999Fbd73D108123806f6a18', 18, 'Spank', 'SPANK')
export const OHM = new Token(ChainId.ETHEREUM, '0x383518188C0C6d7730D91b2c03a03C837814a899', 9, 'Olympus', 'OHM')
export const INV = new Token(ChainId.ETHEREUM, '0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68', 18, 'Inverse Dao', 'INV')
export const DOLA = new Token(
  ChainId.ETHEREUM,
  '0x865377367054516e17014CcdED1e7d814EDC9ce4',
  18,
  'Dola USD Stablecoin',
  'DOLA'
)

type ChainTokenMap = {
  readonly [chainId in ChainId]?: Token
}

// SUSHI
export const SUSHI: ChainTokenMap = {
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
