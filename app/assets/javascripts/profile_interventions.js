(function(root) {

  var ProfileInterventionsController = function () {
    $('#new_intervention').hide();  // form initializes hidden
  }

  ProfileInterventionsController.prototype.showInterventionForm = function () {
    $('#new_intervention').show();
    $('#open-intervention-form').addClass('selected');
    $('.intervention-detail').hide();
    $('.intervention-cell').removeClass('activated');
  }

  ProfileInterventionsController.prototype.hideInterventionForm = function () {
    $('#new_intervention').hide();
    $('#open-intervention-form').removeClass('selected');
    $('.intervention-detail').first().show();
    $('.intervention-cell').first().addClass('activated');
  }

  ProfileInterventionsController.prototype.selectIntervention = function (intervention) {
    $('#open-intervention-form').removeClass('selected');
    $('#new_intervention').hide();
    $('.intervention-cell').removeClass('activated');
    intervention.addClass('activated');
    // show that intervention on the right
  }

  root.ProfileInterventionsController = ProfileInterventionsController;

})(window)
