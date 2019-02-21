"use strict";
const editprofile = {
    template: `
    <form class="formContainer" ng-submit="$ctrl.saveInfo($ctrl.userProfile)">
        <p class="formTitle">Name</p>
        <input ng-model="$ctrl.userProfile.name" value="hello">
        <p class="formTitle">Contact Info</p>
        <input ng-model="$ctrl.userProfile.contactInfo">
        <p class="formTitle">Bio</p>
        <textarea name="" id="" cols="30" rows="10" ng-model="$ctrl.userProfile.bio"></textarea>
        <button class="update">Update</button>
    </form>
    `,
    controller: [ "ProfileService", function(ProfileService) {
        const vm = this;
        vm.saveInfo = function (userProfile) {
            ProfileService.setName(userProfile)
        }
        vm.info = ProfileService.getName()
        vm.$onInit = function(){
            vm.userProfile = ProfileService.getName();
          };

    }]

}






angular
    .module("ProfileApp")
    .component("editprofile", editprofile)