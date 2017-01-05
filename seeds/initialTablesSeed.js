
exports.seed = function(knex, Promise) {

  return Promise.join(

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



    knex('awardcategorys').del(),

    knex('awardcategorys').insert({
      id: 10,
      name: 'LooseWheel',
      description: 'Doing something silly'
    }),
    knex('awardcategorys').insert({
      id: 11,
      name: 'TeamMate',
      description: 'Recognition by a colleague'
    }),
    knex('awardcategorys').insert({
      id: 12,
      name: 'AboveAndBeyond',
      description: 'Going the extra mile'
    }),
    knex('awardcategorys').insert({
      id: 13,
      name: 'Harper',
      description: 'Positive client feedback'
    }),



    knex('weeks').del(),

    knex('weeks').insert({
      id: 52,
      friday: '2017-01-06',
    }),
    knex('weeks').insert({
      id: 53,
      friday: '2017-01-13'
    }),
    knex('weeks').insert({
      id: 54,
      friday: '2017-01-20',
    }),
    knex('weeks').insert({
      id: 55,
      friday: '2017-01-27'
    }),



    knex('persons').del(),

    knex('persons').insert({
      id: 121,
      name: 'Brian Green'
    }),
    knex('persons').insert({
      id: 122,
      name: 'Pearl Swan'
    }),
    knex('persons').insert({
      id: 123,
      name: 'Kelly Smith'
    }),
    knex('persons').insert({
      id: 124,
      name: 'Steve Adams'
    }),
    knex('persons').insert({
      id: 125,
      name: 'Lucy Prescott'
    }),
    knex('persons').insert({
      id: 126,
      name: 'Jenny Block'
    }),
    knex('persons').insert({
      id: 127,
      name: 'Jack Reacher'
    }),
    knex('persons').insert({
      id: 128,
      name: 'Jason Bourne'
    }),
    knex('persons').insert({
      id: 129,
      name: 'Matt Damon'
    }),
    knex('persons').insert({
      id: 130,
      name: 'James Bond'
    }),
    knex('persons').insert({
      id: 131,
      name: 'Kate Franks'
    }),
    knex('persons').insert({
      id: 132,
      name: 'Peter MacKenzie'
    }),
    knex('persons').insert({
      id: 133,
      name: 'Nathan Childs'
    }),



    knex('awards').del(),

    knex('awards').insert({
      id: 30,
      locationId: 1,
      awardcategoryId: 10,
      weekId: 53
    }),
    knex('awards').insert({
      id: 31,
      locationId: 1,
      awardcategoryId: 11,
      weekId: 53
    }),
    knex('awards').insert({
      id: 32,
      locationId: 1,
      awardcategoryId: 12,
      weekId: 53
    }),
    knex('awards').insert({
      id: 33,
      locationId: 1,
      awardcategoryId: 13,
      weekId: 53
    }),


    knex('awards').insert({
      id: 34,
      locationId: 2,
      awardcategoryId: 10,
      weekId: 53
    }),
    knex('awards').insert({
      id: 35,
      locationId: 2,
      awardcategoryId: 11,
      weekId: 53
    }),
    knex('awards').insert({
      id: 36,
      locationId: 2,
      awardcategoryId: 12,
      weekId: 53
    }),
    knex('awards').insert({
      id: 37,
      locationId: 2,
      awardcategoryId: 13,
      weekId: 53
    }),



    knex('nominations').del(),

    knex('nominations').insert({
      id: 1,
      personId: 121,
      awardId: 30,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 2,
      personId: 122,
      awardId: 30,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 3,
      personId: 123,
      awardId: 30,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 4,
      personId: 124,
      awardId: 31,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 5,
      personId: 124,
      awardId: 31,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 6,
      personId: 121,
      awardId: 32,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 7,
      personId: 124,
      awardId: 32,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 8,
      personId: 125,
      awardId: 32,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 9,
      personId: 127,
      awardId: 32,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 10,
      personId: 127,
      awardId: 33,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),



    knex('nominations').insert({
      id: 11,
      personId: 130,
      awardId: 34,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 12,
      personId: 121,
      awardId: 34,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 13,
      personId: 120,
      awardId: 35,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),


    knex('nominations').insert({
      id: 14,
      personId: 133,
      awardId: 36,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),


    knex('nominations').insert({
      id: 15,
      personId: 132,
      awardId: 37,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 16,
      personId: 131,
      awardId: 37,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: true
    }),
    knex('nominations').insert({
      id: 17,
      personId: 130,
      awardId: 37,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    }),
    knex('nominations').insert({
      id: 18,
      personId: 129,
      awardId: 37,
      description: 'Ex auditu at minuta angeli in si. Percepturi communibus indefinite quo hic eae dubitandum aliquandiu. Sum pati novi nunc tot uti meum. Ipsarum proprie impetus iis assumam probari age eos exiguum. Ex assideo haberet ea necesse enatare at quaeque nostras.',
      winner: false
    })

  )

};
