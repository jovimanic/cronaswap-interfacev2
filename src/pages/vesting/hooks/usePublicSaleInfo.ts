import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { usePubSaleContract } from 'hooks/useContract'
import useRefresh from 'hooks/useRefresh'
// import { getPubSaleAddress } from 'utils/addressHelpers'
// import multicall from 'utils/multicall'
// import preSaleAbi from 'config/abi/publicSale.json'

export interface PublicSaleProps {
  endDate: number
  startDate: number
  croPrice: ethers.BigNumber
  totalForSale: ethers.BigNumber
  totalOfPurchased: ethers.BigNumber
  availableForSale: ethers.BigNumber
  availablePercentage: ethers.BigNumber
}

// export const usePublicSaleData = () => {
//   const { slowRefresh } = useRefresh()

//   const [balance, setBalance] = useState<PublicSaleProps>({
//     endDate: 0,
//     startDate: 0,
//     croPrice: ethers.BigNumber.from(0),
//     totalForSale: ethers.BigNumber.from(0),
//     totalOfPurchased: ethers.BigNumber.from(0),
//     availableForSale: ethers.BigNumber.from(0),
//     availablePercentage: ethers.BigNumber.from(0)
//   })

//   useEffect(() => {
//     async function fetchPublicSaleData() {
//       try {
//         const calls = ['basePrice', 'preSaleStart', 'preSaleEnd', 'preSaleTokenPool', 'purchasedPreSale'].map((method) => ({
//           address: getPubSaleAddress(),
//           name: method,
//         }))

//         const [[basePrice], [preSaleStart], [preSaleEnd], [preSaleTokenPool], [purchasedPreSale]] = await multicall(preSaleAbi, calls)

//         setBalance({
//           endDate: preSaleEnd,
//           startDate: preSaleStart,
//           croPrice: basePrice,
//           totalForSale: preSaleTokenPool,
//           totalOfPurchased: purchasedPreSale,
//           availableForSale: preSaleTokenPool.sub(purchasedPreSale),
//           availablePercentage: purchasedPreSale.div(ethers.BigNumber.from(3000000)).mul(100)
//         })
//       } catch (error) {
//         console.error(error)
//       }
//     }

//     fetchPublicSaleData()
//   }, [slowRefresh])

//   return balance
// }

export const usePurchasedPreSale = () => {
  const { slowRefresh } = useRefresh()
  const [purchasedPreSale, setPurchasedPreSale] = useState<BigNumber>()

  useEffect(() => {
    async function fetchPurchasedPreSale() {
      const pubSaleContract = usePubSaleContract()
      const purchased = await pubSaleContract.purchasedPreSale()
      // setPurchasedPreSale(new BigNumber(purchased.toString()))
    }

    fetchPurchasedPreSale()
  }, [slowRefresh])

  return purchasedPreSale
}

export const usePurchased = () => {
  const { slowRefresh } = useRefresh()
  const { account } = useWeb3React()
  const [userPurchased, setUserPurchased] = useState<BigNumber>()

  useEffect(() => {
    async function fetchUserPurchased() {
      try {
        const pubSaleContract = usePubSaleContract()
        const buyPurchased = await pubSaleContract.purchased(account)
        setUserPurchased(new BigNumber(buyPurchased.toString()))
      } catch {
        setUserPurchased(new BigNumber(0))
      }
    }

    fetchUserPurchased()
  }, [account, slowRefresh])

  return userPurchased
}

export const useClaimable = () => {
  const { slowRefresh } = useRefresh()
  const { account } = useWeb3React()
  const [userClaimable, setUserClaimable] = useState<BigNumber>()

  useEffect(() => {
    async function fetchUserClaimable() {
      try {
        const pubSaleContract = usePubSaleContract()
        const claimable = await pubSaleContract.claimable(account)
        setUserClaimable(new BigNumber(claimable.toString()))
      } catch {
        setUserClaimable(new BigNumber(0))
      }
    }

    fetchUserClaimable()
  }, [account, slowRefresh])

  return userClaimable
}
