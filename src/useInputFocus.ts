import React from 'react'

export const useInputFocus = (): React.RefObject<HTMLInputElement> => {
  const nodeRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (nodeRef.current !== null) nodeRef.current.focus()
  }, [nodeRef])

  return nodeRef
}
