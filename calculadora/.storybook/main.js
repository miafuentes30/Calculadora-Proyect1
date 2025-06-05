/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [   
   '@storybook/addon-essentials',
    '@storybook/addon-docs'
  ]
}
export default config
