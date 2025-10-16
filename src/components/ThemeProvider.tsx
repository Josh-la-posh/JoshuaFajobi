"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderPropsInfer = Parameters<typeof NextThemesProvider>[0];

export function ThemeProvider(props: ThemeProviderPropsInfer) {
  return <NextThemesProvider {...props}>{props.children}</NextThemesProvider>;
}
