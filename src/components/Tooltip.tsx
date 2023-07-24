"use client";

import { ComponentProps } from "react";
import { Tooltip as FlowbiteTooltip } from "flowbite-react";

export default function Tooltip({ ...props }: ComponentProps<typeof FlowbiteTooltip>) {
  return <FlowbiteTooltip {...props} />;
}
