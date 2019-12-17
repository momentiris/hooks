import React from 'react'

export const useInputFocus = (): React.RefObject<any> => {
  const nodeRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (nodeRef.current !== null) nodeRef.current.focus()
  }, [nodeRef])

  return nodeRef
}
