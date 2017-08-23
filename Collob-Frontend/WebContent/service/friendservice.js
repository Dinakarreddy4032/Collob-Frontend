/**
 * Friend Service
 */
app.factory('FriendService',function($http){
	var friendService={};
	
	friendService.suggestedUsers=function(){
		return $http.post("http://localhost:8081/Collob-Backend/suggesteduserslist")
	}
	friendService.sendFriendRequest=function(toUsername){
		return $http.post("http://localhost:8081/Collob-Backend/friendrequest/"+toUsername);
	}
	friendService.pendingRequests=function(){
		return $http.get("http://localhost:8081/Collob-Backend/pendingrequests");
	}
	friendService.updatePendingRequest=function(fromId,status){
		console.log(fromId+''+status);
		return $http.put("http://localhost:8081/Collob-Backend/updatependingrequest/"+fromId+'/'+status);
	}
	
	friendService.listOfFriends=function(){
		return $http.get("http://localhost:8081/Collob-Backend/listoffriends"); 
	}
	
	return friendService;
})