"use strict";
const profile = {
    template: `
        <div class="dogeContainer"></div>
        <div class="infoDiv">
        <p class="title">{{$ctrl.info.name}}</p>
        <p class="contact">{{$ctrl.info.contactInfo}}</p>
        <p>{{$ctrl.info.bio}}</p>
        <a class="edit" href="#!/editprofile">edit profile</a>
        </div>
    `,
    controller: [ "ProfileService", function(ProfileService) {
        const vm = this;
            vm.info = ProfileService.getName()
            console.log(vm.info)
        

    }]

}






angular
    .module("ProfileApp")
    .component("profile", profile)