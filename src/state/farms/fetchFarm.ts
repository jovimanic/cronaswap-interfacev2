import { SerializedFarm } from '../types'
import fetchPublicFarmData from './fetchPublicFarmData'

const fetchFarm = async (farm: SerializedFarm): Promise<SerializedFarm> => {
  // console.log('Here is farm', farm)

  const farmPublicData = await fetchPublicFarmData(farm)

  return { ...farm, ...farmPublicData }
}

export default fetchFarm
