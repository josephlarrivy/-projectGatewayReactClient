import axios from 'axios';

class API {
  constructor(token = 'xxx') {

    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    this.token = token;
    this.baseUrl = apiUrl;
  }

  // Dynamically build headers based on the route
  buildHeaders(route) {
      
    if (route.startsWith('/auth')) {
      return {
        'Content-Type': 'application/json',
      };
    }

    return {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    };
  }

  // Base method to make API calls
  async makeRequest(requestMethod, route, data = null, params = null) {
    const headers = this.buildHeaders(route);

    try {
      const response = await axios({
        method: requestMethod,
        url: `${this.baseUrl}${route}`,
        headers,
        data,
        params,
      });

      return response;  // Return the full response
    } catch (error) {
      // Return the error response object instead of just calling handleError
      return this.handleError(error);
    }
  }


  handleError(error) {
    let errorResponse = {
      status: null,
      data: null,
    };

    if (error.response) {
      console.error(`API Error (${error.response.status}): ${error.response.data}`);
      errorResponse.status = error.response.status;
      errorResponse.data = error.response.data;
    } else if (error.request) {
      console.error('No response received from API:', error.request);
      errorResponse.status = 500;  // Consider it a server error
      errorResponse.data = { message: 'No response from server' };
    } else {
      console.error('API Error:', error.message);
      errorResponse.status = 500;  // General error
      errorResponse.data = { message: error.message };
    }

    return errorResponse;  // Return error response object
  }



}

export default API;