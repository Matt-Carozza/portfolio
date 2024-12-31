import React, { useEffect, useState } from 'react';

function EmbeddedTweet({ tweetUrl }) {
  const [embedHtml, setEmbedHtml] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch oEmbed data from the proxy server
    fetch(`/oembed?url=${tweetUrl}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setEmbedHtml(data.html))
      .catch(async (error) => {
        console.error('Error fetching oEmbed:', error);
        // If it's an HTML response, log it
        const text = await error.response?.text();
        if (text) {
          console.error('Response body:', text); // Logs the HTML content (error page)
        }
        setError(error.message); // Store the error message in state
      });
  }, [tweetUrl]);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
      )}
    </div>
  );
}

export default EmbeddedTweet;

