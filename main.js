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
