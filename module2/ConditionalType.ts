{


  type User = {
    role: 'user';
    permissions: string[];
  };

  type Admin = {
    role: 'admin';
    permissions: string[];
  };

  type Permissions<T> = T extends { role: 'admin' } ? 'full-access' : 'limited-access';

  const userPermissions: Permissions<User> = 'limited-access'; // userPermissions has type 'limited-access'
  const adminPermissions: Permissions<Admin> = 'full-access'; // adminPermissions has type 'full-access'
}