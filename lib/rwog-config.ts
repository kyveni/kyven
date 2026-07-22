/**
 * RWOG launch configuration.
 *
 * Fill these two values only after deployment. Everything on the launch and
 * status sections reacts automatically once they are set.
 *
 * Example:
 *   contractAddress: "REAL_CA_HERE",
 *   launchpadUrl: "https://official-launchpad.example/token/...",
 */
export const RWOG_CONFIG = {
  contractAddress: '',
  launchpadUrl: '',
  twitterHandle: '@Rwog_xyz',
  twitterUrl: 'https://x.com/Rwog_xyz',
} as const

export type LaunchState = {
  hasContract: boolean
  hasLaunchpad: boolean
  contractAddress: string
  launchpadUrl: string
  statusLabel: string
}

export function getLaunchState(): LaunchState {
  const contractAddress = RWOG_CONFIG.contractAddress.trim()
  const launchpadUrl = RWOG_CONFIG.launchpadUrl.trim()
  const hasContract = contractAddress.length > 0
  const hasLaunchpad = launchpadUrl.length > 0

  let statusLabel = 'Awaiting deployment'
  if (hasContract && hasLaunchpad) statusLabel = 'Deployment verified'
  else if (hasContract || hasLaunchpad) statusLabel = 'Deployment details updating'

  return { hasContract, hasLaunchpad, contractAddress, launchpadUrl, statusLabel }
}

export function shortAddress(address: string): string {
  if (address.length <= 13) return address
  return `${address.slice(0, 6)}…${address.slice(-5)}`
}
