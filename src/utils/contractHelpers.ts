// migrate from cronaswapv1
import { ethers } from 'ethers'
import { simpleRpcProvider } from 'utils/providers'
// import { poolsConfig } from 'config/constants'
// import { PoolCategory } from 'config/constants/types'
// import tokens from 'config/constants/tokens'

// Addresses
import { MULTICALL2_ADDRESS } from '@cronaswap/core-sdk'
// import { getAddress, getMulticallAddress } from 'utils/addressHelpers'

// import MultiCallAbi from 'config/abi/Multicall.json'
import MULTICALL2_ABI from '../constants/abis/multicall2.json'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getMulticallContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(MULTICALL2_ABI, MULTICALL2_ADDRESS[25], signer)
}
