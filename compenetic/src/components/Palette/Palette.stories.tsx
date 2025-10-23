import type { Meta, StoryObj } from '@storybook/react';
import { Palette } from './index';

const meta: Meta<typeof Palette> = {
  title: 'Design System/Palette',
  component: Palette,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
