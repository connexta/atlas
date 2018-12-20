import Omit from './omit'
type Subtract<T, K> = Omit<T, keyof K>

export default Subtract
