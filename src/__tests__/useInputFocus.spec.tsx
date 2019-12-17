import React from 'react'
import { useInputFocus } from '../useInputFocus'
import { render, wait } from '@testing-library/react'

const Input = () => {
  const ref = useInputFocus()
  return <input ref={ref} />
}

describe('useInputFocus', () => {
  it('focuses input', async () => {
    const { container } = render(<Input />)

    await wait(() => {
      expect(document.activeElement).toBe(container.querySelector('input'))
    })
  })
})
