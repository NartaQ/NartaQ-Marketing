"use client";

import type React from "react";

export function Highlighter({ children }: { children: React.ReactNode }) {
  return <span className="relative inline-block bg-transparent">{children}</span>
}
