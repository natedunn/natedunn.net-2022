import { CSSProperties, forwardRef } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children: React.ReactNode
  style?: CSSProperties | null | any
}
export const Container = function Container({ children, className }: Props) {
  return (
    <div
      className={clsx('relative max-w-7xl px-4 sm:px-8 lg:px-12', className)}
    >
      {children}
    </div>
  )
}
