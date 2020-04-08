exports.seed = (knex, Promise) => {
    return knex.raw('DELETE FROM decktowfil;')
      .then(() => {
        const tows = [
          {
            tow_id: 1,
            ordnbr: 'D3',
            barge_1_name: 'CBC759',
            barge_2_name: 'CBC760',
            barge_3_name: 'CBC761',
            boat_1_name: 'Boat 1',
            boat_2_name: 'Boat 2',
            boat_3_name: 'Boat 3',
            barge_1_start: new Date(),
            barge_1_stop: new Date(),
            barge_2_start: new Date(),
            barge_2_stop: new Date(),
            barge_3_start: new Date(),
            barge_3_stop: new Date(),
            boat_1_start: new Date(),
            boat_1_stop: new Date(),
            boat_2_start: new Date(),
            boat_2_stop: new Date(),
            boat_3_start: new Date(),
            boat_3_stop: new Date(),
            barge_1_group: 1,
            barge_2_group: 1,
            barge_3_group: 1,
            boat_1_group: 1,
            boat_2_group: 1,
            boat_3_group: 1,
            created_by: 'Neal White',
            last_modified_by: 'Neal White',
            created_dttm: new Date(),
            modified_dttm: new Date()
          },
          {
            tow_id: 2,
            ordnbr: 'D1',
            barge_2_name: 'CBC760',

            boat_1_name: 'Boat 1',
            boat_2_name: 'Boat 2',
            barge_1_start: new Date(),
            barge_1_stop: new Date(),
            barge_2_start: new Date(),
            barge_2_stop: new Date(),
            barge_3_start: new Date(),
            barge_3_stop: new Date(),
            boat_1_start: new Date(),
            boat_1_stop: new Date(),
            boat_2_start: new Date(),
            boat_2_stop: new Date(),
            boat_3_start: new Date(),
            boat_3_stop: new Date(),
            barge_1_group: 1,
            barge_2_group: 1,
            barge_3_group: 1,
            boat_1_group: 1,
            boat_2_group: 1,
            boat_3_group: 1,
            created_by: 'Neal White',
            last_modified_by: 'Neal White',
            created_dttm: new Date(),
            modified_dttm: new Date()
          },
          {
            tow_id: 3,
            ordnbr: 'D1',
            barge_1_name: 'CBC759',

            boat_1_name: 'Boat 1',

            barge_1_start: new Date(),
            barge_1_stop: new Date(),
            barge_2_start: new Date(),
            barge_2_stop: new Date(),
            barge_3_start: new Date(),
            barge_3_stop: new Date(),
            boat_1_start: new Date(),
            boat_1_stop: new Date(),
            boat_2_start: new Date(),
            boat_2_stop: new Date(),
            boat_3_start: new Date(),
            boat_3_stop: new Date(),
            barge_1_group: 1,
            barge_2_group: 1,
            barge_3_group: 1,
            boat_1_group: 1,
            boat_2_group: 1,
            boat_3_group: 1,
            created_by: 'Neal White',
            last_modified_by: 'Neal White',
            created_dttm: new Date(),
            modified_dttm: new Date()
          }];
        return knex('decktowfil').insert(tows)
      });
};