//@ts-nocheck
import {cva, VariantProps} from 'class-variance-authority';
import * as React from 'react';

const textStyles = cva([], {
  variants: {
    size: {
      small: 'text-sm',
      medium: 'text-md',
      large: 'text-lg'
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold'
    }
  }
})

type TextStylesProps = VariantProps<typeof textStyles>

export interface TextProps extends Omit<TextStylesProps, 'size' | 'weight'> {
  variant: `${NonNullable<TextStylesProps['size']>}/${NonNullable<TextStylesProps['weight']>}`;
  children?: ReactNode;
}

export function Text ({variant, children, ...props} : TextProps) {
  const [size, weight] = (variant as string).split("/") as [TextStylesProps['size'], TextStylesProps['weight']]
  return <div className = {textStyles({size, weight, ...props})}>{children}</div>
}