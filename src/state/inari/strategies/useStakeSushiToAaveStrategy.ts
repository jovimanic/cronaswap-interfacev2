import { AXSUSHI, SUSHI } from '../../../config/tokens'
import { ChainId, SUSHI_ADDRESS } from '@cronaswap/core-sdk'
import { StrategyGeneralInfo, StrategyHook, StrategyTokenDefinitions } from '../types'
import { useEffect, useMemo } from 'react'
import { I18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from '../../../services/web3'
import useBaseStrategy from './useBaseStrategy'
import { useLingui } from '@lingui/react'
import { useTokenBalances } from '../../wallet/hooks'

export const GENERAL = (i18n: I18n): StrategyGeneralInfo => ({
  name: i18n._(t`SUSHI → Aave`),
  steps: [i18n._(t`SUSHI`), i18n._(t`xSUSHI`), i18n._(t`Aave`)],
  zapMethod: 'stakeSushiToAave',
  unzapMethod: 'unstakeSushiFromAave',
  description: i18n._(
    t`Stake SUSHI for xSUSHI and deposit into Aave in one click. xSUSHI in Aave (aXSUSHI) can be lent or used as collateral for borrowing.`
  ),
  inputSymbol: i18n._(t`SUSHI`),
  outputSymbol: i18n._(t`xSUSHI in Aave`),
})

export const tokenDefinitions: StrategyTokenDefinitions = {
  inputToken: {
    chainId: ChainId.ETHEREUM,
    address: SUSHI_ADDRESS[ChainId.ETHEREUM],
    decimals: 18,
    symbol: 'SUSHI',
  },
  outputToken: {
    chainId: ChainId.ETHEREUM,
    address: '0xF256CC7847E919FAc9B808cC216cAc87CCF2f47a',
    decimals: 18,
    symbol: 'aXSUSHI',
  },
}

const useStakeSushiToAaveStrategy = (): StrategyHook => {
  const { i18n } = useLingui()
  const { account } = useActiveWeb3React()
  const balances = useTokenBalances(account, [SUSHI[ChainId.ETHEREUM], AXSUSHI])
  const general = useMemo(() => GENERAL(i18n), [i18n])
  const { setBalances, ...strategy } = useBaseStrategy({
    id: 'stakeSushiToAaveStrategy',
    general,
    tokenDefinitions,
  })

  useEffect(() => {
    if (!balances) return

    setBalances({
      inputTokenBalance: balances[SUSHI[ChainId.ETHEREUM].address],
      outputTokenBalance: balances[AXSUSHI.address],
    })
  }, [balances, setBalances])

  return useMemo(
    () => ({
      ...strategy,
      setBalances,
    }),
    [strategy, setBalances]
  )
}

export default useStakeSushiToAaveStrategy
