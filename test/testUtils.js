import CheckPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = CheckPropTypes(
    component.PropTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};