type Service = {
    name: string;
    version: string;
    status: "Running" | "Stopped";
};

async function getServices(): Promise<Service[]> {
    const res = await fetch("http://localhost:8080/services", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch services");
    }

    return res.json();
}

export default async function ServicesPage() {
    const services = await getServices();

    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Services</h1>

            <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2 text-left">Service Name</th>
                        <th className="border px-4 py-2 text-left">Version</th>
                        <th className="border px-4 py-2 text-left">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {services.map((service) => (
                        <tr key={service.name}>
                            <td className="border px-4 py-2">{service.name}</td>
                            <td className="border px-4 py-2">{service.version}</td>
                            <td className="border px-4 py-2 text-green-600 font-medium">
                                {service.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
