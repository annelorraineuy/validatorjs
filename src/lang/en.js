module.exports = {
  accepted: 'The :attribute must be accepted',
  alpha: 'The :attribute field must contain only alphabetic characters.',
  alpha_dash: 'May only contain alpha-numeric characters, as well as dashes and underscores',
  alpha_num: 'The :attribute field must be alphanumeric.',
  between: 'Must be between :min and :max characters',
  confirmed: 'The :attribute confirmation does not match.',
  email: 'Please enter a valid email',
  date: 'Please enter a valid :attribute format',
  def: 'The :attribute attribute has errors.',
  digits: 'The :attribute must be :digits digits.',
  different: 'The :attribute and :different must be different.',
  'in': 'The selected :attribute is invalid.',
  integer: 'Must be an integer',
  min: {
    numeric: 'The :attribute must be at least :min.',
    string: 'The :attribute must be at least :min characters.'
  },
  max: {
    numeric: 'The :attribute may not be greater than :max.',
    string: 'The :attribute may not be greater than :max characters.'
  },
  not_in: 'The selected :attribute is invalid.',
  numeric: 'The :attribute must be a number.',
  required: 'Field is required',
  required_if: 'The :attribute field is required when :other is :value.',
  required_unless: 'The :attribute field is required when :other is not :value.',
  required_with: 'The :attribute field is required when :field is not empty.',
  required_with_all: 'The :attribute field is required when :fields are not empty.',
  required_without: 'The :attribute field is required when :field is empty.',
  required_without_all: 'The :attribute field is required when :fields are empty.',
  same: 'The :attribute and :same fields must match.',
  size: {
    numeric: 'The :attribute must be :size.',
    string: 'The :attribute must be :size characters.'
  },
  string: 'The :attribute must be a string.',
  url: 'The :attribute format is invalid.',
  regex: 'The :attribute format is invalid',
  attributes: {}
};
