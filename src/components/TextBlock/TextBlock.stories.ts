import { Meta, StoryObj } from "@storybook/react";

import TextBlock, { type TextBlockProps } from "./TextBlock";

const meta: Meta<TextBlockProps> = {
  title: "Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    type: {
      type: "string",
    },
    title: {
      type: "string",
    },
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
};

export const TextBlockPrimary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    type: "primary",
  },
};

export const TextBlockSecondary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    type: "secondary",
  },
};

export const TextBlockTertiary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    type: "dark",
  },
};
