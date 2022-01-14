import { SerializedFarmConfig } from '../../constants/types'
import fetchFarm from './fetchFarm'

const fetchFarms = async (farmsToFetch: SerializedFarmConfig[]) => {
  const data = await Promise.all(
    farmsToFetch.map(async (farmConfig) => {
      // console.log('Here is farmConfig', farmConfig)

      const farm = await fetchFarm(farmConfig)
      const serializedFarm = { ...farm, token: farm.token, quoteToken: farm.quoteToken }
      return serializedFarm
    })
  )
  return data
}

export default fetchFarms
