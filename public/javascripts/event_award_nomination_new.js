
/**************************
        INITIAL
/**************************/
$(function(){
  initStaffs()
})

function initStaffs() {
  populateEventSearchOffice()
}

function populateEventSearchOffice() {
  $.get( "/api/staffs", function (data) {
    var results =  data.map(function(item) {
      return { id:item.id, text: item.name }
    })

    $("#nominationStaffId").select2({
      data: results,
      placeholder: { id:-1, text:'Select a Staff Member' },
      allowClear: true
    })
  })
}
