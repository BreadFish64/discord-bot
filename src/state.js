/* Application State */
var State = function () {
  this.guild = null;
  this.logChannel = null;
  this.warnings = [];
  this.bans = [];
  this.stats = {
    joins: 0,
    leaves: 0,
    warnings: 0
  };
};

module.exports = new State();
