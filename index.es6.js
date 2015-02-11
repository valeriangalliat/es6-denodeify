export default (Promise=Promise) => f =>
  (...args) =>
    new Promise((resolve, reject) =>
      f(...args, (err, val) => err ? reject(err) : resolve(val))
    )
