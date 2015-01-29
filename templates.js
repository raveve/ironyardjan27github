var templates = {};

templates.userProfile = [
'<div class="main-photo">',
'<img src = <%= userInfo.avatar_url %>',
'<h1><%= userInfo.name %></h1>',
'<p><%= userInfo.login %></p>',
'</div>',
'<div class="info">',
'<p><span class="octicon octicon-location"></span><%= userInfo.location %></p>',
'<p><a href=""><span class="octicon octicon-link"></span><%= userInfo.blog %></a></p>',
'<p><span class="octicon octicon-clock"></span><%= userInfo.created_at %></p>',
'</div>',
'<div class="follow">',
'<a href=""><h2><%= userInfo.followers %></h2><p>Followers</p></a>',
'<a href=""><h2><%= "4" %></h2><p>Starred</p></a>',
'<a href=""><h2><%= userInfo.following %></h2><p>Following</p></a>',
'</div>'
].join('');


templates.repo = [
'<div class=repoPost>',
'<ul>',
'<li><h2><%= name %></h2></li>',
'<li><%= language %></li>',
'<li><span class="octicon octicon-star"></span><%= stargazers_count %></li>',
'<li><span class="octicon octicon-git-branch"></span><%= forks %></li>',
'</ul>',
'</div>'
].join("");
