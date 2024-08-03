import { Meta, StoryObj } from "@storybook/react";
import Chat from "@/components/chat/chat";
import { userData } from "@/data";
const args = {
  selectedUser: userData[0],
  messages: userData[0].messages,
  isMobile: false,
};
const meta = {
  title: "Examples/chat",
  component: (args) => <Chat {...args}/>,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChatDemo: Story = {
  args: args,
};
