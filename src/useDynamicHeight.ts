import React from 'react'

export const useDynamicHeight = (nodeRef: React.RefObject<any>): number => {
  const [state, set] = React.useState<number>(0)

  React.useEffect(() => {
    if (nodeRef.current !== null) set(nodeRef.current.scrollHeight)
  }, [nodeRef])

  return state
}
