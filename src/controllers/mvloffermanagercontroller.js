const {MVLoaderBase} = require('mvloader');

class mvlOffersManagerController extends MVLoaderBase {

    constructor (App, ...config) {
        let localDefaults = {

        };
        super(localDefaults, ...config);
        this.App = App;
    }

    async init() {
        return super.init();
    }

    async initFinish() {
        super.initFinish();
        this.DB = this.App.DB;
    }

    offerCreate (offer) {
        return this.DB.models.mvlOffer.create(offer);
    }

    offerResponseCreate (response) {
        return this.DB.models.mvlOffer.create(offer);
    }



}

module.exports = mvlOffersManagerController;