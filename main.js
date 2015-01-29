// var profileSidebar = {
//
//   init: function() {
//     profileSidebar.initStyling();
//     profileSidebar.initEvents();
//   },
//
//   initStyling: function() {
//
//     var userAvatar = _.pluck(userInfo, 'avatar_url');
//     var userName = _.pluck(userInfo, 'name');
//     var userHandle = _.pluck(userInfo, 'login');
//     var userLocation = _.pluck(userInfo, 'location');
//     var userDomain = _.pluck(userInfo, 'blog');
//     var userJoined = _.pluck(userInfo, 'created_at');
//     var userFollowers = _.pluck(userInfo, 'followers');
//     //var userStarred = _.pluck(userInfo, '?'); //info not in GH JSON
//     var userFollowing = _.pluck(userInfo, 'following');
//
//     var profileInfo = {
//       avatar_url: userAvatar,
//       name: userName ,
//       login: userHandle,
//       location: userLocation,
//       blog: userDomain,
//       created_at: userJoined,
//       followers: userFollowers,
//       following: userFollowing
//     };
// ;
//     var profileCompiled = _.templates(templates.userProfile);
//
//     $("aside").append(userCompiled(profileInfo));
//
//     var followingCompiled = _.templates(templates.userFollowing);
//
//     $("aside").append(followingCompiled(profileInfo))
//   },
//
//   initEvents: function() {
//
//     }
//   };
//
// $(document).ready(function() {
//
//     profileSidebar.init();
//
// });


//////////  Start over /////////////

var profileSidebar = {

  init: function() {
    profileSidebar.initStyling();
    profileSidebar.initEvents();
    profileSidebar.renderAllRepos(repoActivity);
  },

  initStyling: function() {
    profileSidebar.renderSidebar(userInfo);
  },

  initEvents: function() {

  },

  renderSidebar: function () {
    var userProfile = _.template(templates.userProfile);
    $('aside').append(userProfile);
  },

  renderRepo: function(myRepo, index, array) {
    myRepo.idx = index;
    var repoContent=_.template(templates.repo);

    $('.repo-section').append(repoContent(myRepo));
  },

  renderAllRepos: function (repoInfo) {
    _.each(repoInfo, profileSidebar.renderRepo);
   }
};

$(document).ready(function(){
    profileSidebar.init();
});
