'use client'

import { Header } from "@/components/Header";

import { Content } from "@/components/Content";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col px-6">
      <Header />

      <Content />
    </div>
  )
}
