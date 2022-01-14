// migrate from cronaswapv1
import sample from 'lodash/sample'

export const nodes = [
  'https://evm-cronos.crypto.org',
  'https://rpc.cronaswap.org',
  'https://evm-cronos.crypto.org',
  'https://node.cronaswap.org',
]
// Array of available nodes to connect to
// export const nodes = [
//   process.env.REACT_APP_NODE_1,
//   process.env.REACT_APP_NODE_2,
//   process.env.REACT_APP_NODE_3,
//   process.env.REACT_APP_NODE_4,
// ]

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl
