import React from 'react';
import EmbeddedTweet from './components/EmbeddedTweet';

function App() {
  return (
    <div>
      <h1>Embedded Tweets</h1>
      {/* Add multiple EmbeddedTweet components with different tweet URLs */}
      <EmbeddedTweet tweetUrl="https://x.com/ThePromoguy123/status/1874131168691708311" />
      <EmbeddedTweet tweetUrl="https://x.com/ThePromoguy123/status/1874128301725540458" />
    </div>
  );
}

export default App;

