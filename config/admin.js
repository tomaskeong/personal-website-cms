module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e78d09b53d8f5833d3adf3832c997544'),
  },
});
