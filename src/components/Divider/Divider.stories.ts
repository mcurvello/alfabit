import { Meta, StoryObj } from "@storybook/react";
import Divider, { DividerProps } from "./Divider";

const meta: Meta<DividerProps> = {
  title: "Atoms/Divider",
  component: Divider,
  argTypes: {
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Default: StoryObj<DividerProps> = {
  args: {},
};

export const DividerWithProps: StoryObj<DividerProps> = {
  args: {
    children: "Hello World",
  },
};
