'use strict';

Blockly.CSharp['infer_bernoulli'] = function(block) {
  var probability = Blockly.CSharp.valueToCode(block, 'PROB', Blockly.CSharp.ORDER_ATOMIC);
  var code = 'Variable.Bernoulli(' + probability + ')';
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['infer_bernoulli_c'] = function(block) {
  var dropdown_type = block.getFieldValue('TYPE');
  var combinationMap = {
    AND: "&&",
    OR: "||"
  };
  var value_distr1 = Blockly.CSharp.valueToCode(block, 'DISTR1', Blockly.CSharp.ORDER_ATOMIC);
  var value_distr2 = Blockly.CSharp.valueToCode(block, 'DISTR2', Blockly.CSharp.ORDER_ATOMIC);
  var code = value_distr1 + " " + combinationMap[dropdown_type] + " " + value_distr2;
  return [code, Blockly.CSharp.ORDER_NONE];
};