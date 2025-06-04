import Display from '../components/Display'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Display',
  component: Display
}

export default meta

export const Default = () => <Display value="123456789" />
export const Error = () => <Display value="ERROR" />