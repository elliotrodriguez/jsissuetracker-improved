# jsissuetracker-improved
An improved version of the Pure Javascript tutorial provided by CodingTheSmartWay.com on Medium. The original repo can be found [here](https://github.com/seeschweiler/jsissuetracker)

# What Is This?
I stumbled upon a tutorial on [Pure JavaScript - Building A Real-World Application From Scratch](https://medium.com/codingthesmartway-com-blog/pure-javascript-building-a-real-world-application-from-scratch-5213591cfcd6) from CodingTheSmartWay.com one afternoon, and I loved the idea that this website was trying to share, but the JavaScript used in the tutorial is outdated, broken, and to me, required a lot of refactoring. So, I refactored it. 

# Why Did I Do This?
I believe that if this is intended to be a teaching tool, then the tool should be accurate and reflect correct programming techniques and ideas. I have come across too many broken, incomplete examples. Hopefully this one helps.

# What Did I Do?
- _Replaced `for` loops with ES6's `find` function_ - a more legible syntax 
- Fixed an issue where the description field used in the `saveIssue` method did not match the form element's name, resulting in `undefined` descriptions even after the user added one
- Replaced string concatenation used to create the issue cards with ES6's template strings
- Added some defaults if a description or assigned user are left blank
- separated the retrieval of the issues database into its own function, DRYing it out
- Used ES6 property value shorthand notation 
- various other odds and ends

# What Else Needs To Happen?
- Definitely should be some tests. 
- Bug - the sort changes when a card is marked closed. 
- Features 
  - search cards
  - sort cards
  - prompt for approval
  - time stamps
  - ... lots more items.
  
 # Can I Make Changes To This?
ABSOLUTELY. Please fork and extend. I would like to get to extending this little app, because it is a good example of creating a JS application without standing up a framework, but if you get to it before I do, just submit a PR. Note that there are 34 forks and no PRs in the [original repo](https://github.com/seeschweiler/jsissuetracker), with no other contributors in the last 2 years, so rather than fork and wait for a merge that might never happen, I decided to create my own repo. 


