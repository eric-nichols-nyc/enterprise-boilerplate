import { Meta, StoryObj } from "@storybook/react";
import { LoaderButton } from "../components/loader-button";
import { IconButton } from "../components/icon-button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const meta = {
  title: "Examples/buttons",
  component: (args) => {
    return (
      <div className="w-full grid grid-cols-2 gap-4">
        <Card className="bg-white p-4 rounded-md shadow-sm border space-y-2">
          <CardHeader>
            <CardTitle>Loading button</CardTitle>
          </CardHeader>
          <CardContent>
            <LoaderButton {...args} />
          </CardContent>
        </Card>
        <Card className="bg-white p-4 rounded-md shadow-sm border space-y-2">
          <CardHeader>
            <CardTitle>Icon button</CardTitle>
          </CardHeader>
          <CardContent>
            <IconButton {...args} />
          </CardContent>
        </Card>
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
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {};
