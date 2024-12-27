import { useEffect, useState } from 'react';
import apiConfig from '../api/api-config.json';

const DatabaseViewer = () => {
    const [databases, setDatabases] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const hostname = window.location.hostname;
        let apiUrl = apiConfig.devApiUrl;

        const PREV_DOMAIN = 'vite.zngr-dynamics.ch';
        const PROD_DOMAIN = 'prod-domain.ch';

        if (hostname.includes(PREV_DOMAIN)) {
            apiUrl = apiConfig.previewApiUrl;
        } else if (hostname.includes(PROD_DOMAIN)) {
            apiUrl = apiConfig.productionApiUrl;
        }

        fetch(`${apiUrl}/getDatabases.php`)
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