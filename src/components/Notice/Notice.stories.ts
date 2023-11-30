import { Meta, StoryObj } from "@storybook/react";

import Notice, { type NoticeProps } from "./Notice";

const meta: Meta<NoticeProps> = {
  title: "Atoms/Notice",
  component: Notice,
  argTypes: {
    children: { type: "string" },
    type: { type: "string" },
    message: { type: "string" },
    className: { type: "string" },
  },
};

export default meta;

export const Primary: StoryObj<NoticeProps> = {
  args: {
    children: "Este é um aviso padrão",
  },
};
