// A function that takes a Redux store, and returns another function that takes
// a "next" callback. That function returns a third function that takes a Redux
// action. The innermost function is where the middleware implementation will
// actually go.
export default socket => store => next => action => {
  socket.emit("action", action);
  return next(action);
};
