import { ChainId } from '@cronaswap/core-sdk'

type AddressMap = { [chainId: number]: string }

export const CRONAVAULT_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '0xDf3EBc46F283eF9bdD149Bb24c9b201a70d59389',
  [ChainId.CRONOS_TESTNET]: '0xEC2c9b42d56588654d2626F13D8F4FFd30fdf199',
}

// masterChef
export const MASTERCHEFV1_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '0x77ea4a4cF9F77A034E4291E8f457Af7772c2B254',
  [ChainId.CRONOS_TESTNET]: '0x8722a9C5AbD2D3935330467A04256c00EC8A2770',
}

export const MASTERCHEFV2_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '', //0x7B1982b896CF2034A0674Acf67DC7924444637E4
  [ChainId.CRONOS_TESTNET]: '0xc09fB2ef107A3c33B3523c85AA0a76D5484f8229',
}

// boost
export const VOTING_ESCROW_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '', //0x1E9d7DD649A1714f424f178036dbb79FA702b37d
  [ChainId.CRONOS_TESTNET]: '0x57fc66Ec66Eb05E292A2ec5ba1728450C51dC3a1',
}

export const REWARD_POOL_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '', //0x79956c0ccC9906Ee24B96CCF02234da1FB456dD8
  [ChainId.CRONOS_TESTNET]: '0xb8cF67ECA3923daF019f767c0dbcbAe16dcAf548',
}

export const DASHBOARDV1_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '0x3647f6A3Ef1Aa70697b09407FF092fe878e9CeBA',
  [ChainId.CRONOS_TESTNET]: '0x845D4EebB195745b26052C3136A08C137F465701',
}

export const DASHBOARDV2_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '0xcB9a81865d908eBF0F877fea6a45a60a9FE83c47',
  [ChainId.CRONOS_TESTNET]: '0x3c75d3D228c15D592f807553321E16DF234434EC',
}

// Seed / Private / Public Sale
export const SEED_SALE_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '0x94f3Dfc9E8AE00892984d8fA003BF09a46987DFd',
  [ChainId.CRONOS_TESTNET]: '',
}

export const PRIVATE_SALEA_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '0x1c41BE3D395494e636aE7Ec9b8B5AB32A9Ddd1Ce',
  [ChainId.CRONOS_TESTNET]: '',
}

export const PRIVATE_SALEB_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '0x309afba23f791B5c38Ab9057D11D6869755fAcaf',
  [ChainId.CRONOS_TESTNET]: '',
}

export const PUBLIC_SALE_ADDRESS: AddressMap = {
  [ChainId.CRONOS]: '0x941a3703E106707668f38E779c7984383638173e',
  [ChainId.CRONOS_TESTNET]: '',
}
