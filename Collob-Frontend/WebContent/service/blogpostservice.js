app.factory('BlogPostService',function($http)
		{
var blogPostService={}

blogPostService.saveBlog=function(blogPost)
{
return $http.post("http://localhost:8081/Collob-Backend/saveblogpost", blogPost)
}

blogPostService.blogsApproved=function()
{
	return $http.get("http://localhost:8081/Collob-Backend/listofblogs/"+1)
	}

blogPostService.blogsWaitingForApproval=function()
{
	return $http.get("http://localhost:8081/Collob-Backend/listofblogs/"+0)
	}

blogPostService.getBlogPost=function(id)
{
	return $http.get("http://localhost:8081/Collob-Backend/getblogpost/"+id)
	}

blogPostService.updateApproval=function(blogpost)
{
	return $http.put("http://localhost:8081/Collob-Backend/updateApproval", blogpost)
	}

blogPostService.addComment=function(blogComment){
    return $http.post("http://localhost:8081/Collob-Backend/addblogcomment",blogComment)
    }

blogPostService.getBlogComments=function(blogId){
    return $http.get("http://localhost:8081/Collob-Backend/getblogcomments/"+blogId)
    }

return blogPostService;
})