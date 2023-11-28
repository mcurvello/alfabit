import { Meta, StoryObj } from "@storybook/react";

import TextBlock, { TextBlockProps } from "./TextBlock";

const meta: Meta = {
  title: "Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    className: {
      type: "string",
    },
  },
};

export default meta;
export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    textBlock:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
};
