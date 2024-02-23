class AuthMiddleware {
  isLoggedIn: boolean = true;
  userPerms: string[] = ["view home page", "view dashboard"];
  userRoles: string[] = ["admin", "staff", "student"];

  // Check user is login or not
  checkAuthenticated(isAuthenticated: boolean): boolean {
    if (!this.isLoggedIn && isAuthenticated) {
      return false;
    }

    return true;
  }

  // Check user permissions
  checkPerms(allowedPerms: string[]): boolean {
    if (!this.isLoggedIn) {
      return false;
    }

    if (!this.userPerms.some((e) => allowedPerms.includes(e))) return false;

    return true;
  }

  // Check user roles
  checkRoles(allowedRoles: string[]): boolean {
    if (!this.isLoggedIn) {
      return false;
    }

    if (!this.userRoles.some((e) => allowedRoles.includes(e))) return false;

    return true;
  }

  // Router handler
  routerHandler(
    isAuth: boolean,
    permissions: string[],
    roles: string[]
  ): boolean {
    if (
      !isAuth &&
      (!permissions || !permissions.length) &&
      (!roles || !roles.length)
    ) {
      return true;
    }

    const isAuthenticated = this.checkAuthenticated(isAuth);
    const hasPermissions = this.checkPerms(permissions);
    const hasRoles = this.checkRoles(roles);

    if (!isAuth) {
      if (hasPermissions || hasRoles) {
        return true;
      }
    } else if (isAuthenticated && !hasPermissions && !hasRoles) {
      return true;
    }

    return false;
  }
}

export default new AuthMiddleware();
