// components/ApiSwitcher.tsx
import React, { useState, useEffect } from 'react';

interface ApiSwitcherProps {
  apiChoice: string;
  onFetch?: (data: any) => void;
}

const ApiSwitcher: React.FC<ApiSwitcherProps> = ({ apiChoice, onFetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!apiChoice) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiChoice);
        const jsonData = await response.json();
        setData(jsonData);
        onFetch?.(jsonData); // Trigger callback with data
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiChoice, onFetch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
      
    </div>
  );
}

export default ApiSwitcher;