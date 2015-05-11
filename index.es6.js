export default (PromiseArg=Promise) => f =>
  (...args) =>
    new PromiseArg((resolve, reject) =>
      f(...args, (err, val) => err ? reject(err) : resolve(val))
    )
