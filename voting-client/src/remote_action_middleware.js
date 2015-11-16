// A function that takes a Redux store, and returns another function that takes
// a "next" callback. That function returns a third function that takes a Redux
// action. The innermost function is where the middleware implementation will
// actually go.
export default store => next => action => {
  console.log("in middleware", action);
  return next(action);
};
