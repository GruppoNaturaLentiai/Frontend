import { useEffect, useRef, useState } from "react"
import * as _ from "lodash"

const useThrottledState = <T>(
  defaultVal: T,
  throttleRate: number,
  dispatch: any,
) => {
  const [value, setValue] = useState(defaultVal)

  const throttledFunc = useRef(_.throttle(dispatch, throttleRate)).current

  useEffect(() => {
    throttledFunc(value)
  }, [value])

  return [value, setValue]
}

export default useThrottledState
