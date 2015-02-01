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

  renderSidebar: function(mySidebar, index, array) {
    var userSidebar = _.template(templates.userProfile);
    console.log(userSidebar, mySidebar);
    $('aside').append(userSidebar(mySidebar));
  },

  renderRepo: function(myRepo, index, array) {
    myRepo.idx = index;
    var repoContent=_.template(templates.userRepo);

    $('.repo-section').append(repoContent(myRepo));
  },

  renderAllRepos: function(repoInfo) {
    _.each(repoInfo, profileSidebar.renderRepo);
   }
};

$(document).ready(function() {
    profileSidebar.init();

    // Hide Repositories "tab" when switching to Public Activity
    $(".pub-act-border").on("click", function(event) {
      event.preventDefault();

      console.log("pub activity link worked");

      $(".repo-header").addClass("hide");
      $(".repo-post").addClass("hide");
      $(".public-activity").removeClass("hide");
    });

    // Hide Public Activity "tab" when switching to Repositories
    $(".repo-border").on("click", function (event) {
      event.preventDefault();

      console.log("repo tab link worked");

      $(".public-activity").addClass("hide");
      $(".repo-header").removeClass("hide");
      $(".repo-post").removeClass("hide");
    });
});
