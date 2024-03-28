import type { Meta, StoryObj } from '@storybook/react';
import Input from '../Input';
import Label from '../Label';
import FormGroupComponent from './FormGroup';

const meta = {
  title: 'Forms/FormGroup',
  component: FormGroupComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormGroup: Story = {
  args: {
    children: (
      <>
        <Label htmlFor="card-search-form">Label: </Label>
        <Input id={'card-search-form'} placeholder="Input" />
      </>
    ),
  },
};
