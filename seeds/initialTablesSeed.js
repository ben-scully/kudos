
exports.seed = function(knex, Promise) {

  return Promise.join(

    // 1-49
    knex('locations').del(),

    knex('locations').insert({
      id: 1,
      name: 'Melbourne',
      description: 'Melbourne office'
    }),
    knex('locations').insert({
      id: 2,
      name: 'Sydney',
      description: 'Sydney office'
    }),
    knex('locations').insert({
      id: 3,
      name: 'Auckland',
      description: 'Auckland office'
    }),
    knex('locations').insert({
      id: 4,
      name: 'Wellington',
      description: 'Wellington office'
    }),
    knex('locations').insert({
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


    // 3000-5999
    knex('persons').del(),

    knex('persons').insert({
      id: 3121,
      name: 'Brian Green'
    }),
    knex('persons').insert({
      id: 3122,
      name: 'Pearl Swan'
    }),
    knex('persons').insert({
      id: 3123,
      name: 'Kelly Smith'
    }),
    knex('persons').insert({
      id: 3124,
      name: 'Steve Adams'
    }),
    knex('persons').insert({
      id: 3125,
      name: 'Lucy Prescott'
    }),
    knex('persons').insert({
      id: 3126,
      name: 'Jenny Block'
    }),
    knex('persons').insert({
      id: 3127,
      name: 'Jack Reacher'
    }),
    knex('persons').insert({
      id: 3128,
      name: 'Jason Bourne'
    }),
    knex('persons').insert({
      id: 3129,
      name: 'Matt Damon'
    }),
    knex('persons').insert({
      id: 3130,
      name: 'James Bond'
    }),
    knex('persons').insert({
      id: 3131,
      name: 'Kate Franks'
    }),
    knex('persons').insert({
      id: 3132,
      name: 'Peter MacKenzie'
    }),
    knex('persons').insert({
      id: 3133,
      name: 'Nathan Childs'
    }),


    // 100-199
    knex('events').del(),

    knex('events').insert({
      id: 130,
      name: 'Friday Meeting',
      locationId: 1,
      start: '2017-01-07',
      end: '2017-01-13'
    }),

    knex('events').insert({
      id: 131,
      name: 'Friday Meeting',
      locationId: 2,
      start: '2017-01-14',
      end: '2017-01-20'
    }),

    knex('events').insert({
      id: 132,
      name: 'Friday Meeting',
      locationId: 2,
      start: '2017-01-07',
      end: '2017-01-13'
    }),

    knex('events').insert({
      id: 133,
      name: 'Yellow Awards',
      locationId: 2,
      start: '2017-01-01',
      end: '2017-07-01'
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


    // 200-499
    knex('nominations').del(),

    knex('nominations').insert({
      id: 201,
      personId: 3121,
      awardId: 501,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 202,
      personId: 3122,
      awardId: 501,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 203,
      personId: 3123,
      awardId: 501,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 204,
      personId: 3124,
      awardId: 502,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 205,
      personId: 3125,
      awardId: 502,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 206,
      personId: 3121,
      awardId: 503,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 207,
      personId: 3124,
      awardId: 503,
      description: 'zEx auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 208,
      personId: 3125,
      awardId: 503,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 209,
      personId: 3127,
      awardId: 503,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 210,
      personId: 3127,
      awardId: 500,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),



    knex('nominations').insert({
      id: 211,
      personId: 3130,
      awardId: 504,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 212,
      personId: 3121,
      awardId: 504,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 213,
      personId: 3120,
      awardId: 505,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 214,
      personId: 3133,
      awardId: 506,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),


    knex('nominations').insert({
      id: 215,
      personId: 3132,
      awardId: 507,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 216,
      personId: 3131,
      awardId: 507,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 217,
      personId: 3130,
      awardId: 507,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 218,
      personId: 3129,
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
