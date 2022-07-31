module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '428e0bd3d5f89994fa85398780e73aef'),
  },
});
