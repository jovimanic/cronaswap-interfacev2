import React, { useState, useRef } from 'react'
import Container from '../../components/Container'
import Dots from '../../components/Dots'
import Head from 'next/head'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { useCronaVaultContract } from 'hooks/useContract'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { useTransactionAdder } from '../../state/transactions/hooks'
import { getBalanceAmount } from 'functions/formatBalance'
import { getCronaPrice } from 'features/staking/useStaking'
import AutoPoolCard from 'app/features/staking/AutoPoolCard'
import ManualPoolCard from 'app/features/staking/ManualPoolCard'

const buttonStyle =
  'flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-5 text-sm focus:outline-none focus:ring'

export default function Stake() {
  const { i18n } = useLingui()
  const addTransaction = useTransactionAdder()

  const cronavaultContract = useCronaVaultContract()
  const { callWithGasPrice } = useCallWithGasPrice()

  const autocronaBountyValue = useRef(0)

  const getCronaVault = async () => {
    const autocronaBounty = await cronavaultContract.calculateHarvestCronaRewards()
    autocronaBountyValue.current = getBalanceAmount(autocronaBounty._hex, 18).toNumber()
  }
  getCronaVault()

  const cronaPrice = getCronaPrice()
  const [pendingBountyTx, setPendingBountyTx] = useState(false)
  const handleBountyClaim = async () => {
    setPendingBountyTx(true)
    try {
      const tx = await callWithGasPrice(cronavaultContract, 'harvest', undefined, { gasLimit: 380000 })
      addTransaction(tx, {
        summary: `${i18n._(t`Claim`)} CRONA`,
      })
      setPendingBountyTx(false)
    } catch (error) {
      console.error(error)
      setPendingBountyTx(false)
    }
  }

  return (
    <Container id="bar-page" className="py-4 md:py-8 lg:py-12" maxWidth="7xl">
      <Head>
        <title key="title">Stake | CronaSwap</title>
        <meta key="description" name="description" content="Stake CronaSwap" />
      </Head>
      <div className="w-11/12 m-auto">
        <div className="items-center w-full py-10 mb-12 rounded md:flex bg-dark-400">
          <div className="w-3/4 mx-auto md:w-7/12 gap-y-10">
            <div className="text-2xl font-bold text-white mb-7">{i18n._(t`Crona Stake`)}</div>
            <div className="mb-3 text-base font-hero">
              {i18n._(t`Looking for a less resource-intensive alternative to mining?`)}
              <br />
              {i18n._(t`Use your CRONA tokens to earn more tokens,for Free.`)}
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfKgvVAO6VwiGkCkc9TzRUJFKPYqzg0siOV6T0oq0ELPz9KLw/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-2 text-sm font-bold font-Poppins">
                <div className="text-light-blue">{i18n._(t`Apply to Launch`)}</div>
                <ArrowRightIcon height={14} className="" />
              </div>
            </a>
          </div>
          <div className="w-3/4 px-4 py-4 m-auto mt-5 rounded-lg md:w-4/12 md:px-10 bg-dark-gray">
            <div className="text-lg text-dark-650">{i18n._(t`Auto Crona Bounty`)}</div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-2xl text-white">{`${Number(autocronaBountyValue.current).toFixed(3)}`}</div>
                <div className="text-base text-light-blue">
                  {`${Number(autocronaBountyValue.current * cronaPrice).toFixed(3)}`} USD
                </div>
              </div>
              <div className="w-1/3 min-w-max">
                <button
                  className={`${buttonStyle} text-high-emphesis bg-cyan-blue hover:bg-opacity-90 px-1 text-base md:text-lg`}
                  disabled={!autocronaBountyValue.current}
                  onClick={handleBountyClaim}
                >
                  {pendingBountyTx ? <Dots>{i18n._(t`Claiming`)} </Dots> : i18n._(t`Claim`)}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full gap-4 md:flex">
          <AutoPoolCard />
          <ManualPoolCard />
        </div>
      </div>
    </Container>
  )
}
