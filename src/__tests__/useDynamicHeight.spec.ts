import { useDynamicHeight } from '../useDynamicHeight'
import { renderHook } from '@testing-library/react-hooks'

describe('useDynamicHeight', () => {
  it('returns 0 when ref is null', () => {
    const { result } = renderHook(() => useDynamicHeight({ current: null }))

    expect(result.current).toEqual(0)
  })

  it('returns element scrollHeight when ref is not null', () => {
    const { result } = renderHook(() =>
      useDynamicHeight({ current: { scrollHeight: 500 } })
    )

    expect(result.current).toEqual(500)
  })
})
