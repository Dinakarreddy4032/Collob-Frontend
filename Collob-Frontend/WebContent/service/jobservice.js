/**
 * Job service
 */
app.factory('JobService',function($http){
	var jobService={}
	jobService.saveJob=function(job){
		return $http.post("http://localhost:8081/Collob-Backend/savejob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8081/Collob-Backend/getalljobs")
	}
	
	return jobService;
})