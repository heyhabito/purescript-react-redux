'use strict';

var Redux = require('redux');

var ReactRedux = require('react-redux');

exports.reduxCreateStore = function reduxCreateStore(reducer, state, enhancer){
  return Redux.createStore(reducer, state, enhancer);
};

exports.reduxApplyMiddleware = function reduxApplyMiddleware(middleware){
  return Redux.applyMiddleware.apply(Redux, middleware);
};

var reduxConnect = function reduxConnect(mapStateToProps, mapDispatchToProps, mergeProps, options){
  return ReactRedux.connect(mapStateToProps, mapDispatchToProps, mergeProps, options);
};

exports.reduxConnect = reduxConnect;
exports.reduxConnect_ = reduxConnect;

exports.reduxProviderClass = ReactRedux.Provider;

exports.reduxDevtoolsExtensionEnhancer = !window.__REDUX_DEVTOOLS_EXTENSION__ ? function reduxDevtoolsExtensionEnhancer (a) { return a; } : window.__REDUX_DEVTOOLS_EXTENSION__();
