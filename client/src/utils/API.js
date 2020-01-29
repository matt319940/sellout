import axios from 'axios';

export default {
	signUpSales: function(userData) {
		return axios.post('/sales/signup', userData);
	},
	loginSales: function(userData) {
		return axios.post('/sales/login', userData);
	},
	updateSalesAccount: function(data) {
		return axios.put('/sales/update', data);
	},
	signUpBusiness: function(data) {
		return axios.post('/business/signup', data);
	},
	loginBusiness: function(data) {
		return axios.post('/business/login', data);
	},
	updateBusinessAccount: function(data) {
		return axios.put('/business/update', data);	
	},
	searchBusinessUsers: function() {
		return axios.get('/businessUsers')
	},
	addUser: function() {
		return axios.post('api/user');
	},
	userInfo: function() {
		return axios.get('/api/user');
	},
	searchProducts: function(data) {
		return axios.get('/api/offerings');
	},
	postProduct: function(data) {
		return axios.post('/api/offerings', data);
	},
	deleteProduct: function(data) {
		return axios({method: 'DELETE', url: '/api/offerings', data});
	},
	getSales: function(data) {
		return axios.get('/api/sales', data);
	},
	postSale: function(data) {
		return axios.post('/api/sales', data);
	},
	getLeads: function(data) {
		return axios.get('/api/leads', data);
	},
	postLead: function(data) {
		return axios.post('/api/leads', data);
	},
	getModules: function(data) {
		return axios.get('/api/modules', data);
	},
	logOut: function(){
		return axios.get('/logout');
	}
};