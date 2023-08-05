import axios from 'axios';

export default {
  // Get all quotes
  getQuotes: function() {
    return axios.get('/api/quotes');
  },
  // Get a single quote by id
  getQuote: function(id) {
    return axios.get('/api/quotes/' + id);
  },
  // Create a new quote
  createQuote: function(data) {
    return axios.post('/api/quotes', data);
  },
  // Update a quote
  updateQuote: function(id, data) {
    return axios.put('/api/quotes/' + id, data);
  },
  // Delete a quote
  deleteQuote: function(id) {
    return axios.delete('/api/quotes/' + id);
  },
  // User routes will be added here
};
