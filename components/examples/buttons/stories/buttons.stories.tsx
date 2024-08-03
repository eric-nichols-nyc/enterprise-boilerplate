import { Meta, StoryObj } from "@storybook/react";
import { LoaderButton } from "../components/loader-button";

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex flex-col items-center justify-center h-96 space-y-4 ${className}`}
      {...props}
    />
  );
}

const meta = {
  title: "Examples/buttons",
  component: (args) => {
    return (
      <div className="flex">
        <DemoContainer>
          <LoaderButton {...args} />
        </DemoContainer>
        <DemoContainer>
          <LoaderButton {...args} />
        </DemoContainer>
      </div>
    );
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<{}>

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {};
