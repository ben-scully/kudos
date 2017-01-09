
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


    // 1000-2999
    knex('weeks').del(),

    knex('weeks').insert({
      id: 1052,
      date: '2017-01-06'
    }),
    knex('weeks').insert({
      id: 1053,
      date: '2017-01-13'
    }),
    knex('weeks').insert({
      id: 1054,
      date: '2017-01-20'
    }),
    knex('weeks').insert({
      id: 1055,
      date: '2017-01-27'
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
    knex('fridaymeetings').del(),

    knex('fridaymeetings').insert({
      id: 130,
      locationId: 1,
      weekId: 1053
    }),


    knex('fridaymeetings').insert({
      id: 134,
      locationId: 2,
      weekId: 1054
    }),


    // 200-899
    knex('nominations').del(),

    knex('nominations').insert({
      id: 201,
      personId: 3121,
      fridaymeetingId: 130,
      awardcategoryId: 50,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 202,
      personId: 3122,
      fridaymeetingId: 130,
      awardcategoryId: 50,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 203,
      personId: 3123,
      fridaymeetingId: 130,
      awardcategoryId: 50,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 204,
      personId: 3124,
      fridaymeetingId: 130,
      awardcategoryId: 51,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 205,
      personId: 3125,
      fridaymeetingId: 130,
      awardcategoryId: 51,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 206,
      personId: 3121,
      fridaymeetingId: 130,
      awardcategoryId: 52,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 207,
      personId: 3124,
      fridaymeetingId: 130,
      awardcategoryId: 52,
      description: 'zEx auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 208,
      personId: 3125,
      fridaymeetingId: 130,
      awardcategoryId: 52,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 209,
      personId: 3127,
      fridaymeetingId: 130,
      awardcategoryId: 52,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 210,
      personId: 3127,
      fridaymeetingId: 130,
      awardcategoryId: 53,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),



    knex('nominations').insert({
      id: 211,
      personId: 3130,
      fridaymeetingId: 131,
      awardcategoryId: 50,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 212,
      personId: 3121,
      fridaymeetingId: 131,
      awardcategoryId: 50,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 213,
      personId: 3120,
      fridaymeetingId: 131,
      awardcategoryId: 51,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 214,
      personId: 3133,
      fridaymeetingId: 131,
      awardcategoryId: 52,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),


    knex('nominations').insert({
      id: 215,
      personId: 3132,
      fridaymeetingId: 131,
      awardcategoryId: 53,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 216,
      personId: 3131,
      fridaymeetingId: 131,
      awardcategoryId: 53,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 217,
      personId: 3130,
      fridaymeetingId: 131,
      awardcategoryId: 53,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 218,
      personId: 3129,
      fridaymeetingId: 131,
      awardcategoryId: 53,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    // 900-999
    knex('fridaymeetings_awardcategorys').del(),

    knex('fridaymeetings_awardcategorys').insert({
      id: 900,
      fridaymeetingId: 130,
      awardcategoryId: 50
    }),
    knex('fridaymeetings_awardcategorys').insert({
      id: 901,
      fridaymeetingId: 130,
      awardcategoryId: 51
    }),
    knex('fridaymeetings_awardcategorys').insert({
      id: 902,
      fridaymeetingId: 130,
      awardcategoryId: 52
    }),
    knex('fridaymeetings_awardcategorys').insert({
      id: 903,
      fridaymeetingId: 130,
      awardcategoryId: 53
    }),


    knex('fridaymeetings_awardcategorys').insert({
      id: 904,
      fridaymeetingId: 131,
      awardcategoryId: 50
    }),
    knex('fridaymeetings_awardcategorys').insert({
      id: 905,
      fridaymeetingId: 131,
      awardcategoryId: 51
    }),
    knex('fridaymeetings_awardcategorys').insert({
      id: 906,
      fridaymeetingId: 131,
      awardcategoryId: 52
    }),
    knex('fridaymeetings_awardcategorys').insert({
      id: 907,
      fridaymeetingId: 131,
      awardcategoryId: 53
    })

  )

};
