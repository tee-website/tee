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
      <a href={link}>
        <Text color={color ?? "green.800"} fontWeight={"medium"}>
          {label}
        </Text>
      </a>
    </Link>
  );
}
