// Decides what the public address receives: the holding page or the site.

export const STAGE_FULL = 'full'
export const STAGE_HOLDING = 'holding'

/**
 * @param {string | undefined} value The SITE_STAGE variable as read from the environment.
 * @returns {'full' | 'holding'}
 */
export function resolveStage(value) {
  return value === STAGE_FULL ? STAGE_FULL : STAGE_HOLDING
}
