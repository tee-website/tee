import React from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";

export type NavItemProps = {
  label: string;
  link: string;
  color?: string;
};

export default function NavItem({ link, label, color }: NavItemProps) {
  return (
    <Link href={link}>
      <Text color={color ?? "white"} fontWeight={"medium"} as={"a"}>
        {label}
      </Text>
    </Link>
  );
}
