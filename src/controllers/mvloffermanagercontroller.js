const {MVLoaderBase} = require('mvloader');

class mvlOffersManagerController extends MVLoaderBase {

    constructor (App, ...config) {
        let localDefaults = {
            limits: {
                responses: 10,
            }
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

    async offerResponseFound (OfferId, UserId) {
        return !!(await this.DB.models.mvlOfferResponse.count({where: {OfferId, UserId}}));
    }

    offerResponseCreate (response) {
        return this.DB.models.mvlOfferResponse.findOrCreate({where: response});
    }

    offerResponsesCount (OfferId) {
        return this.DB.models.mvlOfferResponse.count({where: {OfferId}})
    }

    async offerResponsesBelowLimit (OfferId, limit) {
        if (limit === undefined) {
            limit = this.config.limits.responses;
        }
        return (await this.offerResponsesCount(OfferId)) < limit;
    }



}

module.exports = mvlOffersManagerController;