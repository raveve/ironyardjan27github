var templates = {};

templates.userProfile = [
'<div class="main-photo">',
'<img src = <%= avatar_url %>',
'<h1><%= name %></h1>',
'<p><%= login %></p>',
'</div>',
'<div class="info">',
'<p><span class="octicon octicon-location"></span><%= location %></p>',
'<p><a href=""><span class="octicon octicon-link"></span><%= blog %></a></p>',
'<p><span class="octicon octicon-clock"></span><%= created_at %></p>',
'</div>',
'<div class="follow">',
'<a href=""><h2><%= followers %></h2><p>Followers</p></a>',
'<a href=""><h2><%= "4" %></h2><p>Starred</p></a>',
'<a href=""><h2><%= following %></h2><p>Following</p></a>',
'</div>',
'<div class="orgs"><h3>Organizations</h3></div>'
].join('');


templates.userRepo = [
'<div class="repo-post">',
'<ul>',
'<li><h2><%= name %></h2></li>',
'<li><%= language %></li>',
'<li><span class="octicon octicon-star"></span><%= stargazers_count %></li>',
'<li><span class="octicon octicon-git-branch"></span><%= forks %></li>',
'</ul>',
'<p><%= description %></p>',
'<p><%= updated_at %></p>',
'</div>'
].join("");

templates.userPushed = [
'<div class="push-post">',
'<p><%= element.public %></p>',
'<a href=""><h3><%= element.actor.login %></h3></a>',
'<h3><%= pushed to %></h3>',
'<a href=""><h3><%= element.payload.master_branch %></h3></a>',
'<h3><%= at %></h3>',
'<a href="<%= element.payload.url %>"><h3><%= element.repo.name %></h3></a>',
'<img src = <%= element.actor.avatar_url %>',
'<img class="tiny-img" src = <%= element.actor.avatar_url %>',
'<a href="<%=  %>"><h3><%= element.payload.push_id %></h3></a>',
'<p><%= element.payload.message %></p>'
].join("");

templates.userBranch = [
'<div class="branch-post">'
].join("");

templates.userRepoEvent = [
'<div class="repo-event-post">'
].join("");
