module.exports = (Sequelize) => {
    return [
        {
            name: Sequelize.STRING,
            geo: Sequelize.STRING,
            type: Sequelize.STRING(20),
            amount: Sequelize.DECIMAL(11,2),
            active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
            description: Sequelize.TEXT,
        },
        // Model options
        {},
        // Model associations
        {
            'belongsTo': [
                {
                    model: 'mvlUser',
                    as: 'Author',
                }
            ],
            // 'belongsToMany': [
            //     {
            //         model: 'mvlUser',
            //         as: 'Respondents',
            //         through: {
            //             model: 'mvlOfferResponse'
            //         },
            //     }
            // ],
            'hasMany': [
                {
                    model: 'mvlOfferResponse',
                    as: 'Responses',
                    foreignKey: 'OfferId',
                },
            ],

        }
    ];
};