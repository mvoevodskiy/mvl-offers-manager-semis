const {MVLoaderBase} = require('mvloader');

class mvlOffersManagerSemis extends MVLoaderBase{
    static exportConfig = {
        ext: {
            classes: {
                semis: {},
                controllers: {
                    mvlOffersManager: require('./controllers/mvloffermanagercontroller')
                },
                handlers: {},
            },
            configs: {
                controllers: {},
                handlers: {
                    BotHandler: {
                        schemaFiles: [
                            __dirname + '/botschemas/main.yml',
                        ],
                    },
                    DBHandler: {
                        sequelize: {},
                        models: {
                            mvlOffer: require('./models/mvlOffer'),
                            mvlOfferResponse: require('./models/mvlOfferResponse'),
                        }
                    }
                },
                semis: {},
            }
        },
        db: {},
    };

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
    }

}

module.exports = mvlOffersManagerSemis;