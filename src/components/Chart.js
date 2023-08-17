import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Mon",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Tue",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Wed",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Thu",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Fri",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Sat",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Sun",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

export default function Chart() {
    return (
        <div
        
        style={{
            background: "rgb(40,40,40)",
            borderRadius: "20px",
            paddingTop: "1.3rem"
        }}
        
        >
            <BarChart
                width={900}
                height={250}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                barSize={25}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="20" />
                <Bar dataKey="pv" fill="#3A3A3A" background={{ fill: "rgb(40,40,40)" }} />
            </BarChart>
        </div>
    );
}
