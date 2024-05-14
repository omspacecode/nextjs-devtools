// components/PostSender.tsx
import React, { useState } from 'react';

interface PostSenderProps {
  modelName: string; // Part of URL that defines the model for the API endpoint
  postData: object; // Data to send in POST request
  privateKey: string; // Private key for API authentication
}

const baseUrl = 'https://builder.io/api/v1/write/';

const PostSender: React.FC<PostSenderProps> = ({ modelName, postData, privateKey }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string|null>(null);
  const [response, setResponse] = useState<any>(null);

  const sendPostData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseUrl}${modelName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${privateKey}`
        },
        body: JSON.stringify(postData)
      });
      console.log("response", response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setResponse(data);
      console.log(data); // Here you can handle the response data
    } catch (error) {
      setError(`Failed to send data: ${error.message}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={sendPostData} disabled={loading}>
        {loading ? 'Sending...' : 'Send Data'}
      </button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PostSender;