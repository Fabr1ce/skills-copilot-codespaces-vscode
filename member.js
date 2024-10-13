function skillsMembers() {
  return {
    restrict: 'E',
    templateUrl: 'app/members/skillsMembers.html',
    controller: 'SkillsMembersController',
    controllerAs: 'skillsMembersCtrl',
    bindToController: true,
    scope: {
      members: '=',
      skills: '='
    }
  };
}