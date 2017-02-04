
exports.seed = function(knex, Promise) {

  return Promise.join(

    // 1-49
    knex('offices').del(),

    knex('offices').insert({
      id: 1,
      name: 'Melbourne',
      description: 'Melbourne office'
    }),
    knex('offices').insert({
      id: 2,
      name: 'Sydney',
      description: 'Sydney office'
    }),
    knex('offices').insert({
      id: 3,
      name: 'Auckland',
      description: 'Auckland office'
    }),
    knex('offices').insert({
      id: 4,
      name: 'Wellington',
      description: 'Wellington office'
    }),
    knex('offices').insert({
      id: 5,
      name: 'Christchurch',
      description: 'Christchurch office'
    }),


    // 50-99
    knex('awardcategorys').del(),

    knex('awardcategorys').insert({
      id: 50,
      name: 'LooseWheel',
      description: 'Doing something silly'
    }),
    knex('awardcategorys').insert({
      id: 51,
      name: 'TeamMate',
      description: 'Recognition by a colleague'
    }),
    knex('awardcategorys').insert({
      id: 52,
      name: 'AboveAndBeyond',
      description: 'Going the extra mile'
    }),
    knex('awardcategorys').insert({
      id: 53,
      name: 'Harper',
      description: 'Positive client feedback'
    }),
    knex('awardcategorys').insert({
      id: 54,
      name: 'Yellowness',
      description: 'Showing off Intergens value'
    }),
    knex('awardcategorys').insert({
      id: 55,
      name: 'Brightest Grad',
      description: 'Being a good grad'
    }),


    // 3000-5999
    knex('staffs').del(),

    knex('staffs').insert({
      id: 3000,
      name: 'Bob the Builder',
      objectGuid: '1111-2222-3333',
      samAccountName: 'bobbuild'
    }),


    // 100-199
    knex('events').del(),

    knex('events').insert({
      id: 130,
      name: 'Friday Meeting',
      description: 'A meeting on Friday',
      officeId: 1,
      startdate: new Date('2017-01-07'),
      enddate: new Date('2017-01-13')
    }),

    knex('events').insert({
      id: 131,
      name: 'Friday Meeting',
      description: 'A meeting on Friday',
      officeId: 2,
      startdate: new Date('2017-01-14'),
      enddate: new Date('2017-01-20')
    }),

    knex('events').insert({
      id: 132,
      name: 'Friday Meeting',
      description: 'A meeting on Friday',
      officeId: 2,
      startdate: new Date('2017-01-07'),
      enddate: new Date('2017-01-13')
    }),

    knex('events').insert({
      id: 133,
      name: 'Yellow Awards',
      description: 'Annual company awards',
      officeId: 2,
      startdate: new Date('2017-01-01'),
      enddate: new Date('2017-07-01')
    }),


    // 500-899
    knex('awards').del(),

    knex('awards').insert({
      id: 500,
      eventId: 130,
      awardcategoryId: 50
    }),
    knex('awards').insert({
      id: 501,
      eventId: 130,
      awardcategoryId: 51
    }),
    knex('awards').insert({
      id: 502,
      eventId: 130,
      awardcategoryId: 52
    }),
    knex('awards').insert({
      id: 503,
      eventId: 130,
      awardcategoryId: 53
    }),

    knex('awards').insert({
      id: 504,
      eventId: 131,
      awardcategoryId: 50
    }),
    knex('awards').insert({
      id: 505,
      eventId: 131,
      awardcategoryId: 51
    }),
    knex('awards').insert({
      id: 506,
      eventId: 131,
      awardcategoryId: 52
    }),
    knex('awards').insert({
      id: 507,
      eventId: 131,
      awardcategoryId: 53
    }),

    knex('awards').insert({
      id: 508,
      eventId: 133,
      awardcategoryId: 54
    }),
    knex('awards').insert({
      id: 509,
      eventId: 133,
      awardcategoryId: 55
    }),


    // 200-499
    knex('nominations').del(),

    knex('nominations').insert({
      id: 201,
      staffId: 3121,
      awardId: 501,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 202,
      staffId: 3122,
      awardId: 501,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 203,
      staffId: 3123,
      awardId: 501,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 204,
      staffId: 3124,
      awardId: 502,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 205,
      staffId: 3125,
      awardId: 502,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 206,
      staffId: 3121,
      awardId: 503,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 207,
      staffId: 3124,
      awardId: 503,
      description: 'zEx auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 208,
      staffId: 3125,
      awardId: 503,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 209,
      staffId: 3127,
      awardId: 503,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 210,
      staffId: 3127,
      awardId: 500,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),



    knex('nominations').insert({
      id: 211,
      staffId: 3130,
      awardId: 504,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 212,
      staffId: 3121,
      awardId: 504,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 213,
      staffId: 3120,
      awardId: 505,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 214,
      staffId: 3133,
      awardId: 506,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),


    knex('nominations').insert({
      id: 215,
      staffId: 3132,
      awardId: 507,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 216,
      staffId: 3131,
      awardId: 507,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 217,
      staffId: 3130,
      awardId: 507,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 218,
      staffId: 3129,
      awardId: 507,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    // 900-999
    knex('events_awardcategorys').del(),

    knex('events_awardcategorys').insert({
      id: 900,
      eventId: 130,
      awardcategoryId: 50
    }),
    knex('events_awardcategorys').insert({
      id: 901,
      eventId: 130,
      awardcategoryId: 51
    }),
    knex('events_awardcategorys').insert({
      id: 902,
      eventId: 130,
      awardcategoryId: 52
    }),
    knex('events_awardcategorys').insert({
      id: 903,
      eventId: 130,
      awardcategoryId: 53
    }),


    knex('events_awardcategorys').insert({
      id: 904,
      eventId: 131,
      awardcategoryId: 50
    }),
    knex('events_awardcategorys').insert({
      id: 905,
      eventId: 131,
      awardcategoryId: 51
    }),
    knex('events_awardcategorys').insert({
      id: 906,
      eventId: 131,
      awardcategoryId: 52
    }),
    knex('events_awardcategorys').insert({
      id: 907,
      eventId: 131,
      awardcategoryId: 53
    })

  )

};
