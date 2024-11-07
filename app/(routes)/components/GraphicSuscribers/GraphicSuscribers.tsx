"use client"

import { TrendingUp } from "lucide-react"
import {
  Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts"
import { dataGraphics } from "./GraphicSuscribers.data"

export function GraphicSuscribers() {
  return (
    <div className="mt-5">
      <p className="text-3xl mb-3">24.479</p>
      <div className="flex gap-x-5 mb-5">
        <div className="flex items-center gap-2 px-3 text-md bg-[#16C8C7] text-white rounded-xl w-fit">
          8,5%
          <TrendingUp strokeWidth={1} className="h-4 w-4"/>
        </div>
        <p className="text-slate-500">432 increased</p>
      </div>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={dataGraphics}
            margin={{ top: 10, right: 30, left: 0, bottom: 0}}
          >

            </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}
