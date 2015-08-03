app.factory('Accounts',function($http){
  return{
    updateInfo: function(user) { //returns array of chef objects with dishes array
            return $http.put(`/api/users/${user._id}`)
            .then(function(res) {
                return res.data;
            });
        },
    updatePW: function(id) {
    	return $http.get('/api/users/' + id)
    		.then(function (res) {
    			return res.data;
    		});
    }
  }; // nearbyDishes attached here from home.state.js, viewDish from list.dishes.js
});
