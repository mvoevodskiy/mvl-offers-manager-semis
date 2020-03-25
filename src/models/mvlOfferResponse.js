module.exports = (Sequelize) => {
    return [
        {},
        // Model options
        {},
        // Model associations
        {
            'belongsTo': [
                {
                    model: 'mvlOffer',
                    as: 'Offer'
                },
                {
                    model: 'mvlUser',
                    as: 'User',
                }
            ]
        }
    ];
};