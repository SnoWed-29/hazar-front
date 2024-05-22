// src/components/TestApiComponent.js

import React, { useState, useEffect } from 'react';
import { fetchDataFromApi } from '../services/apiService';

const TestApiComponent = () => {
  const [apiTestResult, setApiTestResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testApiConnection = async () => {
      try {
        const responseData = await fetchDataFromApi();
        setApiTestResult(responseData);
      } catch (error) {
        setError(error.message);
      }
    };

    testApiConnection();
  }, []);

  return (
    <div>
      <h1>Test API Connection</h1>
      {error && <div>Error: {error}</div>}
      {apiTestResult && (
        <div>
          <p>API connected successfully!</p>
          {/* Display additional details from the API test result if needed */}
        </div>
      )}
    </div>
  );
};

export default TestApiComponent;
