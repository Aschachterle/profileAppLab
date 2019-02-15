"use strict";

function ProfileService($location) {
    const self = this;
    self.userProfile = {
        name: `Doge`,
        contactInfo: `Bork 3 times then awoo`,
        bio: `I like pizza and chimkin nugz, grat at borkin and awoo. Plz gib scritch scratch`
    }
    self.getName = function() {
        return self.userProfile

    }
    self.setName = function(userProfile) {
        self.userProfile = userProfile
        $location.path("/profile")
    } 
}






angular
    .module("ProfileApp")
    .service("ProfileService", ProfileService)