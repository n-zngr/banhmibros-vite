import { useEffect, useState } from 'react';

const DatabaseViewer = () => {
    const [databases, setDatabases] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const apiBaseUrl = import.meta.env.VITE_API_URL;
        console.log(apiBaseUrl);
        console.log(import.meta.env);

        fetch(`${apiBaseUrl}/getDatabases.php`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setDatabases(data);
                }
            })
            .catch(err => setError('Failed to fetch databases: ' + err.message));
    }, []);

  if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Databases</h1>
            {databases.map((db, index) => (
                <div key={index}>
                <h2>{db.name}</h2>
                {db.tables.map((table: any, idx: number) => (
                    <div key={idx}>
                    <h3>Table: {table.name}</h3>
                    <pre>{JSON.stringify(table.rows, null, 2)}</pre>
                    </div>
                ))}
                </div>
            ))}
        </div>
    );
};

export default DatabaseViewer;