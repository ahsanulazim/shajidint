export default function ChartTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (

            <div className="bg-primary text-white p-2 rounded shadow-md">
                <p className="text-sm font-semibold">{label ? label : payload[0].name}</p>
                <p className="text-sm">Value: {payload[0].value}</p>
            </div>
        );

    }
    return null;
};

