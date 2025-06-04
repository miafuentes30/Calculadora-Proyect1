import Calculator from '../components/Calculator'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Calculator',
  component: Calculator
}

export default meta

export const Default = () => <Calculator />