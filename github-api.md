How does the API handle authentication?
  You can provide an authentication password in the uri
Do I need to authenticate?
  It depends. Some sources require authentication, some do not. Others limit the number of times you access the api over time. You can usually find out in the developer section of the website.
What can I do with an unauthenticated request?
  You can try to fix it.
How can I authenticate my request? (3 ways)
How do I ask the API for...
The profile information for a specific user?
  https://api.github.com/users/alexanderallis
  You start with a JSON file which is basically a file with a big object in it. json.info will be the object of the information you need. Where json tells the browser that you're looking at the called json file, and "info" designates the name of the information you are looking for.
The repository listing for a specific user?
  https://api.github.com/users/user/repos
The recent, public activity for a specific user?
  https://api.github.com/users/feeds
Is there a limit to the number of requests I can make?
  In most cases, yes. The company will limit the number of requests as a security precaution.
Is there a way of extending that limit?
  You can usually pay for more requests. Postman is a service that will get you up to 5000 requests (in the case of GitHub) if you sign into your account on the website in question.
What happens when I hit the limit?
  You will get a 403 error, your code will break, and there will be no more fun. You will either have to wait for it to begin a new time cycle, or get a different IP address.
