/** Updates the devices combobox.
 *
 * @param {string} ctName The name of the CT.
 * @param {Object} opt_default The entry which should be selected by default.
 */
ipbase.views.ReservePort.prototype.updateDevices = function(ctName, opt_default) {
  var that = this;
  var location_id = ctName.replace(
      new RegExp(ipbase.model.ct.prototype.SIMPLE_ROW_FORMAT), '$1');
  goog.dom.forms.setValue(goog.dom.getElement('location'), location_id);
  var ct = new ipbase.model.ct(location_id);
  ct.devices(function(devices) {
    if (this.device_selector === null) {
      that.logger.warning('Device selector is null!');
      return;
    }

    that.device_selector.removeAllItems();
    for (var i in devices) {
      that.device_selector.addItem(
          new goog.ui.ComboBoxItem(devices[i].hostname, devices[i]));
    }

    if (goog.isDefAndNotNull(opt_default)) {
      // @todo: add 'replacement' (part of PK)
      that.device_selector.setValue(opt_default.hostname);
    }
  });
}
