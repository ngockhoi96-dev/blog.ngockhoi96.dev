import { Meta, StoryObj } from '@storybook/react';

import PaginationItem from '../pagination-item';

const meta = {
  title: 'Common/Pagination/PaginationItem',
  component: PaginationItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    pageNumber: {
      name: 'Page Number',
      description: 'Page number',
      defaultValue: 1,
      control: 'number',
    },
    totalPages: {
      name: 'Total Pages',
      description: 'Total number of pages',
      defaultValue: 10,
      control: 'number',
    },
    isSelected: {
      name: 'Is Selected',
      description: 'Is the page selected',
      defaultValue: false,
      control: 'boolean',
    },
  },
} satisfies Meta<typeof PaginationItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageNumber: 1,
    totalPages: 10,
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    pageNumber: 2,
    totalPages: 10,
    isSelected: true,
  },
};
